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
      res.status(400).json({ error: '未收到文件' });
      return;
    }
    const id = path.basename(req.file.filename, path.extname(req.file.filename));
    res.json({ id, filename: req.file.originalname });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/metadata/:id
router.get('/metadata/:id', async (req: Request, res: Response) => {
  try {
    const filePath = getUploadPath(req.params.id);
    if (!filePath) {
      res.status(404).json({ error: '文件不存在' });
      return;
    }
    const meta = await getMetadata(filePath);
    res.json(meta);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
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
      res.status(404).json({ error: '文件不存在' });
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
      tasks.set(taskId, { progress: -1, stage: 'error', error: err.message });
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
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
      send({ progress: -1, stage: 'error', error: '任务不存在' });
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
    res.status(404).json({ error: 'GIF 文件不存在' });
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
