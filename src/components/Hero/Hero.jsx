import React, { useState, useEffect } from 'react';
import heroDashboard from '../../assets/hero-dashboard.png';
import serviceIconIt from '../../assets/uploaded-it-icon.png';
import uploadedRobotIcon from '../../assets/uploaded-robot-icon.png';
import './Hero.css';

const Hero = ({ onCtaClick }) => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
            We help startups, Small and Medium-sized Enterprises (SMEs), and enterprises accelerate digital transformation through innovative software development, SAP BTP solutions, cloud technologies, and modern web applications.
          </p>
          
          <div className="hero-actions">
            <button onClick={() => window.open('https://calendly.com/anshiyainnovations/30min', '_blank', 'noopener,noreferrer')} className="btn-primary hero-btn">
              Get Free Consultation <span className="action-arrow">&rarr;</span>
            </button>
            <button onClick={() => onCtaClick('services2-section')} className="btn-outline hero-btn">
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
          {/* Top Left Corner Cards */}
          <div className={`hero-floating-card badge-top-left ${activeCard === 0 ? 'active' : 'inactive'}`}>
            <div className="floating-icon-box cloud-box">
              <i className="fas fa-cloud"></i>
            </div>
            <div className="floating-info">
              <span className="floating-title">Cloud Solutions</span>
              <span className="floating-subtitle">SAP BTP</span>
            </div>
          </div>

          <div className={`hero-floating-card badge-top-left ${activeCard === 1 ? 'active' : 'inactive'}`}>
            <div className="floating-icon-box it-box">
              <img src={serviceIconIt} alt="IT Consultancy" className="floating-card-icon-img" />
            </div>
            <div className="floating-info">
              <span className="floating-title">IT Consultancy</span>
              <span className="floating-subtitle orange-text">Expert Guidance</span>
            </div>
          </div>

          {/* Bottom Right Corner Cards */}
          <div className={`hero-floating-card badge-bottom-right ${activeCard === 0 ? 'active' : 'inactive'}`}>
            <div className="floating-icon-box lock-box">
              <i className="fas fa-lock"></i>
            </div>
            <div className="floating-info">
              <span className="floating-title">Security First</span>
              <span className="floating-subtitle green-text">Secure & Scalable</span>
            </div>
          </div>

          <div className={`hero-floating-card badge-bottom-right ${activeCard === 1 ? 'active' : 'inactive'}`}>
            <div className="floating-icon-box ai-box">
              <img src={uploadedRobotIcon} alt="AI Integration & Automation" className="floating-card-icon-img" />
            </div>
            <div className="floating-info">
              <span className="floating-title">AI Integration & Automation</span>
              <span className="floating-subtitle purple-text">Smart Workflows</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

