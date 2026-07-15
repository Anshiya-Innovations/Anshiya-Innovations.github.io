import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

// Import template asset images
import solutionsDashboard from '../../assets/template-asset/After the Deal – 5 Strategies to Ensure a Successful Merger.jpg';
import cardMonitor from '../../assets/template-asset/Trusted E-commerce Experts for Store Growth _ 99 E-commerce Experts.jpg';
import showcasePie from '../../assets/template-asset/Creating an Effective Customer Support Survey.jpg';
import showcaseBars from '../../assets/template-asset/Inteligencia multigeneracional_ la clave para liderar equipos diversos.jpg';
import showcaseThree from '../../assets/template-asset/7 Proven Tips to Get Sales Fast.jpg';
import showcaseTable from '../../assets/template-asset/The Role of Workplace Policies in Supporting Employees Through Life Events - HousesItWorld.jpg';

// Import icon assets
import badgeChart from '../../assets/solutions-badge-chart.png';
import iconDoc from '../../assets/solutions-icon-document.png';
import iconSpeed from '../../assets/solutions-icon-speed.png';
import iconBrain from '../../assets/solutions-icon-brain.png';
import iconChart from '../../assets/solutions-icon-chart.png';
import badgeSeal from '../../assets/solutions-badge-seal.png';
import iconBrainNew from '../../assets/solutions-icon-brain-new.png';

import './Solutions.css';

// Dynamic Content Configuration Map
import { contentMap } from './SolutionsData';



