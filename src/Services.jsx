import { useRef } from 'react'
import './Services.css'

const services = [
  {
    number: '01',
    title: 'Web Development',
    desc: 'Full-stack web development with React, Next.js, Node.js and modern tech stacks. From simple landing pages to complex web applications.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    icon: '🌐',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    desc: 'User-centered design that balances aesthetics with functionality. Wireframes, prototypes, and design systems that convert visitors into customers.',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'Branding'],
    icon: '🎨',
  },
  {
    number: '03',
    title: 'Mobile Development',
    desc: 'Cross-platform mobile apps with React Native and Flutter. Native performance with a single codebase for iOS and Android.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    icon: '📱',
  },
  {
    number: '04',
    title: 'E-Commerce Solutions',
    desc: 'High-converting online stores with seamless payment integration, inventory management, and optimized checkout flows.',
    tags: ['Shopify', 'WooCommerce', 'Stripe', 'Payment APIs'],
    icon: '🛒',
  },
]

export default function Services() {
  const ref = useRef(null)

  return (
    <section id="services" className="section services-section" ref={ref}>
      {/* Background */}
      <div className="services-bg" />

      <div className="container">
        <div className="services-top">
          <div>
            <div className="section-tag">✦ What We Do</div>
            <h2 className="section-title">
              Our Core <span>Services</span>
            </h2>
          </div>
          <p className="section-subtitle">
            From concept to launch, we deliver end-to-end digital solutions
            tailored to your unique business needs and goals.
          </p>
        </div>

        <div className="services-list">
          {services.map((s, i) => (
            <div key={i} className="service-item reveal">
              <div className="service-number">{s.number}</div>
              <div className="service-icon-col">
                <div className="service-icon-wrap">{s.icon}</div>
                {i < services.length - 1 && <div className="service-line" />}
              </div>
              <div className="service-body">
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map(t => (
                    <span key={t} className="service-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="service-cta">
                <a
                  href="#contact"
                  className="btn-outline service-btn"
                  onClick={e => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
