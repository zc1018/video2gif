import React, { useState, useEffect, useRef, useCallback } from 'react';
import { VideoMetadata, ConvertSettings, EstimateResult, CropArea, CropRatio, Resolution, FPS } from '../types';
import { getMetadata, estimateSize } from '../api/video';
import UploadZone from '../components/UploadZone';
import VideoPreview from '../components/VideoPreview';
import ControlPanel from '../components/ControlPanel';
import SizeEstimate from '../components/SizeEstimate';
import ExportButton from '../components/ExportButton';

type Step = 'upload' | 'adjust';

const DEFAULT_SETTINGS: ConvertSettings = {
  resolution: 720,
  fps: 15,
  startTime: 0,
  endTime: 0,
  cropRatio: 'none',
  crop: null
};

export default function ToolPage() {
  const [step, setStep] = useState<Step>('upload');
  const [videoId, setVideoId] = useState('');
  const [blobUrl, setBlobUrl] = useState('');
  const [meta, setMeta] = useState<VideoMetadata | null>(null);
  const [settings, setSettings] = useState<ConvertSettings>(DEFAULT_SETTINGS);
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);
  const [estimating, setEstimating] = useState(false);
  const estimateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleUploaded = useCallback(async (id: string, file: File) => {
    setVideoId(id);
    setBlobUrl(URL.createObjectURL(file));
    try {
      const m = await getMetadata(id);
      setMeta(m);
      setSettings((s) => ({ ...s, startTime: 0, endTime: m.duration }));
      setStep('adjust');
    } catch (e: any) {
      alert('获取视频信息失败: ' + e.message);
    }
  }, []);

  const triggerEstimate = useCallback((s: ConvertSettings, m: VideoMetadata) => {
    if (estimateTimer.current) clearTimeout(estimateTimer.current);
    setEstimating(true);
    estimateTimer.current = setTimeout(async () => {
      try {
        const result = await estimateSize(s, m);
        setEstimate(result);
      } catch {}
      setEstimating(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (meta) triggerEstimate(settings, meta);
  }, [settings, meta, triggerEstimate]);

  const updateSettings = useCallback(<K extends keyof ConvertSettings>(key: K, value: ConvertSettings[K]) => {
    setSettings((s) => ({ ...s, [key]: value }));
  }, []);

  return (
    <div className="page-content">
      <div className="steps">
        <div className={`step${step === 'upload' ? ' active' : ' done'}`}>
          <div className="step-num">{step === 'upload' ? '1' : '✓'}</div>
          <span>上传视频</span>
        </div>
        <div className="step-divider" />
        <div className={`step${step === 'adjust' ? ' active' : ''}`}>
          <div className="step-num">2</div>
          <span>调整参数</span>
        </div>
        <div className="step-divider" />
        <div className="step">
          <div className="step-num">3</div>
          <span>导出 GIF</span>
        </div>
      </div>

      {step === 'upload' && <UploadZone onUploaded={handleUploaded} />}

      {step === 'adjust' && meta && (
        <div className="adjust-layout">
          <div>
            <VideoPreview
              blobUrl={blobUrl}
              meta={meta}
              cropRatio={settings.cropRatio}
              startTime={settings.startTime}
              endTime={settings.endTime}
              onCropChange={(crop: CropArea | null) => updateSettings('crop', crop)}
              onTimeChange={(start: number, end: number) => {
                setSettings((s) => ({ ...s, startTime: start, endTime: end }));
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ControlPanel
              resolution={settings.resolution}
              fps={settings.fps}
              cropRatio={settings.cropRatio}
              onResolutionChange={(r: Resolution) => updateSettings('resolution', r)}
              onFpsChange={(f: FPS) => updateSettings('fps', f)}
              onCropRatioChange={(r: CropRatio) => updateSettings('cropRatio', r)}
            />
            <SizeEstimate estimate={estimate} loading={estimating} />
            <ExportButton videoId={videoId} settings={settings} />
            <button
              onClick={() => {
                setStep('upload');
                setMeta(null);
                setBlobUrl('');
                setEstimate(null);
                setSettings(DEFAULT_SETTINGS);
              }}
              style={{ background: 'none', color: 'var(--text-muted)', fontSize: 13, padding: '8px 0', textAlign: 'center' }}
            >
              ← 重新上传
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
