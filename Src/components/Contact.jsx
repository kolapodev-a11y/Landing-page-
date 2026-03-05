import { useState } from 'react'
import './Contact.css'

const services = [
  'Strategic Planning',
  'Business Consulting',
  'Technology Solutions',
  'Digital Marketing',
  'Data & Analytics',
  'Risk Management',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const update = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setSending(true)
    // Simulated submit — replace with your real API endpoint
    await new Promise(r => setTimeout(r, 1200))
    setSending(false)
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      {/* CTA Banner */}
      <div className="container">
        <div className="contact__banner">
          <div className="contact__banner-blob" aria-hidden="true"/>
          <div className="contact__banner-text">
            <h2 className="contact__banner-title">
              Ready to accelerate<br/>
              <span className="gradient-text">your growth?</span>
            </h2>
            <p className="contact__banner-sub">
              Let's start with a no-obligation discovery call. Most clients see a clear
              strategic path within the first session.
            </p>
          </div>

          {/* Form */}
          {sent ? (
            <div className="contact__success">
              <span className="contact__success-icon">✅</span>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
              <button className="btn btn-outline" onClick={() => setSent(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={submit}>
              <div className="contact__row">
                <div className="contact__field">
                  <label>Your Name</label>
                  <input
                    type="text" name="name" required
                    placeholder="John Smith"
                    value={form.name} onChange={update}
                  />
                </div>
                <div className="contact__field">
                  <label>Email Address</label>
                  <input
                    type="email" name="email" required
                    placeholder="john@company.com"
                    value={form.email} onChange={update}
                  />
                </div>
              </div>
              <div className="contact__field">
                <label>Service Interested In</label>
                <select name="service" value={form.service} onChange={update} required>
                  <option value="" disabled>Select a service…</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="contact__field">
                <label>How can we help?</label>
                <textarea
                  name="message" rows="4" required
                  placeholder="Tell us about your goals and current challenges…"
                  value={form.message} onChange={update}
                />
              </div>
              <button type="submit" className="btn btn-primary contact__submit" disabled={sending}>
                {sending ? (
                  <>
                    <span className="contact__spinner"/>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
