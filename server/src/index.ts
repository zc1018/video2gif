import express from 'express';
import cors from 'cors';
import path from 'path';
import { exec } from 'child_process';
import videoRouter from './routes/video';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3010;

// 检查 ffmpeg 是否可用
exec('ffmpeg -version', (err) => {
  if (err) {
    console.error('FFmpeg not found. Please install FFmpeg first.');
    process.exit(1);
  }
});

app.use(cors());
app.use(express.json());

// API 路由
app.use('/api', videoRouter);

// 定时清理过期临时文件（每小时）
setInterval(() => {
  const { cleanupOldFiles } = require('./services/ffmpeg');
  cleanupOldFiles();
}, 60 * 60 * 1000);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
