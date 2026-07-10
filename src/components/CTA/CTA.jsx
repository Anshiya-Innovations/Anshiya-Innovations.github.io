import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="industry-bottom-cta-section">
      <div className="container industry-bottom-cta-container">
        <h2 className="industry-bottom-cta-title">Ready to Transform Your Business?</h2>
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
            onClick={() => {
              navigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="industry-bottom-cta-btn cta-btn-secondary"
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
