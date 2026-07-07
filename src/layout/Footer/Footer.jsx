import React from 'react';
import { Link } from 'react-router-dom';

// Import footer images
import logoImg from '../../assets/footer-logo.png';
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
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Column 1: Brand Info & Socials */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo" onClick={handleScrollToTop}>
            <img src={logoImg} alt="Anshiya Innovations Logo" className="footer-logo-img" />
          </Link>
          <p className="footer-description">
            Delivering innovative IT solutions to help businesses grow, automate and stay secure in an ever-changing digital landscape.
          </p>
          <div className="footer-socials-row">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={iconLinkedin} alt="LinkedIn Icon" className="footer-social-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={iconFacebook} alt="Facebook Icon" className="footer-social-icon" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={iconYoutube} alt="YouTube Icon" className="footer-social-icon insta" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={iconInstagram} alt="Instagram Icon" className="footer-social-icon " />
            </a>
          </div>
        </div>

        {/* Column 2: Company */}
        <div className="footer-links-col">
          <h4 className="footer-title">COMPANY</h4>
          <ul className="footer-links">
            <li><Link to="/about" onClick={handleScrollToTop}>About Us</Link></li>
            <li><Link to="/team" onClick={handleScrollToTop}>Our Team</Link></li>
            <li><Link to="/careers" onClick={handleScrollToTop}>Careers</Link></li>
            <li><Link to="/" onClick={handleScrollToTop}>Services</Link></li>
            <li><Link to="/contact" onClick={handleScrollToTop}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Service Links */}
        <div className="footer-links-col">
          <h4 className="footer-title">SERVICE LINKS</h4>
          <ul className="footer-links">
            <li><Link to="/" onClick={handleScrollToTop}>AI Integration & Automation</Link></li>
            <li><Link to="/" onClick={handleScrollToTop}>SAP BTP</Link></li>
            <li><Link to="/" onClick={handleScrollToTop}>Cyber Security</Link></li>
            <li><Link to="/" onClick={handleScrollToTop}>Cloud Solutions</Link></li>
            <li><Link to="/" onClick={handleScrollToTop}>All Services</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Extra Links */}
        <div className="footer-links-col footer-newsletter-col">
          <h4 className="footer-title">NEWSLETTER</h4>
          <p className="footer-newsletter-text">
            Subscribe to our newsletter for the latest tech updates and strategic business insights.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="footer-newsletter-input"
              required 
            />
            <button type="submit" className="footer-newsletter-btn-wrapper">
              <img src={btnNewsletter} alt="Submit Arrow" className="footer-newsletter-btn-img" />
            </button>
          </form>

          {/* More Links Block */}
          <div className="footer-more-links-block">
            <h4 className="footer-title-more">MORE LINKS</h4>
            <div className="footer-more-links-row">
              <Link to="/" onClick={handleScrollToTop}>EMPLOYEE TRAINING</Link>
              <Link to="/" onClick={handleScrollToTop}>INTERNSHIP</Link>
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
