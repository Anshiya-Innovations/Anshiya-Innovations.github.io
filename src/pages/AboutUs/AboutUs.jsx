import React, { useEffect } from 'react';
import aboutMeeting from '../../assets/uploaded-about-meeting.png';
import CTA from '../../components/CTA/CTA';
import aboutMissionIcon from '../../assets/about-mission-icon.png';
import aboutVisionIcon from '../../assets/about-vision-icon.png';

// Import core services icons
import iconAi from '../../assets/service-icon-ai.png';
import iconSap from '../../assets/uploaded-sap-icon.png';
import iconIt from '../../assets/uploaded-icon-line-chart.png';
import iconCyber from '../../assets/service-icon-cyber.png';

// Import empower section icons
import empowerIcon1 from '../../assets/about/icon-1.png';
import empowerIcon2 from '../../assets/about/icon-2.png';
import empowerIcon3 from '../../assets/about/icon-3.png';
import empowerIcon4 from '../../assets/about/icon-4.png';
import empowerIcon5 from '../../assets/about/icon-5.png';

// Import industries section icons (folder1)
import indIcon1 from '../../assets/about/folder1/Container (7).png';
import indIcon2 from '../../assets/about/folder1/Container (8).png';
import indIcon3 from '../../assets/about/folder1/Container (9).png';
import indIcon4 from '../../assets/about/folder1/Container (10).png';
import indIcon5 from '../../assets/about/folder1/Container (11).png';
import indIcon6 from '../../assets/about/folder1/Container (12).png';
import indIcon7 from '../../assets/about/folder1/Icon (1).png';
import indIcon8 from '../../assets/about/folder1/Icon (2).png';
import indIcon9 from '../../assets/about/folder1/Icon (3).png';

// Import why choose us section icons (folder2)
import whyIcon1 from '../../assets/about/folder2/Icon (1).png';
import whyIcon2 from '../../assets/about/folder2/Icon (2).png';
import whyIcon3 from '../../assets/about/folder2/Icon (3).png';
import whyIcon4 from '../../assets/about/folder2/Icon (4).png';
import whyIcon5 from '../../assets/about/folder2/Icon (5).png';
import whyIcon6 from '../../assets/about/folder2/Icon (6).png';

