import './HowItWorks.css'

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We start with a focused 45-minute session to deeply understand your goals, challenges, and current landscape.',
  },
  {
    num: '02',
    title: 'Custom Strategy',
    desc: 'Our team conducts a thorough analysis and crafts a tailored strategic plan with clear timelines and KPIs.',
  },
  {
    num: '03',
    title: 'Execution & Support',
    desc: 'We work alongside your team during implementation, removing blockers and adapting the plan in real time.',
  },
  {
    num: '04',
    title: 'Measure & Optimize',
    desc: 'Regular reviews, data-driven insights, and continuous optimization ensure lasting, compounding results.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <div className="how__header">
          <div className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18V5l12-2v13"/>
              <circle cx="6" cy="18" r="3"/>
              <circle cx="18" cy="16" r="3"/>
            </svg>
            The Process
          </div>
          <h2 className="section-title">
            How we work with you
          </h2>
          <p className="section-sub">
            A transparent, collaborative process designed to deliver maximum impact with minimum friction.
          </p>
        </div>

        <div className="how__steps">
          {steps.map(({ num, title, desc }, i) => (
            <div className="how__step" key={num}>
              <div className="how__step-num">{num}</div>
              <div className="how__step-body">
                <h3 className="how__step-title">{title}</h3>
                <p className="how__step-desc">{desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="how__connector" aria-hidden="true">
                  <svg viewBox="0 0 40 16" fill="none">
                    <path d="M0 8h32M28 3l7 5-7 5" stroke="currentColor" strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
