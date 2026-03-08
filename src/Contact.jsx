import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    setStatus('sending')
    // Simulate form submission (replace with real endpoint / EmailJS / Formspree)
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', service: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
    }, 1500)
  }

  const services = [
    'Web Development',
    'UI/UX Design',
    'Mobile Development',
    'E-Commerce Solution',
    'Other',
  ]

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-bg" />

      <div className="container">
        <div className="contact-layout">
          {/* Left info */}
          <div className="contact-info">
            <div className="section-tag">✦ Get In Touch</div>
            <h2 className="section-title">
              Let's Build Something <span>Amazing</span>
            </h2>
            <p className="section-subtitle">
              Have a project in mind? We'd love to hear about it.
              Drop us a message and we'll get back to you within 24 hours.
            </p>

            <div className="contact-cards">
              {[
                { icon: '📧', label: 'Email Us', value: 'hello@nexatech.dev' },
                { icon: '📍', label: 'Location', value: 'Remote Worldwide' },
                { icon: '⏰', label: 'Response Time', value: 'Within 24 hours' },
              ].map((item, i) => (
                <div key={i} className="contact-card">
                  <div className="contact-card-icon">{item.icon}</div>
                  <div>
                    <div className="contact-card-label">{item.label}</div>
                    <div className="contact-card-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="contact-social">
              {[
                { label: 'GitHub',   href: '#', icon: '🐙' },
                { label: 'LinkedIn', href: '#', icon: '💼' },
                { label: 'Twitter',  href: '#', icon: '🐦' },
              ].map(s => (
                <a key={s.label} href={s.href} className="social-pill">
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="contact-form-wrap card">
            {status === 'success' ? (
              <div className="form-success">
                <div className="success-icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thanks! We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <h3 className="form-title">Send Us a Message</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handle}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handle}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Service Needed</label>
                  <select name="service" value={form.service} onChange={handle} required>
                    <option value="">Select a service…</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label>Project Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    placeholder="Tell us about your project, goals, timeline, and budget…"
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary form-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className="spinner" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 2L11 13M22 2L15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="form-note">
                  🔒 Your information is secure and will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
