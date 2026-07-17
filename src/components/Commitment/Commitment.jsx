import React from 'react';
import { useNavigate } from 'react-router-dom';
import commitmentTeam from '../../assets/uploaded-commitment-team.png';
import commitmentTeamMobile from '../../assets/uploaded-commitment-team-mobile.webp';
import commitmentCap from '../../assets/uploaded-commitment-cap.png';
import commitmentCapMobile from '../../assets/uploaded-commitment-cap-mobile.webp';
import commitmentFemale from '../../assets/uploaded-commitment-female.png';
import commitmentFemaleMobile from '../../assets/uploaded-commitment-female-mobile.webp';
import './Commitment.css';

const Commitment = () => {
  const navigate = useNavigate();

  return (
    <section id="commitment" className="commitment-section">
      <div className="container">
        {/* Top Hero Layout */}
        <div className="grid-2 commitment-hero-container">
          <div className="commitment-hero-left">
            <span className="commitment-badge">OUR COMMITMENT</span>
            <h2 className="commitment-title">
              Investing in People,<br />
              Not Just Projects
            </h2>
            <p className="commitment-description">
              At Anshiya Innovations, growth isn't just about our technology — it's about the people behind it.
            </p>
          </div>
          <div className="commitment-hero-right">
            <div className="commitment-image-wrapper">
              <picture>
                <source media="(max-width: 768px)" srcSet={commitmentTeamMobile} type="image/webp" />
                <img 
                  src={commitmentTeam} 
                  alt="Four team members collaborating on a laptop" 
                  width="1024"
                  height="534"
                  className="commitment-team-img"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* Bottom Two Cards Layout */}
        <div className="grid-2 commitment-cards-container">
          {/* Card 1: Internships */}
          <div className="commitment-card">
            <div className="commitment-icon-box">
              <picture>
                <source media="(max-width: 768px)" srcSet={commitmentCapMobile} type="image/webp" />
                <img src={commitmentCap} alt="Graduation Cap Icon" width="80" height="80" className="commitment-card-icon-img" />
              </picture>
            </div>
            <h3 className="commitment-card-title">Internships for Students</h3>
            <p className="commitment-card-desc">
              We invest in the next generation of technologists through hands-on, real-world experience, not just theory. Our internship program puts students directly on live AI, SAP, and software projects, working alongside our engineers from day one.
            </p>
            <button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSehSBEFprcl928aRVymWhfSEk0Wi2UYQDpBCk-X_NCrei-5Cg/viewform?usp=publish-editor', '_blank', 'noopener,noreferrer')} className="commitment-card-btn">
              Apply for an Internship <span className="arrow-symbol">&rarr;</span>
            </button>
          </div>

          {/* Card 2: Women in Tech */}
          <div className="commitment-card">
            <div className="commitment-icon-box">
              <picture>
                <source media="(max-width: 768px)" srcSet={commitmentFemaleMobile} type="image/webp" />
                <img src={commitmentFemale} alt="Female Symbol Icon" width="80" height="80" className="commitment-card-icon-img" />
              </picture>
            </div>
            <h3 className="commitment-card-title">Women in Tech</h3>
            <p className="commitment-card-desc">
              We champion representation and opportunity for women across engineering, AI, and consulting roles, building a more inclusive industry from within. From mentorship to leadership pathways, we're committed to closing the gap, one hire at a time.
            </p>
            <button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf98J7DOQ-mRcDJG5Jt8wKVbBErANW53l8dlrwvsojAOUC0ew/viewform?usp=publish-editor', '_blank', 'noopener,noreferrer')} className="commitment-card-btn">
              Join Our Women in Tech Network <span className="arrow-symbol">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
