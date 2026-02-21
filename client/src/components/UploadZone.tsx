import React, { useRef, useState } from 'react';
import { uploadVideo } from '../api/video';

interface Props {
  onUploaded: (id: string, file: File) => void;
}

const ACCEPT = '.mp4,.avi,.mov,.mkv,.webm,.flv,.mpeg,.mpg,.wmv,.3gp';

export default function UploadZone({ onUploaded }: Props) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
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
      <h2>{uploading ? `上传中 ${progress}%` : '拖拽视频到这里，或点击选择'}</h2>
      <p>支持 MP4、AVI、MOV、MKV、WebM、FLV 等格式，最大 500MB</p>
      {uploading && (
        <div className="upload-progress">
          <div className="upload-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      )}
      {error && <p style={{ color: 'var(--danger)', marginTop: 12 }}>{error}</p>}
    </div>
  );
}
