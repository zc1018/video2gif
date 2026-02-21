import React, { useRef, useCallback, useState } from 'react';
import { CropArea, CropRatio, VideoMetadata } from '../types';
import CropOverlay from './CropOverlay';

interface Props {
  blobUrl: string;
  meta: VideoMetadata;
  cropRatio: CropRatio;
  startTime: number;
  endTime: number;
  onCropChange: (crop: CropArea | null) => void;
  onTimeChange: (start: number, end: number) => void;
}

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = (s % 60).toFixed(1).padStart(4, '0');
  return `${m}:${sec}`;
}

export default function VideoPreview({
  blobUrl, meta, cropRatio, startTime, endTime, onCropChange, onTimeChange
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<'start' | 'end' | null>(null);

  const getTimeFromX = useCallback((clientX: number): number => {
    const track = trackRef.current;
    if (!track) return 0;
    const rect = track.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    return ratio * meta.duration;
  }, [meta.duration]);

  const onThumbMouseDown = useCallback((e: React.MouseEvent, which: 'start' | 'end') => {
    e.preventDefault();
    setDragging(which);

    const onMove = (ev: MouseEvent) => {
      const t = getTimeFromX(ev.clientX);
      if (which === 'start') {
        const newStart = Math.min(t, endTime - 0.5);
        onTimeChange(Math.max(0, newStart), endTime);
        if (videoRef.current) videoRef.current.currentTime = Math.max(0, newStart);
      } else {
        const newEnd = Math.max(t, startTime + 0.5);
        onTimeChange(startTime, Math.min(meta.duration, newEnd));
        if (videoRef.current) videoRef.current.currentTime = Math.min(meta.duration, newEnd);
      }
    };

    const onUp = () => {
      setDragging(null);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [getTimeFromX, startTime, endTime, meta.duration, onTimeChange]);

  const startPct = (startTime / meta.duration) * 100;
  const endPct = (endTime / meta.duration) * 100;

  return (
    <div className="video-preview-wrap">
      <div className="video-container">
        <video
          ref={videoRef}
          src={blobUrl}
          controls
          style={{ maxHeight: 480 }}
        />
        <CropOverlay
          cropRatio={cropRatio}
          videoWidth={meta.width}
          videoHeight={meta.height}
          onCropChange={onCropChange}
        />
      </div>

      <div className="timeline-wrap">
        <div className="timeline-label">
          <span>时间范围</span>
          <span style={{ color: 'var(--text)' }}>
            {formatTime(endTime - startTime)} 秒
          </span>
        </div>

        <div className="timeline-track" ref={trackRef}>
          <div
            className="timeline-range"
            style={{ left: `${startPct}%`, width: `${endPct - startPct}%` }}
          />
          <div
            className="timeline-thumb"
            style={{ left: `${startPct}%` }}
            onMouseDown={(e) => onThumbMouseDown(e, 'start')}
          />
          <div
            className="timeline-thumb"
            style={{ left: `${endPct}%` }}
            onMouseDown={(e) => onThumbMouseDown(e, 'end')}
          />
        </div>

        <div className="timeline-times">
          <span>{formatTime(startTime)}</span>
          <span>{formatTime(meta.duration)}</span>
        </div>
      </div>
    </div>
  );
}
