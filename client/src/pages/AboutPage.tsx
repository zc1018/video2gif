import React from 'react';

export default function AboutPage() {
  return (
    <div className="text-page">
      <h1>关于 Video2GIF</h1>
      <p>
        Video2GIF 是一款免费的在线视频转 GIF 工具，帮助用户快速将视频片段转换为高质量的 GIF 动图。
        无论是用于社交媒体分享、表情包制作还是内容创作，Video2GIF 都能满足你的需求。
      </p>

      <h2>核心功能</h2>
      <ul>
        <li>支持 MP4、AVI、MOV、MKV、WebM、FLV 等主流视频格式</li>
        <li>可视化画面裁剪，预设 1:1、4:3、3:4、16:9、9:16 等常见比例</li>
        <li>时间轴精确截取，只转换需要的视频片段</li>
        <li>清晰度选择（480p / 576p / 720p / 1080p）</li>
        <li>帧率调节（5 / 10 / 15 / 20 / 24 / 30 FPS）</li>
        <li>实时预估 GIF 文件大小</li>
        <li>基于 FFmpeg 的高质量 GIF 生成算法</li>
      </ul>

      <h2>技术说明</h2>
      <p>
        Video2GIF 使用 FFmpeg 的 palettegen + paletteuse 两步法生成 GIF，
        相比直接转换，这种方式能为每个 GIF 生成最优调色板，
        配合 Floyd-Steinberg 抖动算法，显著提升色彩还原度和视觉质量。
      </p>

      <h2>隐私保护</h2>
      <p>
        我们重视用户隐私。上传的视频文件仅用于生成 GIF，处理完成后会在服务器上自动清理，
        不会永久存储或用于任何其他目的。详情请查看我们的
        <a href="/privacy" style={{ color: 'var(--accent)', marginLeft: 4 }}>隐私政策</a>。
      </p>
    </div>
  );
}