import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreServices = [
    {
      icon: iconAi,
      title: "AI Integration",
      description: "Intelligent, purpose-built solutions designed for complex environments."
    },
    {
      icon: iconSap,
      title: "SAP Solutions",
      description: "Seamless implementation, integration, and optimization of enterprise ecosystems."
    },
    {
      icon: iconIt,
      title: "IT Consulting",
      description: "Strategic guidance to modernize infrastructures and scale operations globally."
    },
    {
      icon: iconCyber,
      title: "Cybersecurity",
      description: "Protecting systems, data, and organizational reputation with zero-trust models."
    }
  ];

  const industriesList = [
    { icon: indIcon1, name: "Technology" },
    { icon: indIcon2, name: "Manufacturing" },
    { icon: indIcon3, name: "Finance & Banking" },
    { icon: indIcon4, name: "Healthcare" },
    { icon: indIcon5, name: "Retail" },
    { icon: indIcon6, name: "Logistics" },
    { icon: indIcon7, name: "Education" },
    { icon: indIcon8, name: "Government" },
    { icon: indIcon9, name: "Energy & Utilities" }
  ];

  const whyChooseUsList = [
    {
      icon: whyIcon1,
      title: "One Partner, Every Capability",
      description: "AI, SAP, IT, Cyber, and Automation—all under one roof for cohesive strategy."
    },
    {
      icon: whyIcon2,
      title: "Speed Without Shortcuts",
      description: "We blend startup-like agility with enterprise-grade discipline and quality controls."
    },
    {
      icon: whyIcon3,
      title: "Security Isn't an Add-On",
      description: "Protecting your digital assets is foundational, integrated into every line of code."
    },
    {
      icon: whyIcon4,
      title: "Industry-Agnostic Expertise",
      description: "Cross-sector knowledge allows us to bring innovative solutions from one field to another."
    },
    {
      icon: whyIcon5,
      title: "People-First Innovation",
      description: "We invest heavily in talent, ensuring our experts remain at the bleeding edge of tech."
    },
    {
      icon: whyIcon6,
      title: "True Partnership",
      description: "We don't just deliver projects: we align with your business goals for long-term success."
    }
  ];

  const comparisons = [
    {
      typical: "Narrow focus on single technologies",
      anshiya: "Full-stack: AI, SAP, consulting, cybersecurity, automation"
    },
    {
      typical: "Security as an optional add-on",
      anshiya: "Security & compliance built into every solution"
    },
    {
      typical: "One-size-fits-all, rigid frameworks",
      anshiya: "Solutions tailored to any industry or scale"
    },
    {
      typical: "Transactional vendor relationship",
      anshiya: "True partnership and co-building"
    },
    {
      typical: "Talent is \"someone else's problem\"",
      anshiya: "Actively invests in talent — internships, training, Women in Tech"
    }
  ];

  return (
    <div className="about-us-page">
      {/* 1. About Us Hero Section */}
      <section className="about-page-hero">
        <div className="container grid-2 about-page-container">
          {/* Left Column: Mission, Title & Quote */}
          <div className="about-page-left">
            <span className="about-badge">OUR JOURNEY</span>
            <h1 className="about-page-title">
              Building and Protecting<br />
              the Future of Technology
            </h1>
            <p className="about-page-description">
              Anshiya Innovations brings together deep expertise in AI, SAP, and enterprise software to deliver solutions that move as fast as the organizations we serve.
            </p>
            <div className="about-quote-box">
              <p className="about-quote-text">
                "We partner with startups, enterprises, and institutions across every sector to solve complex technology challenges with speed, precision, security, and innovation."
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic board room picture */}
          <div className="about-page-right">
            <div className="about-image-card-wrapper">
              <img 
                src={aboutMeeting} 
                alt="Anshiya Innovations Executive Team Boardroom Meeting" 
                className="about-page-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1.5. Mission & Vision Section */}
      <section className="about-mission-vision-section">
        <div className="container grid-2 about-mv-container">
          <div className="about-mv-card">
            <div className="about-mv-icon-box">
              <img src={aboutVisionIcon} alt="Our Mission Icon" className="about-mv-icon" />
            </div>
            <h3 className="about-mv-title">Our Mission</h3>
            <p className="about-mv-text">
              To catalyze business growth by delivering innovative, scalable, and secure IT solutions. We bridge the gap between complex technical challenges and seamless operational performance for every client we serve.
            </p>
          </div>
          <div className="about-mv-card">
            <div className="about-mv-icon-box">
              <img src={aboutMissionIcon } alt="Our Vision Icon" className="about-mv-icon" />
            </div>
            <h3 className="about-mv-title">Our Vision</h3>
            <p className="about-mv-text">
              To be the global gold standard in IT consulting, recognized for transforming legacy industries into agile, digital-first powerhouses through human-centric innovation and technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Services Section */}
      <section className="about-core-services-section">
        <div className="container">
          <div className="about-core-header">
            <h2 className="about-core-title">Core Services</h2>
            <p className="about-core-subtitle">
              Providing specialized technological capabilities to drive transformation.
            </p>
          </div>

          <div className="grid-4 about-core-cards-container">
            {coreServices.map((service, index) => (
              <div key={index} className="about-core-card">
                <div className="about-core-icon-box">
                  <img src={service.icon} alt={service.title} className="about-core-icon-img" />
                </div>
                <h3 className="about-core-card-title">{service.title}</h3>
                <p className="about-core-card-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Empowering Every Organization Section */}
      <section className="about-empower-section">
        <div className="container">
          <div className="about-empower-header">
            <h2 className="about-empower-title">Empowering Every Organization</h2>
            <p className="about-empower-subtitle">
              Tailored technology for every stage of growth.
            </p>
          </div>

          {/* Top Row: 2 wider cards */}
          <div className="empower-row-top">
            {/* Card 1: Startups */}
            <div className="empower-card start-card">
              <div className="empower-icon-box">
                <img src={empowerIcon4} alt="Startups & Entrepreneurs Icon" className="empower-icon-img" />
              </div>
              <h3 className="empower-card-title">Startups & Entrepreneurs</h3>
              <p className="empower-card-desc">
                Agile AI solutions that help disruptors move from MVP (Minimum Viable Product) to scale with technical superiority and speed.
              </p>
            </div>

            {/* Card 2: Enterprises (Blue Card) */}
            <div className="empower-card corp-card blue-card">
              <div className="empower-icon-box">
                <img src={empowerIcon5} alt="Enterprises & Corporates Icon" className="empower-icon-img white-icon" />
              </div>
              <h3 className="empower-card-title">Enterprises & Corporates</h3>
              <p className="empower-card-desc">
                Full-scale SAP implementations, global consulting, and enterprise-grade cybersecurity for established giants.
              </p>
            </div>
          </div>

          {/* Bottom Row: 3 smaller cards */}
          <div className="empower-row-bottom">
            {/* Card 3: Government */}
            <div className="empower-card gov-card">
              <div className="empower-icon-box">
                <img src={empowerIcon1} alt="Government Icon" className="empower-icon-img" />
              </div>
              <h3 className="empower-card-title">Government</h3>
              <p className="empower-card-desc">
                Dependable, secure, and compliant partnerships for public institutions.
              </p>
            </div>

            {/* Card 4: MSMEs */}
            <div className="empower-card msme-card">
              <div className="empower-icon-box">
                <img src={empowerIcon2} alt="MSMEs Icon" className="empower-icon-img" />
              </div>
              <h3 className="empower-card-title">MSMEs</h3>
              <p className="empower-card-desc">
                Accessible innovation that brings high-end tech to growing businesses.
              </p>
            </div>

            {/* Card 5: Dev Teams */}
            <div className="empower-card dev-card">
              <div className="empower-icon-box">
                <img src={empowerIcon3} alt="Dev Teams Icon" className="empower-icon-img" />
              </div>
              <h3 className="empower-card-title">Dev Teams</h3>
              <p className="empower-card-desc">
                Robust products and architectures built for developers to extend.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 5. Why Choose Us Section */}
      <section className="about-why-choose-section">
        <div className="container">
          <div className="about-why-choose-header">
            <h2 className="why-choose-title">Why Choose Us</h2>
          </div>

          <div className="grid-3 why-choose-grid">
            {whyChooseUsList.map((item, index) => (
              <div key={index} className="why-choose-item">
                <div className="why-choose-icon-box">
                  <img src={item.icon} alt={item.title} className="why-choose-icon-img" />
                </div>
                <div className="why-choose-content">
                  <h3 className="why-choose-item-title">{item.title}</h3>
                  <p className="why-choose-item-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Difference Section */}
      <section className="about-difference-section">
        <div className="container">
          <div className="about-difference-header">
            <h2 className="difference-title">The Difference</h2>
          </div>

          <div className="difference-table-card">
            {/* Header Row */}
            <div className="difference-table-row header-row">
              <div className="difference-table-cell left-cell">
                <h3 className="diff-header-text">Typical IT Vendors</h3>
              </div>
              <div className="difference-table-cell right-cell">
                <h3 className="diff-header-text highlight-text">Anshiya Innovations</h3>
              </div>
            </div>

            {/* Content Rows */}
            {comparisons.map((row, index) => (
              <div key={index} className="difference-table-row">
                <div className="difference-table-cell left-cell">
                  <p className="diff-row-text">{row.typical}</p>
                </div>
                <div className="difference-table-cell right-cell">
                  <div className="diff-anshiya-content">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0042c8" width="20" height="20" className="diff-check-icon">
                      <circle cx="12" cy="12" r="10" fill="#0042c8"/>
                      <path d="m9 12 2 2 4-4" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <p className="diff-row-text highlight-text">{row.anshiya}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Section */}
      <CTA />
    </div>
  );
};

export default AboutUs;
