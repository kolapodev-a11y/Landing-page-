import './Footer.css'

const year = new Date().getFullYear()

const links = {
  Company:  ['About Us', 'Blog', 'Careers', 'Press'],
  Services: ['Web Dev', 'UI/UX Design', 'Mobile Apps', 'E-Commerce'],
  Resources:['Documentation', 'Case Studies', 'FAQ', 'Support'],
}

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
              <div className="logo-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="url(#fg)"/>
                  <path d="M8 22L16 10L24 22H8Z" fill="white"/>
                  <defs>
                    <linearGradient id="fg" x1="0" y1="0" x2="32" y2="32">
                      <stop stopColor="#6C63FF"/>
                      <stop offset="1" stopColor="#00D4AA"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span>Nexa<strong>Tech</strong></span>
            </a>
            <p className="footer-tagline">
              Building digital experiences that drive growth. Modern, fast, and beautifully designed.
            </p>
            <div className="footer-newsletter">
              <input type="email" placeholder="Your email address" />
              <button className="btn-primary" style={{padding:'10px 20px', fontSize:'14px'}}>Subscribe</button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat} className="footer-col">
              <h4 className="footer-heading">{cat}</h4>
              <ul>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="footer-link">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} NexaTech. All rights reserved. Built with ⚛️ React + Vite</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
