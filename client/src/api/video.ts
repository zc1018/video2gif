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
          const response = JSON.parse(xhr.responseText);
          const serverError = response.error || '上传失败，请稍后重试';
          // 服务器错误统一提示
          if (xhr.status >= 500) {
            reject(new Error('服务繁忙，请稍后重试'));
          } else {
            reject(new Error(serverError));
          }
        } catch {
          reject(new Error(xhr.status >= 500 ? '服务繁忙，请稍后重试' : '上传失败，请检查文件后重试'));
        }
      }
    };

    xhr.onerror = () => reject(new Error('网络异常，请检查网络连接后重试'));
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
      const errorMsg = data.error || '转换失败';
      // 优化错误提示
      let userFriendlyError = '视频处理失败，请尝试降低分辨率或帧率后重试';
      if (errorMsg.includes('codec') || errorMsg.includes('编码')) {
        userFriendlyError = '视频编码格式不兼容，请尝试转换为 MP4 格式后重试';
      } else if (errorMsg.includes('memory') || errorMsg.includes('内存')) {
        userFriendlyError = '视频过大，建议缩短时长或降低分辨率后重试';
      } else if (errorMsg.includes('timeout') || errorMsg.includes('超时')) {
        userFriendlyError = '处理超时，建议缩短视频时长后重试';
      }
      onError(userFriendlyError);
      es.close();
    } else {
      onProgress(data.progress, data.stage);
    }
  };

  es.onerror = () => {
    onError('连接中断，请检查网络后刷新页面重试');
    es.close();
  };

  return () => es.close();
}

export function getDownloadUrl(outputId: string): string {
  return `${BASE}/download/${outputId}`;
}
