import React from 'react';
import aboutMeeting from '../../assets/about-meeting.png';
import aboutServers from '../../assets/about-servers.png';
import aboutPlayCard from '../../assets/about-play-card.png';
import iconDelivered from '../../assets/about-icon-delivered.png';
import iconHappy from '../../assets/about-icon-happy.png';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container grid-2 about-container">
        {/* Left Side: Overlapping Mockups with Play Button card */}
        <div className="about-image-wrapper">
          <div className="about-overlapping-container">
            <img 
              src={aboutMeeting} 
              alt="Client Team Collaboration" 
              className="about-img-meeting"
            />
            <img 
              src={aboutServers} 
              alt="Server Rooms Infrastructure" 
              className="about-img-servers"
            />
            <img 
              src={aboutPlayCard} 
              alt="Play Video Button Card" 
              className="about-img-play-card"
            />
          </div>
        </div>

        {/* Right Side: Text details and Stats cards */}
        <div className="about-content">
          <span className="section-subtitle-left">About Us</span>
          <h2 className="about-title">Building Innovative Digital Solutions for Modern Businesses</h2>
          <p className="about-description">
            At Anshiya Innovations, we deliver secure, scalable, and future-ready IT solutions that drive growth and efficiency. Our expertise spans custom Software Development, SAP BTP, Application Security, Audit and Compliance, Cyber Security, Cloud Services, and Agentic AI Solutions.
          </p>

          <div className="about-stats-row">
            {/* Stat 1: Projects Delivered */}
            <div className="about-stat-card">
              <div className="about-stat-icon-box">
                <img src={iconDelivered} alt="Checkmark icon" className="about-stat-icon-img" />
              </div>
              <div className="about-stat-info">
                <span className="about-stat-number">50+</span>
                <span className="about-stat-label">Projects Delivered</span>
              </div>
            </div>

            {/* Stat 2: Happy Clients */}
            <div className="about-stat-card">
              <div className="about-stat-icon-box">
                <img src={iconHappy} alt="Smiley face icon" className="about-stat-icon-img" />
              </div>
              <div className="about-stat-info">
                <span className="about-stat-number">30+</span>
                <span className="about-stat-label">Happy Clients</span>
              </div>
            </div>
          </div>

          <div className="about-action">
            <button className="about-cta-btn">More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
