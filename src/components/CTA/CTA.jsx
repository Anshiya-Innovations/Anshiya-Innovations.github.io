import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        {/* Left: Text and description */}
        <div className="cta-content-left">
          <h2 className="cta-title">Do you need free <br />Consultation?</h2>
          <p className="cta-description">
            Join our mailing list for weekly technical insights and expert advice on business technology trends.
          </p>
        </div>

        {/* Right: Email Card Link */}
        <a href="mailto:contact@anshiyainnovations.com" className="cta-contact-card">
          <div className="cta-mail-icon-box">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="cta-envelope-svg"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div className="cta-contact-text">
            <span className="cta-email-addr">contact@anshiyainnovations.com</span>
            <span className="cta-send-email-lbl">SEND E-MAIL</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default CTA;
