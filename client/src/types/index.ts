export interface VideoMetadata {
  duration: number;
  width: number;
  height: number;
  fps: number;
  codec: string;
  size: number;
}

export interface CropArea {
  x: number;
  y: number;
  w: number;
  h: number;
}

export type CropRatio = '1:1' | '4:3' | '3:4' | '16:9' | '9:16' | 'free' | 'none';
export type Resolution = 1080 | 720 | 576 | 480;
export type FPS = 5 | 10 | 15 | 20 | 24 | 30;

export interface ConvertSettings {
  resolution: Resolution;
  fps: FPS;
  startTime: number;
  endTime: number;
  cropRatio: CropRatio;
  crop: CropArea | null;
}

export interface EstimateResult {
  estimatedSize: number;
  estimatedSizeFormatted: string;
  width: number;
  height: number;
}
