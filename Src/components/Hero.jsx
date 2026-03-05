import './Hero.css'

export default function Hero() {
  const scroll = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="hero">
      {/* Background blobs */}
      <div className="hero__blob hero__blob--1" aria-hidden="true"/>
      <div className="hero__blob hero__blob--2" aria-hidden="true"/>
      <div className="hero__blob hero__blob--3" aria-hidden="true"/>
      <div className="hero__grid" aria-hidden="true"/>

      <div className="container hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot"/>
          Available for new partnerships
        </div>

        {/* Heading */}
        <h1 className="hero__title">
          Empowering Business
          <br />
          <span className="gradient-text">Strategy & Growth</span>
        </h1>

        {/* Sub */}
        <p className="hero__sub">
          We partner with ambitious companies to unlock their full potential —
          through sharp strategy, modern technology, and relentless execution.
        </p>

        {/* Actions */}
        <div className="hero__actions">
          <button className="btn btn-primary" onClick={() => scroll('#contact')}>
            Start Your Journey
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="btn btn-outline" onClick={() => scroll('#services')}>
            Explore Services
          </button>
        </div>

        {/* Trust bar */}
        <div className="hero__trust">
          <span className="hero__trust-label">Trusted by teams at</span>
          <div className="hero__trust-logos">
            {['Acme Corp','Nexova','Brightline','Stratix','CloudVault'].map(name => (
              <span key={name} className="hero__trust-item">{name}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="hero__scroll" onClick={() => scroll('#services')} aria-label="Scroll down">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </button>
    </section>
  )
}
