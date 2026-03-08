import { useEffect, useRef } from 'react'
import './Features.css'

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    desc: 'Optimized performance with 95+ PageSpeed scores. Your site loads in under 2 seconds for better SEO and user experience.',
    color: '#FFD166',
    bg: 'rgba(255,209,102,0.12)',
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    desc: 'Pixel-perfect layouts on every device. From 320px mobile to 4K desktop, your site looks stunning everywhere.',
    color: '#6C63FF',
    bg: 'rgba(108,99,255,0.1)',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    desc: 'SSL certificates, secure headers, and best security practices built-in from day one to protect your business.',
    color: '#00D4AA',
    bg: 'rgba(0,212,170,0.1)',
  },
  {
    icon: '🎨',
    title: 'Modern Design',
    desc: 'Beautiful, conversion-focused UI/UX design that reflects your brand and keeps visitors engaged longer.',
    color: '#FF6B6B',
    bg: 'rgba(255,107,107,0.1)',
  },
  {
    icon: '🚀',
    title: 'Easy Deployment',
    desc: 'One-click deployment to Vercel, Netlify, or any platform. CI/CD pipelines included for zero-downtime updates.',
    color: '#6C63FF',
    bg: 'rgba(108,99,255,0.1)',
  },
  {
    icon: '📊',
    title: 'Analytics Ready',
    desc: 'Integrated analytics and tracking setup. Understand your visitors and make data-driven decisions from day one.',
    color: '#00D4AA',
    bg: 'rgba(0,212,170,0.1)',
  },
]

function useIntersect(ref, threshold = 0.15) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold }
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [ref, threshold])
}

export default function Features() {
  const ref = useRef(null)
  useIntersect(ref)

  return (
    <section id="features" className="section features-section" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">✦ Why Choose Us</div>
          <h2 className="section-title">
            Everything You Need to<br />
            <span>Succeed Online</span>
          </h2>
          <p className="section-subtitle">
            We combine cutting-edge technology with thoughtful design to
            deliver digital solutions that actually work for your business.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card card reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="feature-icon-wrap" style={{ background: f.bg }}>
                <span className="feature-icon">{f.icon}</span>
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
              <div className="feature-arrow" style={{ color: f.color }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
