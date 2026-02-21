import { VideoMetadata, ConvertSettings, EstimateResult } from '../types';

// @ts-ignore
const BASE = import.meta.env.PROD ? '/video2gif/api' : '/api';

export async function uploadVideo(file: File, onProgress?: (p: number) => void): Promise<{ id: string; filename: string }> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const form = new FormData();
    form.append('video', file);

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) {
        onProgress(Math.round((e.loaded / e.total) * 100));
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        try {
          reject(new Error(JSON.parse(xhr.responseText).error || '上传失败'));
        } catch {
          reject(new Error('上传失败'));
        }
      }
    };

    xhr.onerror = () => reject(new Error('网络错误'));
    xhr.open('POST', `${BASE}/upload`);
    xhr.send(form);
  });
}

export async function getMetadata(id: string): Promise<VideoMetadata> {
  const res = await fetch(`${BASE}/metadata/${id}`);
  if (!res.ok) throw new Error((await res.json()).error || '获取元数据失败');
  return res.json();
}

export async function estimateSize(
  settings: ConvertSettings,
  meta: VideoMetadata
): Promise<EstimateResult> {
  const res = await fetch(`${BASE}/estimate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      resolution: settings.resolution,
      fps: settings.fps,
      startTime: settings.startTime,
      endTime: settings.endTime,
      cropRatio: settings.cropRatio,
      srcWidth: meta.width,
      srcHeight: meta.height
    })
  });
  if (!res.ok) throw new Error((await res.json()).error || '估算失败');
  return res.json();
}

export async function startConvert(
  id: string,
  settings: ConvertSettings
): Promise<{ taskId: string; outputId: string }> {
  const res = await fetch(`${BASE}/convert`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id,
      resolution: settings.resolution,
      fps: settings.fps,
      startTime: settings.startTime,
      endTime: settings.endTime,
      crop: settings.crop
    })
  });
  if (!res.ok) throw new Error((await res.json()).error || '转换失败');
  return res.json();
}

export function watchProgress(
  taskId: string,
  onProgress: (progress: number, stage: string) => void,
  onDone: (outputId: string) => void,
  onError: (msg: string) => void
): () => void {
  const es = new EventSource(`${BASE}/progress/${taskId}`);

  es.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.stage === 'done') {
      onDone(data.outputId);
      es.close();
    } else if (data.stage === 'error' || data.progress === -1) {
      onError(data.error || '转换失败');
      es.close();
    } else {
      onProgress(data.progress, data.stage);
    }
  };

  es.onerror = () => {
    onError('连接中断');
    es.close();
  };

  return () => es.close();
}

export function getDownloadUrl(outputId: string): string {
  return `${BASE}/download/${outputId}`;
}
