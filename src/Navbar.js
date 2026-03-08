import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ scrollY }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const isScrolled = scrollY > 50;

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'features', label: 'Features', href: '#features' },
    { id: 'stats', label: 'Stats', href: '#stats' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        {/* Logo */}
        <a href="#home" className="navbar__logo" onClick={() => handleLinkClick('home')}>
          <div className="navbar__logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#logoGrad)" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="logoGrad" x1="3" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed"/>
                  <stop offset="1" stopColor="#06b6d4"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="navbar__logo-text">Nexa<span className="gradient-text">Flow</span></span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`navbar__link ${activeLink === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="navbar__actions">
          <a href="#pricing" className="btn btn--ghost">Log In</a>
          <a href="#pricing" className="btn btn--primary">Get Started</a>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <ul className="navbar__mobile-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-actions">
          <a href="#pricing" className="btn btn--ghost btn--full" onClick={() => setMenuOpen(false)}>Log In</a>
          <a href="#pricing" className="btn btn--primary btn--full" onClick={() => setMenuOpen(false)}>Get Started Free</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
