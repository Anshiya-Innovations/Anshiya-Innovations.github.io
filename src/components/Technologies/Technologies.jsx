import React from 'react';
import './Technologies.css';

// Import technology logo assets
import techSap from '../../assets/tech/tech-sap.png';
import techRobot from '../../assets/tech/tech-robot.svg';
import techCloud from '../../assets/tech/tech-cloud.png';
import techAzure from '../../assets/tech/tech-azure.png';
import techPython from '../../assets/tech/tech-python.png';
import techJava from '../../assets/tech/tech-java.png';
import techReact from '../../assets/tech/tech-react.png';
import techAws from '../../assets/tech/tech-aws.png';

const Technologies = () => {
  const techStack = [
    { name: "SAP", logo: techSap, width: 74, height: 71 },
    { name: "AI / ML", logo: techRobot, width: 64, height: 64 },
    { name: "CLOUD", logo: techCloud, width: 44, height: 36 },
    { name: "MICROSOFT AZURE", logo: techAzure, width: 42, height: 42 },
    { name: "PYTHON", logo: techPython, width: 36, height: 36 },
    { name: "JAVA", logo: techJava, width: 28, height: 37 },
    { name: "REACT", logo: techReact, width: 42, height: 38 },
    { name: "AWS", logo: techAws, width: 48, height: 29 }
  ];

  return (
    <section className="tech-section">
      <div className="container">
        <h3 className="tech-section-subtitle">EXPERTISE IN LEADING TECHNOLOGIES</h3>
        
        <div className="tech-grid-row">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-logo-item">
              <div className="tech-logo-wrapper">
                <img 
                  src={tech.logo} 
                  alt={`${tech.name} Logo`} 
                  width={tech.width}
                  height={tech.height}
                  className={`tech-logo-img ${tech.name === "AI / ML" ? "tech-logo-robot" : ""}`} 
                />
              </div>
              <span className="tech-logo-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
