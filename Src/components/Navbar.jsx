import { useState } from 'react'
import './Navbar.css'

const links = [
  { label: 'Services',    href: '#services'   },
  { label: 'About',       href: '#about'      },
  { label: 'How It Works',href: '#how'        },
  { label: 'Testimonials',href: '#testimonials'},
  { label: 'Contact',     href: '#contact'    },
]

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* Logo */}
        <a href="#" className="navbar__logo" onClick={e => handleNav(e, 'body')}>
          <span className="logo-icon">KPZ</span>
          <span className="logo-text">Strategy</span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {links.map(l => (
            <a key={l.label} href={l.href} className="navbar__link"
               onClick={e => handleNav(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="btn btn-primary navbar__cta"
           onClick={e => handleNav(e, '#contact')}>
          Get Started
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

        {/* Hamburger */}
        <button className={`navbar__burger${open ? ' open' : ''}`}
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu">
          <span/><span/><span/>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer${open ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} className="navbar__drawer-link"
             onClick={e => handleNav(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary"
           onClick={e => handleNav(e, '#contact')}>
          Get Started
        </a>
      </div>
    </header>
  )
}
