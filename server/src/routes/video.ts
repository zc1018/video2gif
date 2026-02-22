import { Router, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { upload } from '../middleware/upload';
import { getMetadata, generateGif, getUploadPath, getOutputPath } from '../services/ffmpeg';
import { estimateGifSize, calcOutputDimensions, formatSize } from '../services/estimator';

const router = Router();

// 存储转换任务进度
const tasks = new Map<string, { progress: number; stage: string; outputId?: string; error?: string }>();

// POST /api/upload
router.post('/upload', upload.single('video'), async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: '未收到文件，请重新选择视频上传' });
      return;
    }
    const id = path.basename(req.file.filename, path.extname(req.file.filename));
    res.json({ id, filename: req.file.originalname });
  } catch (err: any) {
    // 文件过大错误处理
    if (err.code === 'LIMIT_FILE_SIZE') {
      res.status(413).json({ error: '文件过大，建议压缩视频或缩短时长后重试' });
      return;
    }
    res.status(500).json({ error: err.message });
  }
});

// GET /api/metadata/:id
router.get('/metadata/:id', async (req: Request, res: Response) => {
  try {
    const filePath = getUploadPath(req.params.id);
    if (!filePath) {
      res.status(404).json({ error: '视频文件已过期或不存在，请重新上传' });
      return;
    }
    const meta = await getMetadata(filePath);
    res.json(meta);
  } catch (err: any) {
    // 元数据读取失败，可能是格式不兼容
    res.status(500).json({ error: '视频处理失败，可能是编码格式不兼容，请尝试其他视频' });
  }
});

// POST /api/estimate
router.post('/estimate', async (req: Request, res: Response) => {
  try {
    const { resolution, fps, startTime, endTime, cropRatio, srcWidth, srcHeight } = req.body;
    const duration = Math.max(0.1, endTime - startTime);
    const { width, height } = calcOutputDimensions(srcWidth, srcHeight, resolution, cropRatio);
    const bytes = estimateGifSize({ width, height, fps, duration });
    res.json({ estimatedSize: bytes, estimatedSizeFormatted: formatSize(bytes), width, height });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/convert
router.post('/convert', async (req: Request, res: Response) => {
  try {
    const { id, resolution, fps, startTime, endTime, crop } = req.body;
    const filePath = getUploadPath(id);
    if (!filePath) {
      res.status(404).json({ error: '视频文件已过期或不存在，请重新上传' });
      return;
    }

    const taskId = uuidv4();
    const outputId = uuidv4();
    tasks.set(taskId, { progress: 0, stage: 'palette' });

    res.json({ taskId, outputId });

    // 异步执行转换
    generateGif(
      { inputPath: filePath, outputId, resolution, fps, startTime, endTime, crop },
      (progress, stage) => {
        tasks.set(taskId, { progress, stage, outputId });
      }
    ).then(() => {
      tasks.set(taskId, { progress: 100, stage: 'done', outputId });
    }).catch((err) => {
      // 转换失败，提供友好的错误信息
      const errorMessage = '视频处理失败，可能是编码格式不兼容，请尝试其他视频';
      tasks.set(taskId, { progress: -1, stage: 'error', error: errorMessage });
    });
  } catch (err: any) {
    res.status(500).json({ error: '服务繁忙，请稍后重试' });
  }
});

// GET /api/progress/:taskId (SSE)
router.get('/progress/:taskId', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const taskId = req.params.taskId;

  const send = (data: object) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  const interval = setInterval(() => {
    const task = tasks.get(taskId);
    if (!task) {
      send({ progress: -1, stage: 'error', error: '任务已过期，请重新上传视频' });
      clearInterval(interval);
      res.end();
      return;
    }

    send(task);

    if (task.stage === 'done' || task.stage === 'error') {
      clearInterval(interval);
      setTimeout(() => {
        res.end();
        tasks.delete(taskId);
      }, 500);
    }
  }, 300);

  req.on('close', () => clearInterval(interval));
});

// GET /api/download/:outputId
router.get('/download/:outputId', (req: Request, res: Response) => {
  const outputPath = getOutputPath(req.params.outputId);
  if (!outputPath) {
    res.status(404).json({ error: 'GIF 文件已过期或不存在，请重新转换' });
    return;
  }
  res.download(outputPath, 'output.gif', (err) => {
    if (!err) {
      // 下载完成后延迟删除
      setTimeout(() => fs.unlink(outputPath, () => {}), 60000);
    }
  });
});

export default router;
