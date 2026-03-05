import './Services.css'

const services = [
  {
    icon: '🎯',
    title: 'Strategic Planning',
    desc:  'Craft data-driven roadmaps that align your vision with actionable milestones, market dynamics, and long-term competitive advantage.',
    tags:  ['Roadmaps', 'OKRs', 'Market Analysis'],
  },
  {
    icon: '💼',
    title: 'Business Consulting',
    desc:  'Expert guidance to optimize operations, restructure teams, and drive sustainable profitability through proven frameworks.',
    tags:  ['Operations', 'Restructuring', 'P&L'],
  },
  {
    icon: '⚡',
    title: 'Technology Solutions',
    desc:  'Cutting-edge tech implementation — from cloud migration to custom software — that streamlines processes and accelerates productivity.',
    tags:  ['Cloud', 'Automation', 'Dev'],
  },
  {
    icon: '📣',
    title: 'Digital Marketing',
    desc:  'Full-funnel digital strategies that expand brand reach, convert audiences into loyal customers, and maximize ROI across channels.',
    tags:  ['SEO', 'Paid Ads', 'Content'],
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    desc:  'Transform raw data into competitive intelligence. Dashboards, reporting pipelines, and predictive models tailored to your decisions.',
    tags:  ['BI', 'Dashboards', 'ML'],
  },
  {
    icon: '🛡️',
    title: 'Risk Management',
    desc:  'Identify, assess, and mitigate enterprise risks before they impact your bottom line. Proactive frameworks for resilient operations.',
    tags:  ['Compliance', 'Audit', 'Security'],
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <div className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Our Services
          </div>
          <h2 className="section-title">
            Everything you need to<br/>
            <span className="gradient-text">scale with confidence</span>
          </h2>
          <p className="section-sub">
            From strategy to execution, we offer a comprehensive suite of services
            designed to fuel measurable growth at every stage.
          </p>
        </div>

        <div className="services__grid">
          {services.map(({ icon, title, desc, tags }) => (
            <article className="services__card card" key={title}>
              <div className="services__card-icon">{icon}</div>
              <h3 className="services__card-title">{title}</h3>
              <p className="services__card-desc">{desc}</p>
              <div className="services__card-tags">
                {tags.map(t => (
                  <span key={t} className="services__tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