const Solutions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { type: pathType } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const typeParam = queryParams.get('type') || pathType;
  const type = contentMap[typeParam] ? typeParam : 'code';
  
  // Clone activeContent and ensure it has a cta fallback to prevent crashes
  const activeContent = contentMap[type] ? { ...contentMap[type] } : null;
  if (activeContent && !activeContent.cta) {
    activeContent.cta = {
      title: "Ready to Secure Your Enterprise Landscape?",
      subtitle: "Reshape how your organization manages compute scale, automates processes, and optimizes spends. Partner with Anshiya to deploy intelligent solutions today.",
      primary: "Get Free Consultation",
      secondary: "Schedule Discovery Session"
    };
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCtaClick = (buttonText) => {
    if (buttonText === "Get Free Consultation") {
      window.open("https://calendly.com/anshiyainnovations/30min", "_blank");
    } else {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="solutions-page">
      {/* 1. Hero Section */}
      <section className="solutions-hero-section">
        <div className="container grid-2 solutions-hero-container">
          {/* Left Column */}
          <div className="solutions-hero-left">
            <div className="solutions-badge-container">
              <span className="solutions-blue-dot"></span>
              <span className="solutions-badge-text">{activeContent.hero.badge}</span>
            </div>
            <h1 className="solutions-hero-title">
              {activeContent.hero.title1}<br />
              <span className="solutions-title-blue">{activeContent.hero.title2}</span>
            </h1>
            <p className="solutions-hero-description">
              {activeContent.hero.desc}
            </p>
            <div className="solutions-hero-actions">
              <button 
                onClick={() => window.open('https://calendly.com/anshiyainnovations/30min', '_blank', 'noopener,noreferrer')} 
                className="solutions-hero-btn solutions-hero-btn-primary"
              >
                Get Started <span className="solutions-arrow">&rarr;</span>
              </button>
              <button 
                onClick={() => handleScrollToSection('insights')} 
                className="solutions-hero-btn solutions-hero-btn-secondary"
              >
                View Methodology
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="solutions-hero-right">
            <div className="solutions-image-card-wrapper">
              <img 
                src={solutionsDashboard} 
                alt="Clean Core Assessment Dashboard analytics" 
                className="solutions-dashboard-img"
              />
              <div className="solutions-floating-insights-card">
                <div className="solutions-insights-icon-box">
                  <img src={badgeChart} alt="Bar chart icon" className="solutions-insights-icon" />
                </div>
                <div className="solutions-insights-text">
                  <h4 className="solutions-insights-title">Live Insights</h4>
                  <p className="solutions-insights-desc">
                    Real-time object classification and technical debt scoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Powerful Insights Block */}
      <section id="insights" className="solutions-insights-section">
        <div className="container solutions-insights-container">
          <h2 className="solutions-section-title">{activeContent.insights.title}</h2>
          <p className="solutions-section-subtitle">
            {activeContent.insights.subtitle}
          </p>

          {/* Asymmetric Cards Grid */}
          <div className="solutions-cards-grid">
            {/* Card 1: Comprehensive Display & Analysis (Wide, White background) */}
            <div className="solutions-card card-wide card-white">
              <div className="solutions-card-header">
                <div className="solutions-card-icon-box">
                  <img src={iconChart} alt="Chart icon" className="solutions-card-icon" />
                </div>
                <h3 className="solutions-card-title">{activeContent.insights.cards[0].title}</h3>
                <p className="solutions-card-description">
                  {activeContent.insights.cards[0].desc}
                </p>
              </div>
              <div className="solutions-card-media-wrapper">
                <img 
                  src={cardMonitor} 
                  alt="Comprehensive Analytics Display Monitor" 
                  className="solutions-card-monitor-img" 
                />
              </div>
            </div>

            {/* Card 2: Identify Case-Specific Enhancements (Narrow, Dark blue background) */}
            <div className="solutions-card card-narrow card-dark">
              <div className="solutions-card-header">
                <div className="solutions-card-icon-box bg-blue-glow transparent-bg">
                  <img src={iconBrainNew} alt="Brain gear icon" className="solutions-card-icon-full" />
                </div>
                <h3 className="solutions-card-title text-white">{activeContent.insights.cards[1].title}</h3>
                <p className="solutions-card-description text-slate-300">
                  {activeContent.insights.cards[1].desc}
                </p>
              </div>
              {/* Background watermark badge */}
              <div className="solutions-card-watermark">
                <img src={iconDoc} alt="Document check watermark" className="watermark-png-img" />
              </div>
            </div>

            {/* Card 3: Score Conversion Effort (Narrow, White background) */}
            <div className="solutions-card card-narrow card-white card-border-right">
              <div className="solutions-card-header">
                <div className="solutions-card-icon-box">
                  <img src={iconSpeed} alt="Speedometer icon" className="solutions-card-icon" />
                </div>
                <h3 className="solutions-card-title">{activeContent.insights.cards[2].title}</h3>
                <p className="solutions-card-description">
                  {activeContent.insights.cards[2].desc}
                </p>
              </div>
            </div>

            {/* Card 4: Migration Recommendations (Wide, Light grey background) */}
            <div className="solutions-card card-wide card-grey">
              <div className="solutions-card-content-split">
                <div className="solutions-card-split-left">
                  <div className="solutions-card-icon-box">
                    <img src={iconBrain} alt="Brain gear icon" className="solutions-card-icon" />
                  </div>
                  <h3 className="solutions-card-title">{activeContent.insights.cards[3].title}</h3>
                  <p className="solutions-card-description">
                    {activeContent.insights.cards[3].desc}
                  </p>
                </div>
                
                <div className="solutions-card-split-right">
                  {/* Floating Radar ring animation */}
                  <div className="solutions-radar-box">
                    <div className="radar-circle ring-outer"></div>
                    <div className="radar-circle ring-middle"></div>
                    <div className="radar-circle ring-inner"></div>
                    <div className="radar-core"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Minimize Technical Debt Section */}
      <section className="solutions-debt-section">
        <div className="container solutions-debt-container">
          {/* Left Column: Title and Bullet features */}
          <div className="solutions-debt-left">
            <h2 className="solutions-debt-title">
              {activeContent.debt.title1}<br />
              {activeContent.debt.title2}
            </h2>
            <p className="solutions-debt-description">
              {activeContent.debt.desc}
            </p>
            <ul className="solutions-debt-features-list">
              {activeContent.debt.bullets.map((bullet, idx) => {
                const cleanBullet = bullet.replace(/^\d+[\s\.\-\\]*/, '');
                return (
                  <li key={idx}>
                    <span className="solutions-check-circle">
                      <svg className="check-svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="debt-feature-text">{cleanBullet}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column: 2x2 Grid of White Cards */}
          <div className="solutions-debt-right">
            <div className="solutions-debt-cards-grid">
              {activeContent.debt.cards.map((card, idx) => (
                <div key={idx} className="debt-info-card">
                  <span className="debt-card-category">{card.category}</span>
                  <h4 className="debt-card-subtitle">{card.subtitle}</h4>
                  <p className="debt-card-paragraph">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. InFocus Dashboard Showcase Section */}
      <section className="solutions-showcase-section">
        <div className="container solutions-showcase-container">
          <div className="solutions-showcase-header">
            <h2 className="solutions-showcase-title">{activeContent.showcase.title}</h2>
            <p className="solutions-showcase-subtitle">
              {activeContent.showcase.subtitle}
            </p>
          </div>

          <div className="solutions-showcase-content">
            {activeContent.showcase.rows.map((row, idx) => (
              <div 
                key={idx} 
                className={`solutions-showcase-row ${idx % 2 === 1 ? 'row-reverse' : ''}`}
              >
                <div className="solutions-showcase-media">
                  <div className="showcase-image-wrapper">
                    <img 
                      src={
                        row.img === 'showcasePie' ? showcasePie :
                        row.img === 'showcaseBars' ? showcaseBars :
                        row.img === 'solutionsDashboard' ? showcaseThree :
                        row.img === 'showcaseTable' ? showcaseTable :
                        row.img
                      } 
                      alt={row.title} 
                      className="showcase-img"
                    />
                  </div>
                </div>
                <div className="solutions-showcase-text">
                  <h3 className="showcase-row-title">{row.title}</h3>
                  <p className="showcase-row-desc">{row.desc}</p>
                  <div className="showcase-row-badges">
                    {row.badges.map((badge, bidx) => (
                      <span key={bidx} className="showcase-badge">{badge}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Clean Core CTA Banner Section */}
      <section className="solutions-cta-banner-section">
        <div className="container solutions-cta-banner-container">
          <h2 className="solutions-cta-banner-title">
            {activeContent.cta.title}
          </h2>
          <p className="solutions-cta-banner-subtitle">
            {activeContent.cta.subtitle}
          </p>
          <div className="solutions-cta-banner-actions">
            <button 
              onClick={() => window.open('https://calendly.com/anshiyainnovations/30min', '_blank', 'noopener,noreferrer')} 
              className="solutions-cta-btn solutions-cta-btn-primary"
            >
              Talk to Our Experts
            </button>
            <button 
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="solutions-cta-btn solutions-cta-btn-secondary"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
