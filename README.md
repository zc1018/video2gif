# Video2GIF

免费在线视频转 GIF 工具，支持多种视频格式，可调节清晰度、帧率、裁剪画面和时间范围，一键导出高质量 GIF 动图。

🌐 **在线体验：** [https://100zhang.top/video2gif/](https://100zhang.top/video2gif/)

## 功能特点

- 🎬 支持 MP4、AVI、MOV、MKV、WebM、FLV 等主流视频格式
- ✂️ 可视化画面裁剪，预设 1:1、4:3、3:4、16:9、9:16 等比例
- ⏱️ 时间轴双滑块，精确截取视频片段
- 🎯 清晰度选择：480p / 576p / 720p / 1080p
- 🎞️ 帧率调节：5 / 10 / 15 / 20 / 24 / 30 FPS
- 📊 实时预估 GIF 文件大小
- ⚡ 基于 FFmpeg palettegen + paletteuse 两步法，生成高质量 GIF

## 技术栈

- **前端：** React + TypeScript + Vite
- **后端：** Node.js + Express + TypeScript
- **视频处理：** FFmpeg
- **部署：** AWS EC2 + nginx + PM2

## 本地开发

**前置要求：** Node.js 18+、FFmpeg

```bash
# 安装依赖
npm run install:all

# 启动开发服务器（前后端同时启动）
npm run dev
```

- 前端：http://localhost:3000
- 后端：http://localhost:3001

## 项目结构

```
video2gif/
├── client/          # React 前端
│   ├── src/
│   │   ├── components/  # UI 组件
│   │   ├── pages/       # 页面
│   │   ├── api/         # API 调用
│   │   └── types/       # TypeScript 类型
│   └── public/          # 静态资源（robots.txt、sitemap.xml）
├── server/          # Express 后端
│   └── src/
│       ├── routes/      # API 路由
│       ├── services/    # FFmpeg 封装、大小估算
│       └── middleware/  # 文件上传
└── deploy/          # 部署脚本
```

## License

MIT
