import React, { useRef, useState, useCallback, useEffect } from 'react';
import { CropArea, CropRatio } from '../types';

interface Props {
  cropRatio: CropRatio;
  videoWidth: number;
  videoHeight: number;
  onCropChange: (crop: CropArea | null) => void;
}

type Handle = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'move';

interface BoxState {
  x: number; y: number; w: number; h: number;
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

function ratioToAspect(ratio: CropRatio): number | null {
  if (ratio === 'none' || ratio === 'free') return null;
  const [a, b] = ratio.split(':').map(Number);
  return a / b;
}

export default function CropOverlay({ cropRatio, videoWidth, videoHeight, onCropChange }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<BoxState | null>(null);
  const dragRef = useRef<{ handle: Handle; startX: number; startY: number; startBox: BoxState } | null>(null);

  // 当比例变化时重置裁剪框
  useEffect(() => {
    if (cropRatio === 'none') {
      setBox(null);
      onCropChange(null);
      return;
    }

    const aspect = ratioToAspect(cropRatio);
    const container = containerRef.current;
    if (!container) return;

    const { width: cw, height: ch } = container.getBoundingClientRect();
    if (!cw || !ch) return;

    let bw: number, bh: number;
    if (aspect === null) {
      // free: 默认全画面
      bw = cw * 0.8;
      bh = ch * 0.8;
    } else {
      const containerAspect = cw / ch;
      if (aspect > containerAspect) {
        bw = cw * 0.8;
        bh = bw / aspect;
      } else {
        bh = ch * 0.8;
        bw = bh * aspect;
      }
    }

    const newBox: BoxState = {
      x: (cw - bw) / 2,
      y: (ch - bh) / 2,
      w: bw,
      h: bh
    };
    setBox(newBox);
    emitCrop(newBox, cw, ch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cropRatio]);

  const emitCrop = useCallback((b: BoxState, cw: number, ch: number) => {
    const scaleX = videoWidth / cw;
    const scaleY = videoHeight / ch;
    onCropChange({
      x: Math.round(b.x * scaleX),
      y: Math.round(b.y * scaleY),
      w: Math.round(b.w * scaleX),
      h: Math.round(b.h * scaleY)
    });
  }, [videoWidth, videoHeight, onCropChange]);

  const onMouseDown = useCallback((e: React.MouseEvent, handle: Handle) => {
    e.preventDefault();
    e.stopPropagation();
    if (!box) return;
    dragRef.current = { handle, startX: e.clientX, startY: e.clientY, startBox: { ...box } };

    const onMove = (ev: MouseEvent) => {
      if (!dragRef.current || !containerRef.current) return;
      const { handle, startX, startY, startBox } = dragRef.current;
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      const { width: cw, height: ch } = containerRef.current.getBoundingClientRect();
      const aspect = ratioToAspect(cropRatio);

      let { x, y, w, h } = startBox;

      if (handle === 'move') {
        x = clamp(startBox.x + dx, 0, cw - w);
        y = clamp(startBox.y + dy, 0, ch - h);
      } else {
        // 调整大小
        if (handle.includes('e')) w = clamp(startBox.w + dx, 20, cw - startBox.x);
        if (handle.includes('s')) h = clamp(startBox.h + dy, 20, ch - startBox.y);
        if (handle.includes('w')) {
          const newX = clamp(startBox.x + dx, 0, startBox.x + startBox.w - 20);
          w = startBox.x + startBox.w - newX;
          x = newX;
        }
        if (handle.includes('n')) {
          const newY = clamp(startBox.y + dy, 0, startBox.y + startBox.h - 20);
          h = startBox.y + startBox.h - newY;
          y = newY;
        }

        // 锁定比例
        if (aspect !== null) {
          if (handle.includes('e') || handle.includes('w')) {
            h = w / aspect;
          } else {
            w = h * aspect;
          }
          // 边界修正
          if (x + w > cw) { w = cw - x; if (aspect) h = w / aspect; }
          if (y + h > ch) { h = ch - y; if (aspect) w = h * aspect; }
        }
      }

      const newBox = { x, y, w: Math.max(20, w), h: Math.max(20, h) };
      setBox(newBox);
      emitCrop(newBox, cw, ch);
    };

    const onUp = () => {
      dragRef.current = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [box, cropRatio, emitCrop]);

  if (cropRatio === 'none' || !box) return <div ref={containerRef} className="crop-overlay" />;

  const handles: Handle[] = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];

  return (
    <div ref={containerRef} className="crop-overlay">
      <div
        className="crop-box"
        style={{ left: box.x, top: box.y, width: box.w, height: box.h }}
        onMouseDown={(e) => onMouseDown(e, 'move')}
      >
        {handles.map((h) => (
          <div
            key={h}
            className={`crop-handle ${h}`}
            onMouseDown={(e) => onMouseDown(e, h)}
          />
        ))}
      </div>
    </div>
  );
}
