import React, { useEffect } from 'react';
import CTA from '../../components/CTA/CTA';

// Import career icons
import shieldIcon from '../../assets/career/Vector (4).png';
import codeIcon from '../../assets/career/icons Q2.png';
import javaIcon from '../../assets/career/Group.png';
import briefcaseIcon from '../../assets/career/Vector (3).png';
import userIcon from '../../assets/career/Group (1).png';
import aiInternIcon from '../../assets/career/ai-intern-icon.png';

import './Career.css';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = [
    {
      id: 1,
      title: "SAP Security Analyst",
      location: "Chennai, Tamil Nadu, India",
      description: "Responsible for analyzing SAP security requirements, role design, access control, and ensuring compliance with security standards.",
      openings: "3 Openings",
      experience: "2 Years Experience",
      icon: briefcaseIcon
    },
    {
      id: 2,
      title: "SAP BTP Developer",
      location: "Chennai, Tamil Nadu, India",
      description: "Design, develop, test, and deploy SAP applications and enhancements to meet business requirements and drive efficiency.",
      openings: "2 Openings",
      experience: "2 Years Experience",
      icon: codeIcon
    },
    {
      id: 3,
      title: "AI Automation Intern / Co-Ops",
      location: "Chennai, Tamil Nadu, India",
      description: "Assist in developing AI-powered automation solutions, integrating intelligent workflows, and optimizing business processes using modern AI technologies.",
      openings: "5 Openings",
      experience: "0 Years Experience",
      icon: aiInternIcon
    },
    {
      id: 4,
      title: "SAP BTP Developer Intern / Co-Ops",
      location: "Chennai, Tamil Nadu, India",
      description: "Design, develop, test, and deploy SAP applications and enhancements to meet business requirements and drive efficiency.",
      openings: "5 Openings",
      experience: "0 Years Experience",
      icon: codeIcon
    },
    {
      id: 5,
      title: "SAP Security Analyst Intern / Co-Ops",
      location: "Chennai, Tamil Nadu, India",
      description: "Responsible for analyzing SAP security requirements, role design, access control, and ensuring compliance with security standards.",
      openings: "5 Openings",
      experience: "0 Years Experience",
      icon: briefcaseIcon
    }
  ];

  return (
    <div className="career-page">
      {/* Careers Header */}
      <section className="career-header-section">
        <div className="container">
          <div className="career-badge-container">
            <span className="career-dot"></span>
            <span className="career-badge-text">CAREERS</span>
          </div>
          <h1 className="career-page-title">Join Our Team</h1>
          <p className="career-page-subtitle">
            We are always looking for passionate, talented, and motivated individuals to join us in building innovative solutions and creating meaningful impact.
          </p>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="career-openings-section">
        <div className="container">
          <div className="career-section-header">
            <h2 className="career-section-title">Current Openings</h2>
            <p className="career-section-subtitle">Explore exciting career opportunities and grow with us.</p>
          </div>

          <div className="career-jobs-list">
            {jobs.map((job) => (
              <div key={job.id} className="career-job-card">
                {/* Left side: Circular Icon */}
                <div className="career-job-icon-container">
                  <div className="career-job-icon-circle">
                    <img src={job.icon} alt={job.title} className="career-job-icon-img" />
                  </div>
                </div>

                {/* Middle side: Details */}
                <div className="career-job-details">
                  <h3 className="career-job-title">
                    {job.title.includes(' Intern / Co-Ops') ? (
                      <>
                        {job.title.split(' Intern / Co-Ops')[0]}
                        <br />
                        <span className="career-job-title-sub">Intern / Co-Ops</span>
                      </>
                    ) : (
                      job.title
                    )}
                  </h3>
                  <div className="career-job-location">
                    <svg className="location-pin-svg" viewBox="0 0 24 24" fill="none" stroke="#0042c8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="location-text">{job.location}</span>
                  </div>
                  <p className="career-job-desc">{job.description}</p>
                </div>

                {/* Vertical Divider */}
                <div className="career-job-divider"></div>

                {/* Right side: Meta Info & Action */}
                <div className="career-job-meta-action">
                  <div className="career-job-meta-info">
                    <div className="meta-item">
                      <img src={shieldIcon} alt="Briefcase Icon" className="meta-icon-img" />
                      <span className="meta-text">{job.openings}</span>
                    </div>
                    <div className="meta-item">
                      <img src={userIcon} alt="User Icon" className="meta-icon-img" />
                      <span className="meta-text">{job.experience}</span>
                    </div>
                  </div>
                  <button className="btn-apply-now" onClick={() => window.open('https://calendly.com/anshiyainnovations/30min', '_blank', 'noopener,noreferrer')}>
                    Apply Now
                    <svg className="apply-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CTA />
    </div>
  );
};

export default Career;
