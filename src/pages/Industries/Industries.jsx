import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import industryHeroGraphic from '../../assets/industry-hero-graphic.png';
import industryKeyIcon from '../../assets/industry-key-icon.png';
import industryMeeting from '../../assets/uploaded-industry-meeting.png';

// Import newly copied industry icons
import iconHealthcare from '../../assets/industry/icon-healthcare.png';
import iconBanking from '../../assets/industry/icon-banking.png';
import iconManufacturing from '../../assets/industry/icon-manufacturing.png';
import iconRetail from '../../assets/industry/icon-retail.png';
import iconEducation from '../../assets/industry/icon-education.png';
import iconLogistics from '../../assets/industry/icon-logistics.png';
import iconEnergy from '../../assets/industry/icon-energy.png';
import iconRealestate from '../../assets/industry/icon-realestate.png';
import iconGovernment from '../../assets/industry/icon-government.png';

import './Industries.css';

const Industries = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industriesList = [
    {
      icon: iconHealthcare,
      title: "Healthcare",
      description: "Telemedicine and HIPAA-compliant data systems for modern medical providers."
    },
    {
      icon: iconBanking,
      title: "Banking & Finance",
      description: "Secure fintech, fraud detection, and robust digital banking infrastructures."
    },
    {
      icon: iconManufacturing,
      title: "Manufacturing",
      description: "Smart factory automation and predictive maintenance powered by IoT."
    },
    {
      icon: iconRetail,
      title: "Retail & E-Commerce",
      description: "Scalable marketplaces and AI-driven shopping experiences for global brands."
    },
    {
      icon: iconEducation,
      title: "Education",
      description: "Custom LMS platforms and digital tools for effective remote learning."
    },
    {
      icon: iconLogistics,
      title: "Logistics",
      description: "End-to-end tracking and fleet management for seamless global distribution."
    },
    {
      icon: iconEnergy,
      title: "Energy & Utilities",
      description: "Smart grid monitoring and renewable energy management for a sustainable future."
    },
    {
      icon: iconRealestate,
      title: "Real Estate",
      description: "PropTech solutions featuring virtual tours and automated property management."
    },
    {
      icon: iconGovernment,
      title: "Government",
      description: "Digital governance, secure public records, and citizen-centric service portals."
    }
  ];

  return (
    <div className="industries-page">
      {/* 1. Hero Section */}
      <section className="industry-hero-section">
        <div className="container grid-2 industry-hero-container">
          {/* Left Column: Heading and Details */}
          <div className="industry-hero-left">
            <span className="industry-badge">OUR EXPERTISE</span>
            <h1 className="industry-hero-title">
              Industries We Serve /<br />
              <span className="industry-highlight-text">
                Empowering Your Sector<br />
                with Tailored Tech
              </span>
            </h1>
            <p className="industry-hero-description">
              Driving digital transformation with specialized IT strategies that solve unique industry challenges and catalyze growth.
            </p>
            <div className="industry-hero-actions">
              <button 
                onClick={() => handleScrollToSection('industries-grid')} 
                className="industry-btn-primary"
              >
                Explore Industry Solutions <span className="arrow-down-span">&darr;</span>
              </button>
              <button 
                onClick={() => window.open('https://calendly.com/anshiyainnovations/30min', '_blank', 'noopener,noreferrer')} 
                className="industry-btn-outline"
              >
                View Case Studies
              </button>
            </div>
          </div>

          {/* Right Column: Graphic with overlapping stats card */}
          <div className="industry-hero-right">
            <div className="industry-image-card-wrapper">
              <img 
                src={industryHeroGraphic} 
                alt="Futuristic server screen with circuit boards" 
                className="industry-hero-img"
              />
              <div className="industry-floating-projects-card">
                <div className="industry-projects-icon-box">
                  <img src={industryKeyIcon} alt="Key Icon" className="industry-key-icon-img" />
                </div>
                <div className="industry-projects-text">
                  <span className="industry-projects-num">500+</span>
                  <span className="industry-projects-lbl">GLOBAL PROJECTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Industries We Serve Grid Section */}
      <section id="industries-grid" className="industries-grid-section">
        <div className="container">
          <div className="industries-section-header">
            <h2 className="industries-section-title">Industries We Serve</h2>
            <p className="industries-section-subtitle">
              Discover how our technology services are designed to optimize performance and secure the future across specialized market sectors.
            </p>
          </div>

          <div className="grid-3 industries-cards-container">
            {industriesList.map((ind, index) => (
              <div key={index} className="industry-card">
                <div className="industry-card-icon-box">
                  <img src={ind.icon} alt={ind.title} className="industry-card-icon-img" />
                </div>
                <h3 className="industry-card-title">{ind.title}</h3>
                <p className="industry-card-desc">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Industry-First Approach Section */}
      <section className="industry-approach-section">
        <div className="container grid-2 industry-approach-container">
          {/* Left Column: Boardroom meeting image */}
          <div className="industry-approach-left">
            <div className="industry-meeting-image-wrapper">
              <img 
                src={industryMeeting} 
                alt="Executive board room meeting discussing digital strategy" 
                className="industry-meeting-img"
              />
            </div>
          </div>

          {/* Right Column: Approach details */}
          <div className="industry-approach-right">
            <h2 className="industry-approach-title">Our Industry-First Approach</h2>
            <div className="industry-steps-list">
              {/* Step 1 */}
              <div className="industry-step-item">
                <div className="industry-step-number">1</div>
                <div className="industry-step-content">
                  <h3 className="industry-step-title">Strategy & Analysis</h3>
                  <p className="industry-step-text">
                    We analyze your goals and technical gaps to craft a bespoke digital roadmap for your industry.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="industry-step-item">
                <div className="industry-step-number">2</div>
                <div className="industry-step-content">
                  <h3 className="industry-step-title">Seamless Implementation</h3>
                  <p className="industry-step-text">
                    Our engineers deploy robust solutions with minimal disruption, ensuring a smooth tech transition.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="industry-step-item">
                <div className="industry-step-number">3</div>
                <div className="industry-step-content">
                  <h3 className="industry-step-title">Ongoing Managed Support</h3>
                  <p className="industry-step-text">
                    We provide continuous monitoring and optimization to ensure long-term stability and market adaptation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ready to Transform Your Industry Bottom CTA */}
      <section className="industry-bottom-cta-section">
        <div className="container industry-bottom-cta-container">
          <h2 className="industry-bottom-cta-title">Ready to Transform Your Industry?</h2>
          <p className="industry-bottom-cta-subtitle">
            Join hundreds of successful companies that have partnered with us to accelerate their digital journey. Let's build the future together.
          </p>
          <div className="industry-bottom-cta-actions">
            <button 
              onClick={() => window.open('https://calendly.com/anshiyainnovations/30min', '_blank', 'noopener,noreferrer')} 
              className="industry-bottom-cta-btn cta-btn-primary"
            >
              Get Free Consultation
            </button>
            <button 
              onClick={() => navigate('/contact')} 
              className="industry-bottom-cta-btn cta-btn-secondary"
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
