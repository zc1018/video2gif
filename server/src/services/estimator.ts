export interface EstimateParams {
  width: number;
  height: number;
  fps: number;
  duration: number;
  colorComplexity?: number;
}

export function estimateGifSize(params: EstimateParams): number {
  const { width, height, fps, duration, colorComplexity = 0.6 } = params;

  const totalFrames = Math.ceil(fps * duration);
  const pixelsPerFrame = width * height;

  // 每像素字节数（LZW 压缩后）
  const bytesPerPixel = 0.5 * (0.5 + colorComplexity);

  // 帧间压缩系数
  const interFrameRatio = 0.7;

  const rawSize = totalFrames * pixelsPerFrame * bytesPerPixel * interFrameRatio;
  const overhead = 1024 + totalFrames * 20;

  return Math.round(rawSize + overhead);
}

export function calcOutputDimensions(
  srcWidth: number,
  srcHeight: number,
  targetHeight: number,
  cropRatio?: string
): { width: number; height: number } {
  let w = srcWidth;
  let h = srcHeight;

  // 先应用裁剪比例
  if (cropRatio && cropRatio !== 'free' && cropRatio !== 'none') {
    const [rw, rh] = cropRatio.split(':').map(Number);
    const cropAspect = rw / rh;
    const srcAspect = w / h;
    if (srcAspect > cropAspect) {
      w = Math.round(h * cropAspect);
    } else {
      h = Math.round(w / cropAspect);
    }
  }

  // 缩放到目标高度
  if (h > targetHeight) {
    const scale = targetHeight / h;
    w = Math.round(w * scale);
    h = targetHeight;
  }

  // 确保偶数
  w = w % 2 === 0 ? w : w - 1;
  h = h % 2 === 0 ? h : h - 1;

  return { width: w, height: h };
}

export function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
