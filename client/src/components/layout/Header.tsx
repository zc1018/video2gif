import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-logo">
          <span className="logo-icon">🎞</span>
          <span className="logo-text">Video2GIF</span>
        </Link>
        <nav className="site-nav">
          <Link to="/" className={pathname === '/' ? 'nav-link active' : 'nav-link'}>工具</Link>
          <Link to="/about" className={pathname === '/about' ? 'nav-link active' : 'nav-link'}>关于</Link>
        </nav>
      </div>
    </header>
  );
}
