import React from 'react';
import './Services.css';

// Import local cropped service icons
import icon1 from '../../assets/service-icon-it.png';
import icon2 from '../../assets/service-icon-cyber.png';
import icon3 from '../../assets/service-icon-backup.png';

const Services = () => {
  const servicesList = [
    {
      icon: icon3,
      title: "IT Consultancy",
      description: "Professionally visualize resources via a visual team driven informatics platforms rather than professionals."
    },
    {
      icon: icon2,
      title: "Cyber Security",
      description: "Protecting your digital assets with advanced threat detection and mitigation strategies for enterprise safety."
    },
    {
      icon: icon1,
      title: "Backup & Recovery",
      description: "Ensuring business continuity with robust data redundancy systems and rapid disaster recovery protocols."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="grid-3 services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                <img src={service.icon} alt={service.title} className="service-icon-img" />
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-text">{service.description}</p>
              <a href="#contact" className="service-card-link">
                Read More <span className="arrow-icon">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
