import React, { useRef, useState } from 'react';
import { uploadVideo } from '../api/video';

interface Props {
  onUploaded: (id: string, file: File) => void;
}

const ACCEPT = '.mp4,.avi,.mov,.mkv,.webm,.flv,.mpeg,.mpg,.wmv,.3gp';
const MAX_SIZE = 500 * 1024 * 1024; // 500MB

export default function UploadZone({ onUploaded }: Props) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    // 文件大小检查
    if (file.size > MAX_SIZE) {
      setError('文件过大，建议压缩视频或缩短时长后重试');
      return;
    }

    setError('');
    setUploading(true);
    setProgress(0);
    try {
      const result = await uploadVideo(file, setProgress);
      onUploaded(result.id, file);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setUploading(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <div
      className={`upload-zone${dragging ? ' drag-over' : ''}`}
      onClick={() => !uploading && inputRef.current?.click()}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={onDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPT}
        style={{ display: 'none' }}
        onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
      />
      <div className="icon">🎬</div>
      <h2>{uploading ? `上传中 ${progress}%` : '免费视频转 GIF，实时预览文件大小'}</h2>
      <p>精准控制每一帧 | 实时预估文件大小 | 支持 MP4/MOV/AVI 等格式</p>
      {uploading && (
        <div className="upload-progress">
          <div className="upload-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      )}
      {error && (
        <div className="upload-error">
          <span className="upload-error-icon">⚠️</span>
          <span className="upload-error-text">{error}</span>
        </div>
      )}
    </div>
  );
}
