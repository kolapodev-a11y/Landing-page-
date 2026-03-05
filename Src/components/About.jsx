import './About.css'

const pillars = [
  { icon: '🔭', title: 'Forward-Thinking', desc: 'We anticipate market shifts and position our clients ahead of the curve.' },
  { icon: '🤝', title: 'Partnership Mindset', desc: 'Your success is our success. We embed ourselves as true strategic partners.' },
  { icon: '📐', title: 'Precision Execution', desc: 'Strategies are only as good as their execution — we deliver both.' },
  { icon: '🔁', title: 'Continuous Improvement', desc: 'We iterate, measure, and refine relentlessly until results exceed expectations.' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">

        {/* Left */}
        <div className="about__text">
          <div className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"/>
            </svg>
            About KPZ
          </div>
          <h2 className="section-title">
            Built on results.<br/>
            <span className="gradient-text">Driven by purpose.</span>
          </h2>
          <p className="section-sub" style={{marginBottom:'1.5rem'}}>
            KPZ is a boutique strategy and innovation firm founded by practitioners — not consultants.
            We've built, scaled, and restructured businesses across diverse industries, giving us
            a unique operating lens that pure advisory firms simply don't have.
          </p>
          <p className="section-sub">
            Our multidisciplinary team combines deep domain expertise with modern tools to craft
            bespoke solutions that create lasting competitive advantages.
          </p>

          <div className="about__actions" style={{marginTop:'2.5rem'}}>
            <button
              className="btn btn-primary"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})}
            >
              Work With Us
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="about__pillars">
          {pillars.map(({ icon, title, desc }) => (
            <div className="about__pillar" key={title}>
              <span className="about__pillar-icon">{icon}</span>
              <div>
                <h4 className="about__pillar-title">{title}</h4>
                <p className="about__pillar-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
