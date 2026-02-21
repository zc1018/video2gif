import React, { useState } from 'react';
import { startConvert, watchProgress, getDownloadUrl } from '../api/video';
import { ConvertSettings } from '../types';

interface Props {
  videoId: string;
  settings: ConvertSettings;
}

type State = 'idle' | 'converting' | 'done' | 'error';

const STAGE_LABELS: Record<string, string> = {
  palette: '生成调色板...',
  gif: '生成 GIF...',
  done: '完成'
};

export default function ExportButton({ videoId, settings }: Props) {
  const [state, setState] = useState<State>('idle');
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('');
  const [outputId, setOutputId] = useState('');
  const [error, setError] = useState('');

  const handleExport = async () => {
    setState('converting');
    setProgress(0);
    setError('');

    try {
      const { taskId, outputId: oid } = await startConvert(videoId, settings);
      setOutputId(oid);

      watchProgress(
        taskId,
        (p, s) => { setProgress(p); setStage(s); },
        () => { setState('done'); setProgress(100); },
        (msg) => { setState('error'); setError(msg); }
      );
    } catch (e: any) {
      setState('error');
      setError(e.message);
    }
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = getDownloadUrl(outputId);
    a.download = 'output.gif';
    a.click();
  };

  return (
    <div>
      <button
        className="export-btn"
        onClick={state === 'idle' || state === 'error' ? handleExport : undefined}
        disabled={state === 'converting'}
      >
        {state === 'converting' ? `转换中 ${progress}%` : '一键生成 GIF'}
      </button>

      {state === 'converting' && (
        <div className="export-progress">
          <div className="export-progress-bar-wrap">
            <div className="export-progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <div className="export-progress-label">{STAGE_LABELS[stage] || '处理中...'}</div>
        </div>
      )}

      {state === 'done' && (
        <div className="export-done">
          ✅ GIF 生成成功！
          <br />
          <button
            onClick={handleDownload}
            style={{ marginTop: 8, background: 'none', color: 'var(--success)', fontWeight: 600, fontSize: 14, textDecoration: 'underline' }}
          >
            点击下载
          </button>
          <button
            onClick={() => setState('idle')}
            style={{ marginLeft: 12, background: 'none', color: 'var(--text-muted)', fontSize: 13 }}
          >
            重新生成
          </button>
        </div>
      )}

      {state === 'error' && (
        <div className="export-error">❌ {error}</div>
      )}
    </div>
  );
}
