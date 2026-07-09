import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="header-top">
          <Link to="/" className="logo">
            <div className="logo-mark">
              <span>D</span>
              <div className="logo-dot"></div>
            </div>
            <div className="logo-text">
              <span className="logo-name">DAGMAWIT</span>
              <span className="logo-subtitle">Web Development</span>
            </div>
          </Link>
          <nav className="nav">
            <Link to="/projects" className="nav-link">Work</Link>
            <Link to="/skills" className="nav-link">Skills</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          <Link to="/contact" className="header-cta">
            Let's Talk →
          </Link>
        </div>
        <div className="learning-banner">
          <span className="learning-text">
            Now learning or working on — Machine Learning / Deep Learning / CNN, RNN...
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
