import React, { useRef, useEffect, useState } from 'react';
import './Stats.css';

const statsData = [
  { value: 12000, suffix: '+', label: 'Active Teams', icon: '👥', color: '#7c3aed' },
  { value: 99.9, suffix: '%', label: 'Uptime SLA', icon: '⚡', color: '#06b6d4', decimal: true },
  { value: 50, suffix: 'M+', label: 'Tasks Automated', icon: '🤖', color: '#10b981' },
  { value: 30, suffix: '+', label: 'Global Regions', icon: '🌐', color: '#f59e0b' },
];

const AnimatedNumber = ({ value, suffix, decimal, isVisible }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const next = Math.min(increment * step, value);
      setCurrent(next);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span>
      {decimal ? current.toFixed(1) : Math.floor(current).toLocaleString()}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="stats" ref={sectionRef}>
      <div className="stats__bg-line" />
      <div className="container">
        <div className={`section-header ${isVisible ? 'section-header--visible' : ''}`}>
          <div className="section-badge">
            <span>📊</span> By The Numbers
          </div>
          <h2 className="section-title">
            Trusted by <span className="gradient-text">thousands</span> of teams
          </h2>
        </div>

        <div className="stats__grid">
          {statsData.map((stat, i) => (
            <div
              key={i}
              className={`stat-card ${isVisible ? 'stat-card--visible' : ''}`}
              style={{ '--stat-color': stat.color, '--delay': `${i * 0.1}s` }}
            >
              <div className="stat-card__icon" style={{ background: `${stat.color}18`, borderColor: `${stat.color}30` }}>
                {stat.icon}
              </div>
              <div className="stat-card__value" style={{ color: stat.color }}>
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  decimal={stat.decimal}
                  isVisible={isVisible}
                />
              </div>
              <div className="stat-card__label">{stat.label}</div>
              <div className="stat-card__bar">
                <div
                  className="stat-card__bar-fill"
                  style={{
                    background: stat.color,
                    width: isVisible ? '100%' : '0%',
                    transitionDelay: `${i * 0.15}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Strip */}
        <div className={`stats__quote ${isVisible ? 'stats__quote--visible' : ''}`}>
          <div className="stats__quote-mark">"</div>
          <p className="stats__quote-text">
            NexaFlow saved our team <strong>40 hours per week</strong> and cut our deployment time by
            <strong> 80%</strong>. It's the single best tool we've ever adopted.
          </p>
          <div className="stats__quote-author">
            <div className="stats__quote-avatar" style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}>S</div>
            <div>
              <div className="stats__quote-name">Sarah Chen</div>
              <div className="stats__quote-role">CTO at Buildify</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
