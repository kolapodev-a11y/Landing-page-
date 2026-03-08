import React, { useRef, useEffect, useState } from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Starter',
    price: '0',
    period: 'Free forever',
    description: 'Perfect for individuals and side projects',
    color: '#64748b',
    features: [
      '5 active workflows',
      '1,000 task runs/month',
      '10+ integrations',
      'Basic analytics',
      'Community support',
      '1 user',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '49',
    period: 'per month',
    description: 'For growing teams that need more power',
    color: '#7c3aed',
    features: [
      'Unlimited workflows',
      '100K task runs/month',
      '500+ integrations',
      'Advanced analytics & logs',
      'AI Agents (5 active)',
      'Priority support',
      '10 users',
      'Custom webhooks',
    ],
    cta: 'Start Pro Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '199',
    period: 'per month',
    description: 'For large organizations with complex needs',
    color: '#06b6d4',
    features: [
      'Everything in Pro',
      'Unlimited task runs',
      'Unlimited AI Agents',
      'Custom integrations',
      'SSO & SAML',
      'SLA 99.99% uptime',
      'Dedicated support',
      'Unlimited users',
      'Audit logs & compliance',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [billing, setBilling] = useState('monthly');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="pricing" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'section-header--visible' : ''}`}>
          <div className="section-badge">
            <span>💎</span> Pricing
          </div>
          <h2 className="section-title">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="section-subtitle">
            No hidden fees. No surprise bills. Start free, scale as you grow.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className={`pricing__toggle ${isVisible ? 'pricing__toggle--visible' : ''}`}>
          <button
            className={`pricing__toggle-btn ${billing === 'monthly' ? 'pricing__toggle-btn--active' : ''}`}
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </button>
          <button
            className={`pricing__toggle-btn ${billing === 'annual' ? 'pricing__toggle-btn--active' : ''}`}
            onClick={() => setBilling('annual')}
          >
            Annual
            <span className="pricing__save-badge">Save 20%</span>
          </button>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => {
            const price = billing === 'annual' && plan.price !== '0'
              ? Math.floor(parseInt(plan.price) * 0.8)
              : plan.price;

            return (
              <div
                key={i}
                className={`pricing-card ${plan.popular ? 'pricing-card--popular' : ''} ${isVisible ? 'pricing-card--visible' : ''}`}
                style={{ '--plan-color': plan.color, '--delay': `${i * 0.15}s` }}
              >
                {plan.popular && (
                  <div className="pricing-card__popular-badge">Most Popular</div>
                )}

                <div className="pricing-card__header">
                  <div className="pricing-card__name">{plan.name}</div>
                  <div className="pricing-card__price">
                    <span className="pricing-card__currency">$</span>
                    <span className="pricing-card__amount">{price}</span>
                  </div>
                  <div className="pricing-card__period">{plan.period}</div>
                  <p className="pricing-card__desc">{plan.description}</p>
                </div>

                <div className="pricing-card__divider" />

                <ul className="pricing-card__features">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="pricing-card__feature">
                      <span className="pricing-card__check" style={{ color: plan.color }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`pricing-card__cta ${plan.popular ? 'pricing-card__cta--primary' : 'pricing-card__cta--secondary'}`}
                  style={plan.popular ? {} : { borderColor: `${plan.color}40`, color: plan.color }}
                >
                  {plan.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            );
          })}
        </div>

        {/* Guarantee */}
        <div className={`pricing__guarantee ${isVisible ? 'pricing__guarantee--visible' : ''}`}>
          <span className="pricing__guarantee-icon">🛡️</span>
          <p>
            <strong>30-day money-back guarantee.</strong> Try NexaFlow Pro risk-free.
            If you're not completely satisfied, we'll refund you — no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
