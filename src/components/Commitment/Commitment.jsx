import React from 'react';
import { useNavigate } from 'react-router-dom';
import commitmentTeam from '../../assets/uploaded-commitment-team.png';
import commitmentCap from '../../assets/uploaded-commitment-cap.png';
import commitmentFemale from '../../assets/uploaded-commitment-female.png';
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
              <img 
                src={commitmentTeam} 
                alt="Four team members collaborating on a laptop" 
                className="commitment-team-img"
              />
            </div>
          </div>
        </div>

        {/* Bottom Two Cards Layout */}
        <div className="grid-2 commitment-cards-container">
          {/* Card 1: Internships */}
          <div className="commitment-card">
            <div className="commitment-icon-box">
              <img src={commitmentCap} alt="Graduation Cap Icon" className="commitment-card-icon-img" />
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
              <img src={commitmentFemale} alt="Female Symbol Icon" className="commitment-card-icon-img" />
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
