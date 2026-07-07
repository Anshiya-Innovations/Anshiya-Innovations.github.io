import React from 'react';
import { useNavigate } from 'react-router-dom';
import sapHeroOffice from '../../assets/sap-hero-office.png';
import sapBadgeCheck from '../../assets/sap-badge-check.png';
import sapArrowDown from '../../assets/sap-arrow-down.png';

// Import sapbtp icons sequentially
import sapBg1 from '../../assets/sapbtp/Background (1).png'; // Lightbulb
import sapBg2 from '../../assets/sapbtp/Background (8).png'; // Shield
import sapBg3 from '../../assets/sapbtp/Background (3).png'; // Cloud backup
import sapBg4 from '../../assets/sapbtp/Background (5).png'; // Robot
import sapIcon from '../../assets/sapbtp/Overlay+Border.png'; // SAP BTP Grid
import sapBg5 from '../../assets/sapbtp/Background (4).png'; // Checklist
import sapBg6 from '../../assets/sapbtp/Background (6).png'; // Gears
import sapBg7 from '../../assets/sapbtp/Background (7).png'; // Cloud outline
import sapBg8 from '../../assets/sapbtp/Container (4).png';  // Graduation cap
import sapOverlay from '../../assets/sapbtp/Background (2).png'; // Smartphone

// Import Approach visual
import sapApproachImg from '../../assets/sap-approach-innovation.png';

import './SapService.css';

