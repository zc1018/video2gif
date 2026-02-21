import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const UPLOADS_DIR = path.join(__dirname, '../../uploads');
const OUTPUT_DIR = path.join(__dirname, '../../output');

export interface VideoMetadata {
  duration: number;
  width: number;
  height: number;
  fps: number;
  codec: string;
  size: number;
}

export interface ConvertParams {
  inputPath: string;
  outputId: string;
  resolution: number;
  fps: number;
  startTime: number;
  endTime: number;
  crop: { x: number; y: number; w: number; h: number } | null;
}

export type ProgressCallback = (progress: number, stage: string) => void;

export async function getMetadata(filePath: string): Promise<VideoMetadata> {
  return new Promise((resolve, reject) => {
    const args = [
      '-v', 'quiet',
      '-print_format', 'json',
      '-show_format',
      '-show_streams',
      filePath
    ];

    const proc = spawn('ffprobe', args);
    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', (d) => { stdout += d; });
    proc.stderr.on('data', (d) => { stderr += d; });

    proc.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`ffprobe failed: ${stderr}`));
        return;
      }
      try {
        const data = JSON.parse(stdout);
        const videoStream = data.streams?.find((s: any) => s.codec_type === 'video');
        if (!videoStream) {
          reject(new Error('No video stream found'));
          return;
        }

        // 解析帧率 "30000/1001" 格式
        const fpsStr = videoStream.r_frame_rate || videoStream.avg_frame_rate || '25/1';
        const [num, den] = fpsStr.split('/').map(Number);
        const fps = den ? Math.round((num / den) * 100) / 100 : num;

        const stat = fs.statSync(filePath);

        resolve({
          duration: parseFloat(data.format?.duration || videoStream.duration || '0'),
          width: videoStream.width,
          height: videoStream.height,
          fps: Math.round(fps),
          codec: videoStream.codec_name,
          size: stat.size
        });
      } catch (e) {
        reject(new Error(`Failed to parse ffprobe output: ${e}`));
      }
    });
  });
}

export async function generateGif(
  params: ConvertParams,
  onProgress: ProgressCallback
): Promise<string> {
  const { inputPath, outputId, resolution, fps, startTime, endTime, crop } = params;
  const duration = endTime - startTime;
  const palettePath = path.join(OUTPUT_DIR, `${outputId}_palette.png`);
  const outputPath = path.join(OUTPUT_DIR, `${outputId}.gif`);

  // 构建 vf filter
  const buildFilter = (withPalette = false): string => {
    const parts: string[] = [];

    if (crop) {
      parts.push(`crop=${crop.w}:${crop.h}:${crop.x}:${crop.y}`);
    }

    parts.push(`scale=-2:${resolution}:flags=lanczos`);
    parts.push(`fps=${fps}`);

    if (!withPalette) {
      parts.push('palettegen=stats_mode=diff');
      return parts.join(',');
    }

    return parts.join(',');
  };

  // 第一步：生成调色板
  onProgress(0, 'palette');
  await runFFmpeg([
    '-ss', String(startTime),
    '-t', String(duration),
    '-i', inputPath,
    '-vf', buildFilter(false),
    '-y', palettePath
  ], duration, (p) => onProgress(Math.round(p * 0.3), 'palette'));

  // 第二步：生成 GIF
  onProgress(30, 'gif');
  const videoFilter = buildFilter(true);
  await runFFmpeg([
    '-ss', String(startTime),
    '-t', String(duration),
    '-i', inputPath,
    '-i', palettePath,
    '-lavfi', `${videoFilter} [x]; [x][1:v] paletteuse=dither=floyd_steinberg`,
    '-y', outputPath
  ], duration, (p) => onProgress(30 + Math.round(p * 70), 'gif'));

  // 清理调色板
  fs.unlink(palettePath, () => {});

  return outputPath;
}

function runFFmpeg(
  args: string[],
  totalDuration: number,
  onProgress: (ratio: number) => void
): Promise<void> {
  return new Promise((resolve, reject) => {
    const proc = spawn('ffmpeg', args);
    let stderr = '';

    proc.stderr.on('data', (data: Buffer) => {
      const line = data.toString();
      stderr += line;

      // 解析进度
      const match = line.match(/time=(\d+):(\d+):(\d+\.?\d*)/);
      if (match && totalDuration > 0) {
        const current = +match[1] * 3600 + +match[2] * 60 + +match[3];
        onProgress(Math.min(0.99, current / totalDuration));
      }
    });

    proc.on('close', (code) => {
      if (code === 0) {
        onProgress(1);
        resolve();
      } else {
        reject(new Error(`FFmpeg exited with code ${code}: ${stderr.slice(-500)}`));
      }
    });
  });
}

export function getUploadPath(id: string): string | null {
  if (!fs.existsSync(UPLOADS_DIR)) return null;
  const files = fs.readdirSync(UPLOADS_DIR);
  const file = files.find((f) => f.startsWith(id));
  return file ? path.join(UPLOADS_DIR, file) : null;
}

export function getOutputPath(id: string): string | null {
  const p = path.join(OUTPUT_DIR, `${id}.gif`);
  return fs.existsSync(p) ? p : null;
}

export function cleanupOldFiles(): void {
  const TWO_HOURS = 2 * 60 * 60 * 1000;
  const now = Date.now();

  for (const dir of [UPLOADS_DIR, OUTPUT_DIR]) {
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      const fp = path.join(dir, file);
      try {
        const stat = fs.statSync(fp);
        if (now - stat.mtimeMs > TWO_HOURS) {
          fs.unlinkSync(fp);
        }
      } catch {}
    }
  }
}
