import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Animated Grid Background */}
      <div className="hero__grid" />

      {/* Glow Orbs */}
      <div
        className="hero__orb hero__orb--1"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 20}px)`,
        }}
      />
      <div
        className="hero__orb hero__orb--2"
        style={{
          transform: `translate(${-mousePos.x * 20}px, ${-mousePos.y * 30}px)`,
        }}
      />
      <div className="hero__orb hero__orb--3" />

      <div className={`hero__content container ${isVisible ? 'hero__content--visible' : ''}`}>
        {/* Badge */}
        <div className="hero__badge">
          <div className="hero__badge-dot" />
          <span>New · AI-Powered Automation v2.0 is live</span>
          <svg className="hero__badge-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>

        {/* Headline */}
        <h1 className="hero__title">
          Build Smarter
          <br />
          <span className="gradient-text">Automate Faster</span>
          <br />
          <span className="hero__title-sub">Ship With Confidence</span>
        </h1>

        {/* Subtext */}
        <p className="hero__description">
          NexaFlow is the AI-native workflow platform that connects your entire stack.
          Automate repetitive tasks, collaborate in real-time, and deploy at scale —
          all from one beautiful dashboard.
        </p>

        {/* CTA Buttons */}
        <div className="hero__actions">
          <a href="#pricing" className="hero__btn hero__btn--primary">
            <span>Start for Free</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#features" className="hero__btn hero__btn--secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="rgba(124,58,237,0.2)" stroke="rgba(124,58,237,0.5)" strokeWidth="1.5"/>
              <polygon points="10,8 16,12 10,16" fill="#7c3aed"/>
            </svg>
            <span>Watch Demo</span>
          </a>
        </div>

        {/* Social Proof */}
        <div className="hero__social-proof">
          <div className="hero__avatars">
            {['#7c3aed','#2563eb','#06b6d4','#ec4899','#10b981'].map((color, i) => (
              <div key={i} className="hero__avatar" style={{ background: color, zIndex: 5 - i }}>
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <div className="hero__proof-text">
            <div className="hero__stars">{'★'.repeat(5)}</div>
            <span><strong>12,000+</strong> teams already using NexaFlow</span>
          </div>
        </div>
      </div>

      {/* Hero Visual */}
      <div className={`hero__visual ${isVisible ? 'hero__visual--visible' : ''}`}>
        <div className="hero__dashboard">
          {/* Dashboard Header */}
          <div className="dashboard__header">
            <div className="dashboard__dots">
              <span className="dot dot--red"></span>
              <span className="dot dot--yellow"></span>
              <span className="dot dot--green"></span>
            </div>
            <div className="dashboard__title">NexaFlow Dashboard</div>
            <div className="dashboard__status">
              <div className="status-dot" />
              <span>Live</span>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="dashboard__body">
            {/* Metrics Row */}
            <div className="dashboard__metrics">
              {[
                { label: 'Workflows', value: '2,847', change: '+12%', color: '#7c3aed' },
                { label: 'Automated', value: '98.2%', change: '+3.1%', color: '#06b6d4' },
                { label: 'Time Saved', value: '1,240h', change: '+28%', color: '#10b981' },
              ].map((metric, i) => (
                <div className="metric-card" key={i}>
                  <div className="metric-card__label">{metric.label}</div>
                  <div className="metric-card__value" style={{ color: metric.color }}>{metric.value}</div>
                  <div className="metric-card__change">↑ {metric.change}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="dashboard__chart">
              <div className="chart__label">Automation Activity</div>
              <div className="chart__bars">
                {[65, 80, 55, 90, 70, 95, 85, 75, 88, 92, 78, 96].map((h, i) => (
                  <div key={i} className="chart__bar-wrap">
                    <div
                      className="chart__bar"
                      style={{
                        height: `${h}%`,
                        background: i === 11
                          ? 'linear-gradient(180deg, #7c3aed, #2563eb)'
                          : i % 3 === 0
                          ? 'linear-gradient(180deg, #06b6d4 0%, rgba(6,182,212,0.3) 100%)'
                          : 'linear-gradient(180deg, rgba(124,58,237,0.5) 0%, rgba(124,58,237,0.1) 100%)',
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow Nodes */}
            <div className="dashboard__nodes">
              <div className="node node--trigger">
                <span>⚡</span> Trigger
              </div>
              <div className="node-connector" />
              <div className="node node--process">
                <span>⚙️</span> Process
              </div>
              <div className="node-connector" />
              <div className="node node--ai">
                <span>🤖</span> AI Agent
              </div>
              <div className="node-connector" />
              <div className="node node--output">
                <span>✅</span> Deploy
              </div>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="hero__float-card hero__float-card--1">
          <div className="float-card__icon">⚡</div>
          <div className="float-card__info">
            <div className="float-card__title">Task Automated</div>
            <div className="float-card__sub">Just now</div>
          </div>
          <div className="float-card__badge" style={{ color: '#10b981' }}>+1</div>
        </div>

        <div className="hero__float-card hero__float-card--2">
          <div className="float-card__icon">🚀</div>
          <div className="float-card__info">
            <div className="float-card__title">Deployed to Prod</div>
            <div className="float-card__sub">2 min ago</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
