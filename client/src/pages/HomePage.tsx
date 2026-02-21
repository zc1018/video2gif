import React from 'react';
import { Link } from 'react-router-dom';

const FEATURES = [
  { icon: '🎬', title: '多格式支持', desc: '支持 MP4、AVI、MOV、MKV、WebM、FLV 等主流视频格式' },
  { icon: '✂️', title: '画面裁剪', desc: '预设 1:1、4:3、3:4、16:9、9:16 等常见比例，也支持自由裁剪' },
  { icon: '⏱️', title: '时间截取', desc: '拖动时间轴精确选择视频片段，只转换你需要的部分' },
  { icon: '🎯', title: '清晰度控制', desc: '支持 480p 到 1080p 多档清晰度，满足不同使用场景' },
  { icon: '🎞️', title: '帧率调节', desc: '5 到 30 FPS 自由选择，平衡画质与文件大小' },
  { icon: '📊', title: '大小预估', desc: '实时预估 GIF 文件大小，帮你在导出前调整到合适参数' },
];

const STEPS = [
  { num: '01', title: '上传视频', desc: '拖拽或点击选择视频文件，支持最大 500MB' },
  { num: '02', title: '调整参数', desc: '设置清晰度、帧率、裁剪比例和时间范围' },
  { num: '03', title: '一键导出', desc: '点击生成按钮，等待处理完成后下载 GIF' },
];

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">视频转 GIF，简单高效</h1>
        <p className="hero-desc">
          免费在线工具，支持多种视频格式，可裁剪画面、截取片段、调节清晰度和帧率，
          <br />实时预估文件大小，一键导出高质量 GIF 动图。
        </p>
        <Link to="/tool" className="hero-cta">立即开始转换</Link>
      </section>

      {/* How it works */}
      <section className="section">
        <h2 className="section-title">三步完成转换</h2>
        <div className="steps-grid">
          {STEPS.map((s) => (
            <div key={s.num} className="step-card">
              <div className="step-card-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <h2 className="section-title">功能特点</h2>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <h2 className="section-title">常见问题</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>支持哪些视频格式？</h3>
            <p>支持 MP4、AVI、MOV、MKV、WebM、FLV、MPEG、WMV 等主流视频格式。</p>
          </div>
          <div className="faq-item">
            <h3>生成的 GIF 质量如何？</h3>
            <p>使用 FFmpeg 的 palettegen + paletteuse 两步法生成 GIF，采用 Floyd-Steinberg 抖动算法，色彩还原度高，质量优于普通转换工具。</p>
          </div>
          <div className="faq-item">
            <h3>文件大小有限制吗？</h3>
            <p>上传视频最大支持 500MB。GIF 文件大小取决于视频时长、清晰度和帧率，工具会在导出前实时预估大小供参考。</p>
          </div>
          <div className="faq-item">
            <h3>视频文件会被保存吗？</h3>
            <p>不会。上传的视频和生成的 GIF 仅在服务器临时存储，处理完成后会自动清理，不会永久保存你的文件。</p>
          </div>
        </div>
      </section>

      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <Link to="/tool" className="hero-cta">开始转换视频</Link>
      </div>
    </div>
  );
}
