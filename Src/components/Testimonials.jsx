import './Testimonials.css'

const testimonials = [
  {
    name:    'Sarah Mitchell',
    role:    'CEO, Nexova Technologies',
    avatar:  'SM',
    color:   '#6366f1',
    quote:   'KPZ transformed our go-to-market strategy. Within 8 months we doubled our enterprise pipeline and the strategic clarity they brought was unmatched.',
    stars:   5,
  },
  {
    name:    'James Okonkwo',
    role:    'COO, Brightline Group',
    avatar:  'JO',
    color:   '#f59e0b',
    quote:   "The operational restructuring they led saved us $1.2M annually. Their team doesn't just advise — they roll up their sleeves and make it happen.",
    stars:   5,
  },
  {
    name:    'Priya Sharma',
    role:    'VP Growth, CloudVault Inc.',
    avatar:  'PS',
    color:   '#10b981',
    quote:   'KPZ built our entire data analytics infrastructure from scratch. Now our team makes faster, more confident decisions every single day.',
    stars:   5,
  },
]

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <div className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            Client Stories
          </div>
          <h2 className="section-title">
            What our clients<br/>
            <span className="gradient-text">say about us</span>
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map(({ name, role, avatar, color, quote, stars }) => (
            <div className="testimonials__card card" key={name}>
              <Stars count={stars} />
              <p className="testimonials__quote">"{quote}"</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar"
                     style={{ background: `${color}22`, color }}>
                  {avatar}
                </div>
                <div>
                  <p className="testimonials__name">{name}</p>
                  <p className="testimonials__role">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
