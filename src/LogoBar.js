import React from 'react';
import './LogoBar.css';

const logos = [
  { name: 'Stripe', icon: '💳' },
  { name: 'Slack', icon: '💬' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Notion', icon: '📝' },
  { name: 'Vercel', icon: '▲' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Linear', icon: '📐' },
  { name: 'Jira', icon: '🔵' },
  { name: 'Shopify', icon: '🛍️' },
];

const LogoBar = () => {
  return (
    <section className="logobar">
      <div className="container">
        <p className="logobar__label">Trusted by teams at</p>
      </div>
      <div className="logobar__track-wrap">
        <div className="logobar__track">
          {[...logos, ...logos].map((logo, i) => (
            <div className="logobar__item" key={i}>
              <span className="logobar__icon">{logo.icon}</span>
              <span className="logobar__name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
