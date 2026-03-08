import { useState, useRef, useEffect } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechVenture',
    avatar: 'SJ',
    color: '#6C63FF',
    rating: 5,
    text: 'NexaTech transformed our online presence completely. The new website has increased our lead generation by 300%. Their attention to detail and technical expertise is unmatched.',
  },
  {
    name: 'Marcus Williams',
    role: 'Founder at GrowthLab',
    avatar: 'MW',
    color: '#00D4AA',
    rating: 5,
    text: 'Working with NexaTech was a game-changer. They delivered our e-commerce platform ahead of schedule, and the results speak for themselves — our conversion rate doubled in the first month.',
  },
  {
    name: 'Emily Chen',
    role: 'Product Manager at StartScale',
    avatar: 'EC',
    color: '#FF6B6B',
    rating: 5,
    text: 'The mobile app they built for us is absolutely beautiful and performs flawlessly. Our users love it and the 5-star reviews keep coming in. Truly exceptional work!',
  },
  {
    name: 'David Okafor',
    role: 'Marketing Director at BrandBoost',
    avatar: 'DO',
    color: '#FFD166',
    rating: 5,
    text: 'I\'ve worked with many dev agencies, but NexaTech stands out for their professionalism and quality. They understood our vision perfectly and executed it brilliantly.',
  },
  {
    name: 'Priya Patel',
    role: 'CTO at DataFlow',
    avatar: 'PP',
    color: '#6C63FF',
    rating: 5,
    text: 'The web application NexaTech built handles thousands of users seamlessly. Their code quality is excellent, and they were with us every step of the way post-launch.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const autoRef = useRef(null)
  const ref = useRef(null)

  const goTo = (idx) => {
    if (animating || idx === active) return
    setAnimating(true)
    setTimeout(() => {
      setActive(idx)
      setAnimating(false)
    }, 250)
  }

  const next = () => goTo((active + 1) % testimonials.length)
  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    autoRef.current = setInterval(next, 5000)
    return () => clearInterval(autoRef.current)
  }, [active])

  const t = testimonials[active]

  return (
    <section id="testimonials" className="section testimonials-section" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">✦ Testimonials</div>
          <h2 className="section-title">
            What Our <span>Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from the businesses
            we've helped grow and succeed.
          </p>
        </div>

        <div className="testimonials-layout">
          {/* Side list */}
          <div className="testimonials-sidebar">
            {testimonials.map((item, i) => (
              <button
                key={i}
                className={`sidebar-item ${i === active ? 'active' : ''}`}
                onClick={() => goTo(i)}
              >
                <div className="sidebar-avatar" style={{ background: item.color }}>
                  {item.avatar}
                </div>
                <div className="sidebar-info">
                  <div className="sidebar-name">{item.name}</div>
                  <div className="sidebar-role">{item.role}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Main testimonial */}
          <div className={`testimonial-main card ${animating ? 'fading' : ''}`}>
            <div className="quote-mark">"</div>
            <div className="stars">
              {'★'.repeat(t.rating)}
            </div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: t.color }}>
                {t.avatar}
              </div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="testimonial-nav">
              <button className="nav-arrow" onClick={prev} aria-label="Previous">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <div className="nav-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === active ? 'active' : ''}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to ${i + 1}`}
                  />
                ))}
              </div>
              <button className="nav-arrow" onClick={next} aria-label="Next">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
