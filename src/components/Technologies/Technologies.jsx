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
    { name: "SAP", logo: techSap },
    { name: "AI / ML", logo: techRobot },
    { name: "CLOUD", logo: techCloud },
    { name: "MICROSOFT AZURE", logo: techAzure },
    { name: "PYTHON", logo: techPython },
    { name: "JAVA", logo: techJava },
    { name: "REACT", logo: techReact },
    { name: "AWS", logo: techAws }
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
