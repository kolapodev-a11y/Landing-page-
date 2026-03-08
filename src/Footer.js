import React from 'react';
import './Footer.css';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Integrations'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
  Resources: ['Documentation', 'API Reference', 'Status', 'Community', 'Support'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Brand Column */}
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#footLogoGrad)" />
                <defs>
                  <linearGradient id="footLogoGrad" x1="3" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7c3aed"/>
                    <stop offset="1" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span>Nexa<span className="gradient-text">Flow</span></span>
          </div>
          <p className="footer__tagline">
            The AI-native workflow platform for teams that move fast.
          </p>

          {/* Social Links */}
          <div className="footer__socials">
            {[
              { icon: '𝕏', label: 'Twitter' },
              { icon: '💼', label: 'LinkedIn' },
              { icon: '🐙', label: 'GitHub' },
              { icon: '💬', label: 'Discord' },
            ].map((social, i) => (
              <a key={i} href="#" className="footer__social" aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="footer__newsletter">
            <p className="footer__newsletter-label">Subscribe to updates</p>
            <div className="footer__newsletter-form">
              <input type="email" placeholder="your@email.com" className="footer__newsletter-input" />
              <button className="footer__newsletter-btn">→</button>
            </div>
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="footer__column">
            <h4 className="footer__column-title">{category}</h4>
            <ul className="footer__links">
              {links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="footer__link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © 2024 NexaFlow, Inc. All rights reserved.
          </p>
          <div className="footer__bottom-badges">
            <span className="footer__badge">🔒 SOC 2</span>
            <span className="footer__badge">✅ GDPR</span>
            <span className="footer__badge">🌍 ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
