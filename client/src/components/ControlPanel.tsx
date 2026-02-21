import React from 'react';
import { CropRatio, FPS, Resolution } from '../types';

interface Props {
  resolution: Resolution;
  fps: FPS;
  cropRatio: CropRatio;
  onResolutionChange: (r: Resolution) => void;
  onFpsChange: (f: FPS) => void;
  onCropRatioChange: (r: CropRatio) => void;
}

const RESOLUTIONS: Resolution[] = [1080, 720, 576, 480];
const FPS_OPTIONS: FPS[] = [5, 10, 15, 20, 24, 30];
const CROP_RATIOS: { label: string; value: CropRatio }[] = [
  { label: '不裁剪', value: 'none' },
  { label: '1:1', value: '1:1' },
  { label: '4:3', value: '4:3' },
  { label: '3:4', value: '3:4' },
  { label: '16:9', value: '16:9' },
  { label: '9:16', value: '9:16' },
  { label: '自由', value: 'free' },
];

export default function ControlPanel({
  resolution, fps, cropRatio,
  onResolutionChange, onFpsChange, onCropRatioChange
}: Props) {
  return (
    <div className="control-panel">
      <div className="control-section">
        <h3>清晰度</h3>
        <div className="btn-group">
          {RESOLUTIONS.map((r) => (
            <button
              key={r}
              className={`btn-option${resolution === r ? ' active' : ''}`}
              onClick={() => onResolutionChange(r)}
            >
              {r}p
            </button>
          ))}
        </div>
      </div>

      <div className="divider" />

      <div className="control-section">
        <h3>帧率 (FPS)</h3>
        <div className="btn-group">
          {FPS_OPTIONS.map((f) => (
            <button
              key={f}
              className={`btn-option${fps === f ? ' active' : ''}`}
              onClick={() => onFpsChange(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="divider" />

      <div className="control-section">
        <h3>裁剪比例</h3>
        <div className="btn-group">
          {CROP_RATIOS.map(({ label, value }) => (
            <button
              key={value}
              className={`btn-option${cropRatio === value ? ' active' : ''}`}
              onClick={() => onCropRatioChange(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
