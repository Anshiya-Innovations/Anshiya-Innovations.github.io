import React from 'react';
import { useNavigate } from 'react-router-dom';
import aboutMeeting from '../../assets/about-meeting.png';
import aboutMeetingMobile from '../../assets/about-meeting-mobile.webp';
import aboutServers from '../../assets/about-servers.png';
import aboutServersMobile from '../../assets/about-servers-mobile.webp';
import aboutPlayCard from '../../assets/about-play-card.png';
import aboutPlayCardMobile from '../../assets/about-play-card-mobile.webp';
import iconDelivered from '../../assets/about-icon-delivered.png';
import iconHappy from '../../assets/about-icon-happy.png';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="about-section">
      <div className="container grid-2 about-container">
        {/* Left Side: Overlapping Mockups with Play Button card */}
        <div className="about-image-wrapper">
          <div className="about-overlapping-container">
            <picture>
              <source media="(max-width: 768px)" srcSet={aboutMeetingMobile} type="image/webp" />
              <img 
                src={aboutMeeting} 
                alt="Client Team Collaboration" 
                width="1024"
                height="682"
                className="about-img-meeting"
              />
            </picture>
            <picture>
              <source media="(max-width: 768px)" srcSet={aboutServersMobile} type="image/webp" />
              <img 
                src={aboutServers} 
                alt="Server Rooms Infrastructure" 
                width="1024"
                height="682"
                className="about-img-servers"
              />
            </picture>
            <picture>
              <source media="(max-width: 768px)" srcSet={aboutPlayCardMobile} type="image/webp" />
              <img 
                src={aboutPlayCard} 
                alt="Play Video Button Card" 
                width="400"
                height="267"
                className="about-img-play-card"
              />
            </picture>
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
                <img src={iconDelivered} alt="Checkmark icon" width="45" height="46" className="about-stat-icon-img" />
              </div>
              <div className="about-stat-info">
                <span className="about-stat-number">50+</span>
                <span className="about-stat-label">Projects Delivered</span>
              </div>
            </div>

            {/* Stat 2: Happy Clients */}
            <div className="about-stat-card">
              <div className="about-stat-icon-box">
                <img src={iconHappy} alt="Smiley face icon" width="44" height="50" className="about-stat-icon-img" />
              </div>
              <div className="about-stat-info">
                <span className="about-stat-number">30+</span>
                <span className="about-stat-label">Happy Clients</span>
              </div>
            </div>
          </div>

          <div className="about-action">
            <button onClick={() => { navigate('/about-us'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="about-cta-btn">More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
