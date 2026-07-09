import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <div className="footer-brand">
            <div className="logo-mark">
              <span>D</span>
              <div className="logo-dot"></div>
            </div>
            <span className="footer-brand-text">DAGMAWIT MESFIN</span>
          </div>
          <p className="footer-description">
            Independent web developer building fast, considered, production-ready
            interfaces for teams that care about the details.
          </p>
        </div>
        <div>
          <div className="footer-section-title">Navigate</div>
          <ul className="footer-links">
            <li><Link to="/projects" className="footer-link">Selected Work</Link></li>
            <li><Link to="/skills" className="footer-link">Skills</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-section-title">Elsewhere</div>
          <ul className="footer-links">
            <li><a href="https://github.com/Dagmawit27" target="_blank" rel="noreferrer" className="footer-link">GitHub ↗</a></li>
            <li><a href="https://t.me/Dagi_Eskedar" target="_blank" rel="noreferrer" className="footer-link">Telegram ↗</a></li>
            <li><a href="tel:0912345678" className="footer-link">Phone ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Dagmawit Mesfin — All rights reserved.</span>
        <span>Gondar, Ethiopia · Available worldwide</span>
      </div>
    </footer>
  );
}

export default Footer;
