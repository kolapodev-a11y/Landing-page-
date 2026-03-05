import './Footer.css'

const year = new Date().getFullYear()

const links = {
  Services: ['Strategic Planning','Business Consulting','Technology Solutions','Digital Marketing','Data & Analytics','Risk Management'],
  Company:  ['About Us','How It Works','Case Studies','Careers','Blog'],
  Legal:    ['Privacy Policy','Terms of Service','Cookie Policy'],
}

export default function Footer() {
  const scroll = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="logo-icon">KPZ</span>
              <span className="logo-text">Strategy</span>
            </div>
            <p className="footer__tagline">
              Empowering ambitious businesses through strategic clarity,
              operational excellence, and modern technology.
            </p>
            <div className="footer__socials">
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" aria-label="Twitter" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:hello@kpz.co" aria-label="Email" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div className="footer__col" key={heading}>
              <h4 className="footer__col-heading">{heading}</h4>
              <ul>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="footer__col-link"
                       onClick={e => { e.preventDefault(); scroll('#services') }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>© {year} KPZ Strategy. All rights reserved.</p>
          <button className="footer__back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
