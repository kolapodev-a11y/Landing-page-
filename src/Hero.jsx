import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFeatures = (e) => {
    e.preventDefault()
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      {/* Grid overlay */}
      <div className="hero-grid" />

      <div className="container hero-content" ref={heroRef}>
        <div className="hero-left">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>Available for new projects</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Build <span className="gradient-text">Digital</span> Experiences
            <br />That <span className="gradient-text">Convert</span>
          </h1>

          {/* Sub */}
          <p className="hero-subtitle">
            We design and develop lightning-fast websites, web apps, and digital products
            that help businesses grow, engage users, and drive results.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <a href="#contact" className="btn-primary hero-btn-main" onClick={scrollToContact}>
              Start Your Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#features" className="btn-outline" onClick={scrollToFeatures}>
              See Our Work
            </a>
          </div>

          {/* Social proof */}
          <div className="hero-proof">
            <div className="proof-avatars">
              {['#6C63FF','#00D4AA','#FF6B6B','#FFD166'].map((color, i) => (
                <div key={i} className="proof-avatar" style={{ background: color, zIndex: 4 - i }} />
              ))}
            </div>
            <div className="proof-text">
              <strong>50+ clients</strong> trust us worldwide
            </div>
            <div className="proof-rating">
              {'★★★★★'}
              <span>5.0</span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-right">
          <div className="hero-visual">
            {/* Main card */}
            <div className="visual-card main-card">
              <div className="card-header">
                <div className="card-dots">
                  <span style={{background:'#ff5f57'}} />
                  <span style={{background:'#febc2e'}} />
                  <span style={{background:'#28c840'}} />
                </div>
                <span className="card-url">nexatech.app</span>
              </div>
              <div className="card-content">
                <div className="content-bar wide" />
                <div className="content-bar medium" />
                <div className="content-block" />
                <div className="content-bar short" />
                <div className="content-btn">Get Started →</div>
              </div>
            </div>

            {/* Floating badge 1 */}
            <div className="float-badge badge-users">
              <div className="badge-icon">👥</div>
              <div>
                <div className="badge-num">10K+</div>
                <div className="badge-label">Users</div>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div className="float-badge badge-perf">
              <div className="badge-icon">⚡</div>
              <div>
                <div className="badge-num">99%</div>
                <div className="badge-label">Uptime</div>
              </div>
            </div>

            {/* Tech icons ring */}
            <div className="tech-ring">
              {['⚛️','🟨','🎨','🔷','🟢','🦀'].map((icon, i) => (
                <div key={i} className="tech-dot" style={{ '--i': i }}>
                  {icon}
                </div>
              ))}
              <div className="tech-ring-center">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="url(#g2)"/>
                  <path d="M8 22L16 10L24 22H8Z" fill="white"/>
                  <defs>
                    <linearGradient id="g2" x1="0" y1="0" x2="32" y2="32">
                      <stop stopColor="#6C63FF"/>
                      <stop offset="1" stopColor="#00D4AA"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
