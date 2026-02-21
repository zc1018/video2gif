import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="footer-copy">© {new Date().getFullYear()} Video2GIF · 免费在线视频转 GIF 工具</p>
        <nav className="footer-nav">
          <Link to="/about" className="footer-link">关于</Link>
          <Link to="/privacy" className="footer-link">隐私政策</Link>
          <Link to="/terms" className="footer-link">使用条款</Link>
        </nav>
      </div>
    </footer>
  );
}
