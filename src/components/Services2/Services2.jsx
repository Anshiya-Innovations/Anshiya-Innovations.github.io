import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services2.css';

// Import icons
import iconMonitor from '../../assets/services2/icon-monitor.png';
import iconLock from '../../assets/services2/icon-lock.png';
import iconShieldDoc from '../../assets/services2/icon-shield-doc.png';
import iconGearBriefcase from '../../assets/services2/icon-gear-briefcase.png';
import iconCloud from '../../assets/services2/icon-cloud.png';
import iconPeople from '../../assets/services2/icon-people.png';
import iconCap from '../../assets/services2/icon-cap.png';
import iconPhone from '../../assets/services2/icon-phone.png';

const Services2 = () => {
  const navigate = useNavigate();

  const allServices = [
    {
      type: "image",
      icon: iconMonitor,
      title: <>AI Integration &<br />Automation</>,
      description: "Integrate AI to automate workflows and enhance decision-making."
    },
    {
      type: "text",
      iconText: "SAP",
      title: <>SAP BTP</>,
      description: "Build, extend, and integrate SAP solutions on the Business Technology Platform."
    },
    {
      type: "image",
      icon: iconLock,
      title: <>Cyber Security</>,
      description: "Protect your data, systems, and users with advanced security solutions."
    },
    {
      type: "image",
      icon: iconShieldDoc,
      title: <>Security<br />Complaints & Audit</>,
      description: "Ensure compliance and mitigate risk with our audit services."
    },
    {
      type: "image",
      icon: iconGearBriefcase,
      title: <>Business Automations</>,
      description: "Automate repetitive tasks and streamline business operations."
    },
    {
      type: "image",
      icon: iconCloud,
      title: <>Cloud Solutions</>,
      description: "Migrate, manage, and scale with secure and reliable cloud services."
    },
    {
      type: "image",
      icon: iconCap,
      title: <>Employee Training Program</>,
      description: "Upskill your workforce with specialized job-oriented training."
    },
    {
      type: "image",
      icon: iconPeople,
      title: <>Internship for Students</>,
      description: "Real-world exposure and mentorship for future tech professionals."
    },
    {
      type: "image",
      icon: iconPhone,
      title: <>Mobile App Development</>,
      description: "Build user-friendly and scalable mobile apps for iOS and Android."
    }
  ];

  return (
    <section className="services2-section">
      <div className="container">
        <div className="services2-header">
          <span className="services2-subtitle">OUR SERVICES</span>
          <h2 className="services2-title">Our Comprehensive IT Services</h2>
        </div>
      </div>

      {/* Infinite slider container */}
      <div className="services2-slider-container">
        <div className="services2-slider-track">
          {/* Double list mapping for seamless infinite loop */}
          {[...allServices, ...allServices].map((service, index) => {
            const isSapBtp = service.iconText === "SAP";
            return (
              <div 
                key={index} 
                className="service2-card"
                style={{ cursor: isSapBtp ? 'pointer' : 'default' }}
                onClick={() => {
                  if (isSapBtp) {
                    navigate('/sap-service');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <div className="service2-icon-wrapper">
                  {service.type === "image" ? (
                    <img src={service.icon} alt="Service Icon" className="service2-icon-img" />
                  ) : (
                    <span className="service2-icon-text">{service.iconText}</span>
                  )}
                </div>
                <h3 className="service2-card-title">{service.title}</h3>
                <p className="service2-card-description">{service.description}</p>
                {isSapBtp ? (
                  <span 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/sap-service');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="service2-card-link"
                    style={{ cursor: 'pointer' }}
                  >
                    See More Details &gt;
                  </span>
                ) : (
                  <a href="#contact" className="service2-card-link">
                    See More Details &gt;
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services2;