const SapService = () => {
  const navigate = useNavigate();

  const handleGetConsultation = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSupport = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
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

  return (
    <div className="sap-service-page">
      {/* 1. Hero Section */}
      <section className="sap-hero-section">
        <div className="container grid-2 sap-hero-container">
          {/* Left Column */}
          <div className="sap-hero-left">
            <span className="sap-expertise-badge">OUR EXPERTISE</span>
            <h1 className="sap-hero-title">
              Transforming<br />
              Businesses through<br />
              <span className="sap-title-blue">Innovative IT Services</span>
            </h1>
            <p className="sap-hero-description">
              Empowering enterprises with scalable technology solutions. From cloud migration to AI integration, we deliver excellence that drives sustainable growth.
            </p>
            <div className="sap-hero-actions">
              <button 
                onClick={() => handleScrollToSection('comprehensive-solutions')} 
                className="sap-hero-btn sap-hero-btn-primary"
              >
                Explore Services <img src={sapArrowDown} alt="Arrow Down" className="sap-arrow-img" />
              </button>
              <button 
                onClick={() => handleScrollToSection('comprehensive-solutions')} 
                className="sap-hero-btn sap-hero-btn-secondary"
              >
                View Case Studies
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="sap-hero-right">
            <div className="sap-image-card-wrapper">
              <img 
                src={sapHeroOffice} 
                alt="Innovative IT office collaboration" 
                className="sap-hero-office-img"
              />
              <div className="sap-floating-projects-card">
                <div className="sap-projects-icon-box">
                  <img src={sapBadgeCheck} alt="Checkmark badge" className="sap-projects-icon" />
                </div>
                <div className="sap-projects-text">
                  <span className="sap-projects-num">500+</span>
                  <span className="sap-projects-lbl">Global Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive IT Solutions Grid */}
      <section id="comprehensive-solutions" className="sap-solutions-grid-section">
        <div className="container">
          <div className="sap-solutions-header-centered">
            <h2 className="sap-section-title">Comprehensive IT Solutions</h2>
            <p className="sap-section-subtitle">
              Discover our full spectrum of technology services designed to optimize performance and secure your digital future.
            </p>
          </div>

          <div className="sap-solutions-cards-grid">
            {/* Card 1 */}
            <div className="sap-card card-regular">
              <div className="sap-card-icon-wrapper transparent-bg">
                <img src={sapBg1} alt="AI Integration & Automation" className="sap-card-icon-img-full" />
              </div>
              <h3 className="sap-card-title">AI Integration & Automation</h3>
              <p className="sap-card-description">
                Strategic roadmaps and technology audits tailored for enterprise growth.
              </p>
            </div>

            {/* Card 2 */}
            <div className="sap-card card-regular">
              <div className="sap-card-icon-wrapper transparent-bg">
                <img src={sapBg2} alt="Cyber Security" className="sap-card-icon-img-full" />
              </div>
              <h3 className="sap-card-title">Cyber Security</h3>
              <p className="sap-card-description">
                Advanced threat protection and round-the-clock digital surveillance.
              </p>
            </div>

            {/* Card 3 */}
            <div className="sap-card card-regular">
              <div className="sap-card-icon-wrapper transparent-bg">
                <img src={sapBg3} alt="Backup & Recovery" className="sap-card-icon-img-full" />
              </div>
              <h3 className="sap-card-title">Backup & Recovery</h3>
              <p className="sap-card-description">
                Robust business continuity solutions for data integrity and resilience.
              </p>
            </div>

            {/* Card 4 */}
            <div className="sap-card card-regular">
              <div className="sap-card-icon-wrapper transparent-bg">
                <img src={sapBg4} alt="AI Integration" className="sap-card-icon-img-full" />
              </div>
              <h3 className="sap-card-title">AI Integration</h3>
              <p className="sap-card-description">
                Automating workflows with custom-trained machine learning models.
              </p>
            </div>

            {/* Card 5 (SAP BTP - Wide, Royal Blue) */}
            <div className="sap-card card-wide card-sap-btp">
              <div className="sap-card-icon-wrapper sap-btp-icon-bg">
                <img src={sapIcon} alt="SAP BTP" className="sap-card-icon-img" />
              </div>
              <h3 className="sap-card-title text-white">SAP BTP</h3>
              <p className="sap-card-description text-slate-200">
                Streamline your enterprise processes with SAP Business Technology Platform solutions, integrating data and analytics into a unified environment.
              </p>
            </div>

            {/* Card 6 */}
            <div className="sap-card card-regular">
              <div className="sap-card-icon-wrapper transparent-bg">
                <img src={sapBg5} alt="Security Audit" className="sap-card-icon-img-full" />
              </div>
              <h3 className="sap-card-title">Security Audit</h3>
              <p className="sap-card-description">
                Comprehensive compliance checks and vulnerability assessments.
              </p>
            </div>

            {/* Card 7 */}
            <div className="sap-card card-regular">
              <div className="sap-card-icon-wrapper transparent-bg">
                <img src={sapBg6} alt="Business Automations" className="sap-card-icon-img-full" />
              </div>
              <h3 className="sap-card-title">Business Automations</h3>
              <p className="sap-card-description">
                Optimizing repetitive tasks to increase operational efficiency.
              </p>
            </div>

            {/* Card 8 */}
            <div className="sap-card card-regular">
              <div className="sap-card-icon-wrapper transparent-bg">
                <img src={sapBg7} alt="Cloud Solutions" className="sap-card-icon-img-full" />
              </div>
              <h3 className="sap-card-title">Cloud Solutions</h3>
              <p className="sap-card-description">
                Scalable infrastructure migration and managed cloud services.
              </p>
            </div>

            {/* Card 9 */}
            <div className="sap-card card-regular">
              <div className="sap-card-icon-wrapper sap-light-blue-bg">
                <img src={sapBg8} alt="Employee Training" className="sap-card-icon-img" />
              </div>
              <h3 className="sap-card-title">Employee Training</h3>
              <p className="sap-card-description">
                Upskilling your workforce for the future of digital operations.
              </p>
            </div>

            {/* Card 10 (Mobile App Development - Wide) */}
            <div className="sap-card card-wide">
              <div className="sap-card-icon-wrapper transparent-bg">
                <img src={sapOverlay} alt="Mobile App Development" className="sap-card-icon-img-full" />
              </div>
              <h3 className="sap-card-title">Mobile App Development</h3>
              <p className="sap-card-description">
                Creating intuitive, high-performance iOS and Android applications for your enterprise needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Approach to Innovation Section */}
      <section className="sap-approach-section">
        <div className="container grid-2 sap-approach-container">
          {/* Left Column: Overlapping Images */}
          <div className="sap-approach-left">
            <div className="sap-approach-image-wrapper">
              <div className="sap-bg-deco-top"></div>
              <img 
                src={sapApproachImg} 
                alt="Our Approach to Innovation Collaboration" 
                className="sap-approach-img"
              />
              <div className="sap-bg-deco-bottom"></div>
            </div>
          </div>

          {/* Right Column: Steps */}
          <div className="sap-approach-right">
            <h2 className="sap-approach-title">Our Approach to Innovation</h2>
            <div className="sap-approach-steps-list">
              {/* Step 1 */}
              <div className="sap-approach-step">
                <div className="sap-step-number-box">1</div>
                <div className="sap-step-content">
                  <h4 className="sap-step-title">Strategy & Analysis</h4>
                  <p className="sap-step-description">
                    We begin by deep-diving into your business goals, identifying technical gaps, and crafting a bespoke digital roadmap.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="sap-approach-step">
                <div className="sap-step-number-box">2</div>
                <div className="sap-step-content">
                  <h4 className="sap-step-title">Seamless Implementation</h4>
                  <p className="sap-step-description">
                    Our expert engineers deploy robust solutions with minimal disruption to your current operational flow.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="sap-approach-step">
                <div className="sap-step-number-box">3</div>
                <div className="sap-step-content">
                  <h4 className="sap-step-title">Ongoing Managed Support</h4>
                  <p className="sap-step-description">
                    Post-launch, we provide continuous monitoring, updates, and optimization to ensure long-term stability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="sap-bottom-cta-section">
        <div className="container sap-bottom-cta-container">
          <h2 className="sap-bottom-cta-title">Ready to modernize your infrastructure?</h2>
          <p className="sap-bottom-cta-subtitle">
            Join hundreds of successful companies that have partnered with us to accelerate their digital journey. Let's build the future together.
          </p>
          <div className="sap-bottom-cta-actions">
            <button onClick={handleGetConsultation} className="sap-bottom-cta-btn cta-btn-primary">
              Get Free Consultation
            </button>
            <button onClick={handleContactSupport} className="sap-bottom-cta-btn cta-btn-secondary">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SapService;
