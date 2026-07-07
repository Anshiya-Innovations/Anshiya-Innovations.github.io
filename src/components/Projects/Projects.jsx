import React from 'react';
import './Projects.css';

// Import image assets for project cards
import projectImg1 from '../../assets/Border (2).png'; // large dashboard
import projectImg2 from '../../assets/project-2.png'; // laptop and tablet mockup
import projectImg3 from '../../assets/project-3.png'; // typing on keyboard

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Header Row */}
        <div className="projects-header-row">
          <div className="projects-header-left">
            <span className="section-subtitle-left">OUR PORTFOLIO</span>
            <h2 className="projects-title">Explore Our Latest Projects</h2>
          </div>
          <button className="btn-primary view-all-btn">View More Projects</button>
        </div>

        {/* Projects Grid Layout */}
        <div className="projects-grid">
          {/* Left Large Card with Info Overlay */}
          <div 
            className="project-card-v2 project-large"
            style={{ backgroundImage: `url('${projectImg1}')` }}
          >
            <div className="project-card-overlay">
              <div className="project-card-info">
                <span className="project-category-badge">CLOUD ENTERPRISE</span>
                <h3 className="project-title-text">Enterprise SAP Dashboard</h3>
                <p className="project-description-text">
                  A comprehensive analytics dashboard for enterprise management integrating SAP BTP services and real-time cloud data.
                </p>
                <a href="#contact" className="project-case-link">
                  View Case Study <span className="arrow">&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Two plain stacked image cards */}
          <div className="projects-right-column">
            <div 
              className="project-card-v2 project-small"
              style={{ backgroundImage: `url('${projectImg2}')` }}
            ></div>
            <div 
              className="project-card-v2 project-small"
              style={{ backgroundImage: `url('${projectImg3}')` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
