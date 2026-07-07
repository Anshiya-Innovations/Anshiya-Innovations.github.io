import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import './Navbar.css';

// Import icons for the dropdown mega menu matching Services2
import iconMonitor from '../../assets/services2/icon-monitor.png';
import iconLock from '../../assets/services2/icon-lock.png';
import iconShieldDoc from '../../assets/services2/icon-shield-doc.png';
import iconGearBriefcase from '../../assets/services2/icon-gear-briefcase.png';
import iconCloud from '../../assets/services2/icon-cloud.png';
import iconPeople from '../../assets/services2/icon-people.png';
import iconCap from '../../assets/services2/icon-cap.png';
import iconPhone from '../../assets/services2/icon-phone.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  const dropdownServices = [
    {
      title: "AI Integration & Automation",
      description: "Integrate AI to automate workflows and enhance decision-making.",
      subItems: []
    },
    {
      title: "SAP BTP",
      description: "Build, extend, and integrate SAP solutions on the Business Technology Platform.",
      subItems: [
        "Code Assessment",
        "Data Assessment",
        "Integration Assessment",
        "Analytics Assessment",
        "Planning  Assessment",
        "S/4HANA Migration Services",
        "Business Data Cloud",
        "PIPO to Integration Suite",
        "Clean Core",
        "SAP S/4HANA",
        "SAP Analytics Cloud",
        "Line of Business Enhancements on SAP BTP",
        "Application  Managed Services",
        "Infrastructure Services"
      ]
    },
    {
      title: "Cyber Security",
      description: "Protect your data, systems, and users with advanced security solutions.",
      subItems: [
        "AI Security",
        "Exposure Management",
        "Unified Vulnerability Management",
        "Attack Surface Management (ASM)",
        "Cloud Security Posture Management (CSPM)",
        "Data Security Posture Management (DSPM)",
        "Infrastructure Entitlements Management (CIEM)",
        "Wiz Cloud Compliance",
        "Infrastructure-as-Code Scanning",
        "Supply Chain Security (SCA and SBOM)",
        "WizOS: Secured Container Images",
        "Application Security Posture Management (ASPM)",
        "Static Application Security Testing (SAST)",
        "Workload Protection Platform (CWPP)",
        "Container & Kubernetes security",
        "Cloud Detection & Response (CDR)",
        "Cloud Cost",
        "Wiz Sensor: Runtime Protection"
      ]
    },
    {
      title: "Security Compliance & Audit",
      description: "Ensure compliance and mitigate risk with our audit services.",
      subItems: [
        "SOC 2",
        "ISO 27001",
        "HIPAA",
        "GDPR",
        "FedRAMP",
        "CMMC",
        "ISO 42001",
        "PCI DSS",
        "HITRUST",
        "NIST AI RMF",
        "DORA",
        "Custom Frameworks",
        "Audit Services"
      ]
    },
    {
      title: "Business Automations",
      description: "Automate repetitive tasks and streamline business operations.",
      subItems: []
    },
    {
      title: "Cloud Solutions",
      description: "Migrate, manage, and scale with secure and reliable cloud services.",
      subItems: []
    },
    {
      title: "Employee Training Program",
      description: "Upskill your workforce with specialized job-oriented training.",
      subItems: []
    },
    {
      title: "Internship for Students",
      description: "Real-world exposure and mentorship for future tech professionals.",
      subItems: []
    },
    {
      title: "Mobile App Development",
      description: "Build user-friendly and scalable mobile apps for iOS and Android.",
      subItems: []
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId, itemName) => {
    setIsMenuOpen(false);
    setActiveItem(itemName);
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // height of navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container navbar-container">
        <Link 
          to="/" 
          className="navbar-logo" 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveItem('home');
          }}
        >
          <img src={logoImg} alt="Anshiya Innovations Logo" />
        </Link>
 
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
 
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button 
                onClick={() => handleNavClick('hero', 'home')} 
                className={`nav-link ${activeItem === 'home' ? 'active' : ''}`}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => handleNavClick('about', 'about')} 
                className={`nav-link ${activeItem === 'about' ? 'active' : ''}`}
              >
                About Us
              </button>
            </li>
            
            {/* Services Mega Menu Trigger Link */}
            <li className="nav-item has-dropdown">
              <button 
                onClick={() => handleNavClick('services', 'services')} 
                className={`nav-link ${activeItem === 'services' ? 'active' : ''}`}
              >
                Services
              </button>
              
              {/* Dropdown Mega Menu Panel */}
              <div className="navbar-mega-dropdown">
                <div className="mega-dropdown-split">
                  {/* Left Column: 9 Tab Headings */}
                  <div className="mega-dropdown-left">
                    {dropdownServices.map((service, index) => {
                      return (
                        <button
                          key={index}
                          className={`mega-tab-btn ${activeTab === index ? 'active' : ''}`}
                          onMouseEnter={() => setActiveTab(index)}
                          onClick={() => {
                            setIsMenuOpen(false);
                            if (service.title === "SAP BTP") {
                              navigate('/sap-service');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            } else {
                              handleNavClick('services', 'services');
                            }
                          }}
                        >
                          {service.title}
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Column: Active Tab Content Panel */}
                  <div className="mega-dropdown-right">
                    <div 
                      className="mega-right-header"
                      onClick={() => {
                        setIsMenuOpen(false);
                        if (dropdownServices[activeTab].title === "SAP BTP") {
                          navigate('/sap-service');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          handleNavClick('services', 'services');
                        }
                      }}
                    >
                      <h4 className="mega-right-title">
                        {dropdownServices[activeTab].title} <span className="arrow-link">&rarr;</span>
                      </h4>
                      <p className="mega-right-subtitle">
                        {dropdownServices[activeTab].description}
                      </p>
                    </div>

                    {/* Placeholder Grid for Sub-Items */}
                    <div className="mega-right-grid">
                      {dropdownServices[activeTab].subItems && dropdownServices[activeTab].subItems.length > 0 ? (
                        dropdownServices[activeTab].subItems.map((subItem, subIndex) => (
                          <div 
                            key={subIndex} 
                            className="mega-right-item"
                            onClick={() => {
                              setIsMenuOpen(false);
                              if (subItem === "Code Assessment") {
                                navigate('/solutions?type=code');
                              } else if (subItem === "DATA ASSESSMENT" || subItem === "Data Assessment") {
                                navigate('/solutions?type=data');
                              } else if (subItem === "Integration Assessment") {
                                navigate('/solutions?type=integration');
                              } else if (subItem === "Analytics Assessment") {
                                navigate('/solutions?type=analytics');
                              } else if (subItem === "Planning  Assessment") {
                                navigate('/solutions?type=planning');
                              } else if (subItem === "S/4HANA Migration Services") {
                                navigate('/solutions?type=s4hana');
                              } else if (subItem === "Business Data Cloud") {
                                navigate('/solutions?type=datacloud');
                              } else if (subItem === "PIPO to Integration Suite") {
                                navigate('/solutions?type=pipo');
                              } else if (subItem === "Clean Core") {
                                navigate('/solutions?type=cleancore_main');
                              } else if (subItem === "SAP S/4HANA") {
                                navigate('/solutions?type=s4hana_main');
                              } else if (subItem === "SAP Analytics Cloud") {
                                navigate('/solutions?type=sac_main');
                              } else if (subItem === "Line of Business Enhancements on SAP BTP") {
                                navigate('/solutions?type=lob_btp');
                              } else if (subItem === "Application  Managed Services") {
                                navigate('/solutions?type=ams');
                              } else if (subItem === "Infrastructure Services") {
                                navigate('/solutions?type=infrastructure');
                              
                              } else if (subItem === "AI Security") { navigate('/solutions?type=ai_security');
                              } else if (subItem === "Exposure Management") { navigate('/solutions?type=exposure_management');
                              } else if (subItem === "Unified Vulnerability Management") { navigate('/solutions?type=uvm');
                              } else if (subItem === "Attack Surface Management (ASM)") { navigate('/solutions?type=asm');
                              } else if (subItem === "Cloud Security Posture Management (CSPM)") { navigate('/solutions?type=cspm');
                              } else if (subItem === "Data Security Posture Management (DSPM)") { navigate('/solutions?type=dspm');
                              } else if (subItem === "Infrastructure Entitlements Management (CIEM)") { navigate('/solutions?type=ciem');
                              } else if (subItem === "Wiz Cloud Compliance") { navigate('/solutions?type=wiz_compliance');
                              } else if (subItem === "Infrastructure-as-Code Scanning") { navigate('/solutions?type=iac_scanning');
                              } else if (subItem === "Supply Chain Security (SCA and SBOM)") { navigate('/solutions?type=sca_sbom');
                              } else if (subItem === "WizOS: Secured Container Images") { navigate('/solutions?type=wiz_os');
                              } else if (subItem === "Application Security Posture Management (ASPM)") { navigate('/solutions?type=aspm');
                              } else if (subItem === "Static Application Security Testing (SAST)") { navigate('/solutions?type=sast');
                              } else if (subItem === "Workload Protection Platform (CWPP)") { navigate('/solutions?type=cwpp');
                              } else if (subItem === "Container & Kubernetes security") { navigate('/solutions?type=k8s_security');
                              } else if (subItem === "Cloud Detection & Response (CDR)") { navigate('/solutions?type=cdr');
                              } else if (subItem === "Cloud Cost") { navigate('/solutions?type=cloud_cost');
                              } else if (subItem === "Wiz Sensor: Runtime Protection") { navigate('/solutions?type=wiz_sensor');
                              } else if (subItem === "SOC 2") { navigate('/solutions?type=soc2');
                              } else if (subItem === "ISO 27001") { navigate('/solutions?type=iso27001');
                              } else if (subItem === "HIPAA") { navigate('/solutions?type=hipaa');
                              } else if (subItem === "GDPR") { navigate('/solutions?type=gdpr');
                              } else if (subItem === "FedRAMP") { navigate('/solutions?type=fedramp');
                              } else if (subItem === "CMMC") { navigate('/solutions?type=cmmc');
                              } else if (subItem === "ISO 42001") { navigate('/solutions?type=iso42001');
                              } else if (subItem === "PCI DSS") { navigate('/solutions?type=pci_dss');
                              } else if (subItem === "HITRUST") { navigate('/solutions?type=hitrust');
                              } else if (subItem === "NIST AI RMF") { navigate('/solutions?type=nist_ai_rmf');
                              } else if (subItem === "DORA") { navigate('/solutions?type=dora');
                              } else if (subItem === "Custom Frameworks") { navigate('/solutions?type=custom_frameworks');
                              } else if (subItem === "Audit Services") { navigate('/solutions?type=audit_services');
                              } else { navigate('/sap-service'); }
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                          >
                            <span className="mega-right-item-bullet">&rsaquo;</span>
                            <span className="mega-right-item-text">{subItem}</span>
                          </div>
                        ))
                      ) : (
                        <div className="mega-right-placeholder">
                          <div className="placeholder-pulse-line"></div>
                          <div className="placeholder-pulse-line second"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <button 
                onClick={() => handleNavClick('technologies', 'technologies')} 
                className={`nav-link ${activeItem === 'technologies' ? 'active' : ''}`}
              >
                Technologies
              </button>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveItem('contact');
                }}
                className={`nav-link ${activeItem === 'contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/solutions" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveItem('solutions');
                }}
                className={`nav-link ${activeItem === 'solutions' ? 'active' : ''}`}
              >
                Solutions
              </Link>
            </li>
          </ul>
          
          <div className="navbar-cta-mobile">
            <button onClick={() => handleNavClick('appointment', 'contact')} className="btn-primary">
              Get Free Consultation
            </button>
          </div>
        </div>

        <div className="navbar-cta">
          <button onClick={() => handleNavClick('appointment', 'contact')} className="btn-primary">
            Get Free Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
