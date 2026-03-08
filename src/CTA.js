import React, { useRef, useEffect, useState } from 'react';
import './CTA.css';

const CTA = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="cta-section" ref={sectionRef}>
      <div className="container">
        <div className={`cta-box ${isVisible ? 'cta-box--visible' : ''}`}>
          {/* Background Effects */}
          <div className="cta-box__bg" />
          <div className="cta-box__orb cta-box__orb--1" />
          <div className="cta-box__orb cta-box__orb--2" />

          <div className="cta-box__content">
            <div className="section-badge" style={{ margin: '0 auto 20px' }}>
              <span>🚀</span> Get Started Today
            </div>
            <h2 className="cta-box__title">
              Ready to <span className="gradient-text">automate</span> everything?
            </h2>
            <p className="cta-box__subtitle">
              Join 12,000+ teams already saving hundreds of hours each month.
              Start free, no credit card required.
            </p>

            {/* Email Input */}
            <div className="cta-box__form">
              <input
                type="email"
                placeholder="Enter your work email..."
                className="cta-box__input"
              />
              <button className="cta-box__submit">
                Get Started Free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            <p className="cta-box__note">
              Free forever plan available. Setup takes under 5 minutes.
            </p>

            {/* Trust Badges */}
            <div className="cta-box__badges">
              <div className="trust-badge">🔒 SOC 2 Certified</div>
              <div className="trust-badge">⚡ 99.9% Uptime</div>
              <div className="trust-badge">🌍 GDPR Compliant</div>
              <div className="trust-badge">💳 No Credit Card</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
