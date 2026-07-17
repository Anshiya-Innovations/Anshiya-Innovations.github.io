import React from 'react';
import { Link } from 'react-router-dom';

// Import footer images
import logoImg from '../../assets/footer-logo.png';
import logoFooterMobile from '../../assets/footer-logo-mobile.webp';
import iconLinkedin from '../../assets/footer-linkedin.png';
import iconFacebook from '../../assets/footer-facebook.png';
import iconInstagram from '../../assets/footer-instagram.png';
import iconYoutube from '../../assets/footer-youtube.png';
import btnNewsletter from '../../assets/footer-newsletter-btn.png';

import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "83390b46-d43e-4acf-ac88-dd001a4ba3a6",
        subject: "Newsletter Subscription Request - Anshiya Innovations",
        email: email
      })
    })
    .then(res => {
      alert('Thank you for subscribing to our newsletter!');
      e.target.reset();
    })
    .catch(err => {
      alert('There was an error subscribing. Please try again.');
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Column 1: Brand Info & Socials */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo" onClick={handleScrollToTop}>
            <picture>
              <source media="(max-width: 768px)" srcSet={logoFooterMobile} type="image/webp" />
              <img src={logoImg} alt="Anshiya Innovations Logo" width="440" height="123" className="footer-logo-img" />
            </picture>
          </Link>
          <p className="footer-description">
            Delivering innovative IT solutions to help businesses grow, automate and stay secure in an ever-changing digital landscape.
          </p>
          <div className="footer-socials-row">
            <a href="https://www.linkedin.com/posts/anshiya-innovations_digitaltransformation-artificialintelligence-activity-7479060323094712320-XqpU?utm_source=share&utm_medium=member_android&rcm=ACoAAECz-GcBQ3DaJkAbiQKlfCiLxJZ2XYxFvpE" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={iconLinkedin} alt="LinkedIn Icon" className="footer-social-icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61591383160568" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={iconFacebook} alt="Facebook Icon" className="footer-social-icon" />
            </a>
            <a href="https://www.instagram.com/anshiyainnovations/?__pwa=1#" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={iconYoutube} alt="YouTube Icon" className="footer-social-icon insta" />
            </a>
            <a href="https://youtube.com/@anshiyainnovations?si=7p6KQh7JljZCy4zA" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={iconInstagram} alt="Instagram Icon" className="footer-social-icon " />
            </a>
          </div>
        </div>

        {/* Column 2: Company */}
        <div className="footer-links-col">
          <h3 className="footer-title">COMPANY</h3>
          <ul className="footer-links">
            <li><Link to="/about-us" onClick={handleScrollToTop}>About Us</Link></li>
            <li><Link to="/about-us" onClick={handleScrollToTop}>Our Team</Link></li>
            <li><Link to="/career" onClick={handleScrollToTop}>Careers</Link></li>
            <li><Link to="/service-details" onClick={handleScrollToTop}>Services</Link></li>
            <li><Link to="/contact" onClick={handleScrollToTop}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Service Links */}
        <div className="footer-links-col">
          <h3 className="footer-title">SERVICE LINKS</h3>
          <ul className="footer-links">
            <li><Link to="/service-details/ai-integration-automation" onClick={handleScrollToTop}>AI Integration & Automation</Link></li>
            <li><Link to="/service-details/sap-btp" onClick={handleScrollToTop}>SAP BTP</Link></li>
            <li><Link to="/service-details/cyber-security" onClick={handleScrollToTop}>Cyber Security</Link></li>
            <li><Link to="/service-details/cloud-solutions" onClick={handleScrollToTop}>Cloud Solutions</Link></li>
            <li><Link to="/" state={{ scrollTo: 'services2-section' }}>All Services</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Extra Links */}
        <div className="footer-links-col footer-newsletter-col">
          <h3 className="footer-title">NEWSLETTER</h3>
          <p className="footer-newsletter-text">
            Subscribe to our newsletter for the latest tech updates and strategic business insights.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
            <input 
              type="email" 
              name="email"
              placeholder="Enter your email" 
              className="footer-newsletter-input"
              required 
            />
            <button type="submit" className="footer-newsletter-btn-wrapper">
              <img src={btnNewsletter} alt="Submit Arrow" width="52" height="38" className="footer-newsletter-btn-img" />
            </button>
          </form>

          {/* More Links Block */}
          <div className="footer-more-links-block">
            <h3 className="footer-title-more">MORE LINKS</h3>
            <div className="footer-more-links-row">
              <Link to="/service-details/employee-training-program" onClick={handleScrollToTop}>EMPLOYEE TRAINING</Link>
              <Link to="/service-details/internship-for-students" onClick={handleScrollToTop}>INTERNSHIP</Link>
              <Link to="/" onClick={handleScrollToTop}>PRIVACY POLICY</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p className="copyright-text">
          &copy; 2024 ANSHIYA INNOVATIONS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
