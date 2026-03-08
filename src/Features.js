import React, { useRef, useEffect, useState } from 'react';
import './Features.css';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Automations',
    description: 'Build complex multi-step workflows in minutes with our visual drag-and-drop editor. No code required.',
    color: '#7c3aed',
    badge: 'Popular',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Agents',
    description: 'Deploy intelligent AI agents that understand your business context and make smart decisions autonomously.',
    color: '#2563eb',
    badge: 'New',
  },
  {
    icon: '🔗',
    title: '500+ Integrations',
    description: 'Connect your entire tool stack instantly. Slack, GitHub, Stripe, Notion, and hundreds more ready out-of-the-box.',
    color: '#06b6d4',
    badge: null,
  },
  {
    icon: '📊',
    title: 'Real-Time Analytics',
    description: 'Monitor every workflow execution with detailed logs, performance metrics, and intelligent anomaly detection.',
    color: '#10b981',
    badge: null,
  },
  {
    icon: '🔐',
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified. End-to-end encryption, SSO, RBAC, and full audit trails for compliance.',
    color: '#f59e0b',
    badge: null,
  },
  {
    icon: '🌐',
    title: 'Global Edge Network',
    description: 'Run workflows on our distributed edge infrastructure with sub-50ms latency across 30+ regions worldwide.',
    color: '#ec4899',
    badge: 'Enterprise',
  },
];

const FeatureCard = ({ feature, index }) => {
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
      className={`feature-card ${isVisible ? 'feature-card--visible' : ''}`}
      style={{ '--card-color': feature.color, '--delay': `${index * 0.1}s` }}
    >
      {feature.badge && (
        <div className="feature-card__badge">{feature.badge}</div>
      )}
      <div className="feature-card__icon" style={{ background: `${feature.color}18`, borderColor: `${feature.color}30` }}>
        <span>{feature.icon}</span>
      </div>
      <h3 className="feature-card__title">{feature.title}</h3>
      <p className="feature-card__desc">{feature.description}</p>
      <div className="feature-card__footer">
        <a href="#pricing" className="feature-card__link" style={{ color: feature.color }}>
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <div className="feature-card__glow" style={{ background: `radial-gradient(circle at center, ${feature.color}20 0%, transparent 70%)` }} />
      </div>
    </div>
  );
};

const Features = () => {
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
    <section id="features" className="features" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${titleVisible ? 'section-header--visible' : ''}`}>
          <div className="section-badge">
            <span>⚡</span> Features
          </div>
          <h2 className="section-title">
            Everything you need to
            <br />
            <span className="gradient-text">supercharge your workflow</span>
          </h2>
          <p className="section-subtitle">
            From no-code automations to enterprise-grade AI agents — NexaFlow gives
            your team the power to move at the speed of thought.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
