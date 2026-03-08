import React, { useRef, useEffect, useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Alex Rivera',
    role: 'Head of Engineering',
    company: 'TechCorp',
    avatar: 'A',
    color: '#7c3aed',
    stars: 5,
    text: "NexaFlow completely transformed how our engineering team operates. We went from manual deployments that took hours to fully automated pipelines in under a day.",
  },
  {
    name: 'Jordan Kim',
    role: 'Product Manager',
    company: 'LaunchPad',
    avatar: 'J',
    color: '#2563eb',
    stars: 5,
    text: "The AI agents are genuinely magical. They handle our customer onboarding workflows end-to-end. It's like having an extra 5 engineers on the team.",
  },
  {
    name: 'Maya Patel',
    role: 'CTO',
    company: 'Scalify',
    avatar: 'M',
    color: '#06b6d4',
    stars: 5,
    text: "We evaluated 8 workflow platforms and NexaFlow was the clear winner. The integration depth, the UI, the support — everything is best-in-class.",
  },
  {
    name: 'Chris Johnson',
    role: 'DevOps Lead',
    company: 'CloudNine',
    avatar: 'C',
    color: '#10b981',
    stars: 5,
    text: "Cut our infrastructure costs by 40% and deployment time by 70%. The ROI was immediate. Every DevOps team should be using this.",
  },
  {
    name: 'Nina Torres',
    role: 'VP Operations',
    company: 'Nexus',
    avatar: 'N',
    color: '#ec4899',
    stars: 5,
    text: "The reporting and analytics are incredible. For the first time, I can see exactly what's happening across all our automated workflows in real-time.",
  },
  {
    name: 'Sam Wright',
    role: 'Founder',
    company: 'BuildFast',
    avatar: 'S',
    color: '#f59e0b',
    stars: 5,
    text: "As a solo founder, NexaFlow is like having a whole operations team. It handles everything from user onboarding to billing to alerting automatically.",
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`testimonial-card ${isVisible ? 'testimonial-card--visible' : ''}`}
      style={{ '--delay': `${index * 0.1}s` }}
    >
      <div className="testimonial-card__stars">
        {'★'.repeat(testimonial.stars)}
      </div>
      <p className="testimonial-card__text">"{testimonial.text}"</p>
      <div className="testimonial-card__author">
        <div
          className="testimonial-card__avatar"
          style={{ background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}88)` }}
        >
          {testimonial.avatar}
        </div>
        <div className="testimonial-card__info">
          <div className="testimonial-card__name">{testimonial.name}</div>
          <div className="testimonial-card__role">{testimonial.role} at {testimonial.company}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${titleVisible ? 'section-header--visible' : ''}`}>
          <div className="section-badge">
            <span>💬</span> Testimonials
          </div>
          <h2 className="section-title">
            Loved by <span className="gradient-text-pink">12,000+ teams</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from the teams who've transformed
            their operations with NexaFlow.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
