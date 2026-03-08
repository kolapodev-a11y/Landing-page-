import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Home',      href: '#home' },
  { label: 'Features',  href: '#features' },
  { label: 'Services',  href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive]     = useState('home')

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleLink = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <a href="#home" className="logo" onClick={() => handleLink('#home')}>
          <div className="logo-icon">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="url(#grad)"/>
              <path d="M8 22L16 10L24 22H8Z" fill="white"/>
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="32" y2="32">
                  <stop offset="0%" stopColor="#6C63FF"/>
                  <stop offset="100%" stopColor="#00D4AA"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span>Nexa<strong>Tech</strong></span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href.replace('#','') ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLink(link.href) }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="btn-primary nav-cta"
          onClick={(e) => { e.preventDefault(); handleLink('#contact') }}
        >
          Get Started
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-link"
            onClick={(e) => { e.preventDefault(); handleLink(link.href) }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-primary mobile-cta"
          onClick={(e) => { e.preventDefault(); handleLink('#contact') }}
        >
          Get Started →
        </a>
      </div>
    </header>
  )
}
