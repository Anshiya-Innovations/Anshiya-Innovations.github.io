import React from 'react';
import heroDashboard from '../../assets/hero-dashboard.png';
import './Hero.css';

const Hero = ({ onCtaClick }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container grid-2">
        <div className="hero-content">
          <div className="hero-top-badge">
            <span className="badge-line"></span>
            <span className="badge-text">Innovate &bull; Integrate &bull; Inspire</span>
            <span className="badge-line"></span>
          </div>
          
          <h1 className="hero-title">
            Transform Your <br />
            Business with <span className="highlight-text">Smart <br />IT Solutions</span>
          </h1>
          
          <p className="hero-description">
            We help startups, SMEs, and enterprises accelerate digital transformation through innovative software development, SAP BTP solutions, cloud technologies, and modern web applications.
          </p>
          
          <div className="hero-actions">
            <button onClick={() => onCtaClick('appointment')} className="btn-primary hero-btn">
              Get Free Consultation <span className="action-arrow">&rarr;</span>
            </button>
            <button onClick={() => onCtaClick('services')} className="btn-outline hero-btn">
              Explore Our Services <span className="play-icon-span"><i className="far fa-play-circle"></i></span>
            </button>
          </div>
          
          <p className="hero-trusted-text">Trusted by forward-thinking companies</p>
        </div>
        
        <div className="hero-image-wrapper">
          <img 
            src={heroDashboard} 
            alt="Anshiya Innovations IT Platform Dashboard" 
            className="hero-dashboard-img"
          />
          
          {/* Floating Badges */}
          <div className="hero-floating-card badge-top-left">
            <div className="floating-icon-box cloud-box">
              <i className="fas fa-cloud"></i>
            </div>
            <div className="floating-info">
              <span className="floating-title">Cloud Solutions</span>
              <span className="floating-subtitle">SAP BTP</span>
            </div>
          </div>

          <div className="hero-floating-card badge-bottom-right">
            <div className="floating-icon-box lock-box">
              <i className="fas fa-lock"></i>
            </div>
            <div className="floating-info">
              <span className="floating-title">Security First</span>
              <span className="floating-subtitle green-text">Secure & Scalable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
