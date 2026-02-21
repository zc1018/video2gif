import React from 'react';
import { EstimateResult } from '../types';

interface Props {
  estimate: EstimateResult | null;
  loading: boolean;
}

export default function SizeEstimate({ estimate, loading }: Props) {
  const bytes = estimate?.estimatedSize ?? 0;
  const sizeClass = bytes > 100 * 1024 * 1024 ? 'danger' : bytes > 50 * 1024 * 1024 ? 'warn' : '';

  return (
    <div className="size-estimate">
      <div className="label">预估 GIF 大小</div>
      <div className={`value${sizeClass ? ` ${sizeClass}` : ''}`}>
        {loading ? '计算中...' : estimate ? estimate.estimatedSizeFormatted : '--'}
      </div>
      {estimate && (
        <div className="dims">
          输出尺寸：{estimate.width} × {estimate.height}
          {sizeClass === 'warn' && ' · 文件较大，建议降低帧率或清晰度'}
          {sizeClass === 'danger' && ' · 文件过大，建议降低帧率或清晰度'}
        </div>
      )}
    </div>
  );
}
