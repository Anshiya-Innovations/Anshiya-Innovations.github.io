import React, { useState } from 'react';
import contactBuilding from '../../assets/contact-building.png';
import badgeCheck from '../../assets/contact-badge-check.png';
import contactMockup from '../../assets/contact-mockup.png';

// Import Info icons
import iconMail from '../../assets/contact-icon-mail.png';
import iconPhone from '../../assets/contact-icon-phone.png';
import iconLoc from '../../assets/contact-icon-loc.png';

import './Contact.css';

const Contact = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const faqs = [
    {
      question: "What IT services do you specialize in?",
      answer: "We specialize in custom software development, SAP BTP implementation and integration, cyber security audits and compliance, cloud migrations (AWS, Azure, Google Cloud), and business process automations."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. Small custom automations can take 2 to 4 weeks, while complex enterprise SAP BTP integrations or migrations typically span 2 to 6 months."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance SLAs, covering bug fixes, performance monitoring, scaling updates, and regular security updates to ensure your operations run smoothly."
    },
    {
      question: "Can you work with our existing internal IT team?",
      answer: "Absolutely! We work in synergy with internal IT teams, serving as subject matter experts to accelerate development or manage specific technical architectures like SAP, cyber security, or cloud environments."
    }
  ];

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent. One of our solution architects will contact you within 24 hours.');
    e.target.reset();
  };

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className="contact-page">
      {/* 1. Hero Section */}
      <section className="contact-hero-section">
        <div className="container grid-2 contact-hero-container">
          {/* Left Column: Heading and Details */}
          <div className="contact-hero-left">
            <span className="contact-mint-badge">Connect With Experts</span>
            <h1 className="contact-hero-title">
              Let's build the<br />
              future of IT<br />
              together.
            </h1>
            <p className="contact-hero-description">
              Partner with the Master Architects of digital infrastructure. Whether you're scaling an enterprise or launching a startup, we provide the stability and technological foresight you need.
            </p>
            <div className="contact-hero-actions">
              <button 
                onClick={() => handleScrollToSection('contact-form')} 
                className="contact-hero-btn contact-hero-btn-primary"
              >
                Start Your Project
              </button>
              <button 
                onClick={() => handleScrollToSection('contact-faqs')} 
                className="contact-hero-btn contact-hero-btn-secondary"
              >
                View FAQs
              </button>
            </div>
          </div>

          {/* Right Column: Building night mockup with overlap card */}
          <div className="contact-hero-right">
            <div className="contact-image-card-wrapper">
              <img 
                src={contactBuilding} 
                alt="Operations office building at night" 
                className="contact-building-img"
              />
              <div className="contact-floating-uptime-card">
                <div className="contact-uptime-icon-box">
                  <img src={badgeCheck} alt="Checkmark seal" className="contact-uptime-icon" />
                </div>
                <div className="contact-uptime-text">
                  <span className="contact-uptime-num">99.9%</span>
                  <span className="contact-uptime-lbl">Uptime Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Contact Cards Section */}
      <section className="contact-cards-section">
        <div className="container grid-3 contact-cards-container">
          {/* Card 1: Email */}
          <div className="contact-info-card">
            <div className="contact-card-icon-box">
              <img src={iconMail} alt="Envelope Icon" className="contact-card-icon" />
            </div>
            <h3 className="contact-card-title">Email Us</h3>
            <p className="contact-card-desc">Our support team is here to help you.</p>
            <a href="mailto:contact@anshiya.com" className="contact-card-link">contact@anshiya.com</a>
          </div>

          {/* Card 2: Call */}
          <div className="contact-info-card">
            <div className="contact-card-icon-box">
              <img src={iconPhone} alt="Phone Icon" className="contact-card-icon" />
            </div>
            <h3 className="contact-card-title">Call Us</h3>
            <p className="contact-card-desc">Monday - Friday, 9am to 6pm IST.</p>
            <a href="tel:+911234567890" className="contact-card-link">+91 12345 67890</a>
          </div>

          {/* Card 3: Location */}
          <div className="contact-info-card">
            <div className="contact-card-icon-box">
              <img src={iconLoc} alt="Location Pin Icon" className="contact-card-icon" />
            </div>
            <h3 className="contact-card-title">Headquarters</h3>
            <p className="contact-card-desc">Coimbatore, Tamil Nadu, India</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card-link"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* 3. Send Message Section */}
      <section id="contact-form" className="contact-form-section">
        <div className="container grid-2 contact-form-container">
          {/* Left Column: Form details */}
          <div className="contact-form-block-left">
            <h2 className="contact-form-section-title">Send us a Message</h2>
            <p className="contact-form-section-desc">
              Fill out the form below and one of our solution architects will contact you within 24 hours.
            </p>

            <form onSubmit={handleFormSubmit} className="contact-form-element">
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>FULL NAME</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div className="contact-form-group">
                  <label>EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    required 
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>PHONE NUMBER</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    required 
                  />
                </div>
                <div className="contact-form-group">
                  <label>COMPANY NAME</label>
                  <input 
                    type="text" 
                    placeholder="Architectural Innovations Ltd" 
                    required 
                  />
                </div>
              </div>

              <div className="contact-form-group full-width">
                <label>YOUR MESSAGE</label>
                <textarea 
                  rows="5" 
                  placeholder="How can we help you transform your business?"
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-form-submit-btn">
                Send Message <span className="plane-arrow-span">&rarr;</span>
              </button>
            </form>
          </div>

          {/* Right Column: Contact Mockup Image */}
          <div className="contact-form-block-right">
            <img 
              src={contactMockup} 
              alt="Contact us map and main office mockup" 
              className="contact-mockup-img"
            />
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions (FAQ) Section */}
      <section id="contact-faqs" className="contact-faqs-section">
        <div className="container contact-faqs-container">
          <div className="contact-faqs-header">
            <span className="contact-faqs-subtitle">SUPPORT CENTER</span>
            <h2 className="contact-faqs-title">Frequently Asked Questions</h2>
          </div>

          <div className="contact-faqs-list">
            {faqs.map((faq, index) => {
              const isActive = activeFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className={`contact-faq-item ${isActive ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="contact-faq-question-row">
                    <h4 className="contact-faq-question">{faq.question}</h4>
                    <span className="contact-faq-arrow-icon">&#9662;</span>
                  </div>
                  <div className="contact-faq-answer-wrapper">
                    <p className="contact-faq-answer">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
