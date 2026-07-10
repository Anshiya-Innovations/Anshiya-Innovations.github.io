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
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const dropdownServices = [
    {
      title: "AI Integration & Automation",
      description: "Integrate AI to automate workflows and enhance decision-making.",
      subItems: [
        "AI Consulting",
        "SAP AI Services",
        "AI Solutions Implementation",
        "SAP Business AI",
        "AI App Development",
        "SAP Joule",
        "AI Agent Development",
        "SAP Joule Studio",
        "Generative AI",
        "AI Assistant Development"
      ]
    },
    {
      title: "SAP S/4 or SAP BTP",
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
        "Infrastructure Services",
        "SAP Applicationn Security",
        "SAP Security & Controls Monitoring"
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
        "Cloud Compliance",
        "Infrastructure-as-Code Scanning",
        "Supply Chain Security (SCA and SBOM)",
        "Secured Container Images",
        "Application Security Posture Management (ASPM)",
        "Static Application Security Testing (SAST)",
        "Workload Protection Platform (CWPP)",
        "Container & Kubernetes security",
        "Cloud Detection & Response (CDR)",
        "Cloud Cost",
        "Sensor: Runtime Protection"
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
      subItems: [
        "Customer Service Automation",
        "Finance & Accounting Automation",
        "Human Resources Automation",
        "Information Technology (IT) Automation",
        "Service Operations Automation",
        "Shared Services & Operations Automation"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Migrate, manage, and scale with secure and reliable cloud services.",
      subItems: [
        "Cloud Consulting",
        "Cloud Migration & Modernization",
        "Managed Cloud Operations",
        "Cloud Optimization",
        "Platform Engineering & Automation"
      ]
    },
    {
      title: "Employee Training Program",
      description: "Upskill your workforce with specialized job-oriented training.",
      subItems: [
        "AI & ML Corporate",
        "Project & Process Management",
        "Data Science & Analytics Corporate",
        "Cloud & DevOps Corporate",
        "Cybersecurity Corporate",
        "Software Development Corporate",
        "Digital Business Corporate"
      ]
    },
    {
      title: "Internship for Students",
      description: "Real-world exposure and mentorship for future tech professionals.",
      subItems: [
        "Agentic AI Applied Program",
        "Digital Communication and GenAI Tools",
        "Front-end Dev with React & GenAI Advanced Program",
        "Full-Stack Development with GenAI Honours Program",
        "Java Development Certificate Program",
        "Java: Object-Oriented Programming",
        "Programming using Python",
        "SQL Essentials with GenAI",
        "PGP in Machine Learning & Artificial Intelligence",
        "Data Analytics Using Python and SQL Certificate Program",
        "Managing and Querying Database",
        "Cybersecurity with GenAI Advanced Program",
        "IT SysAdmin & Cloud Computing Advanced Program",
        "SAP BTP Internship"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Build user-friendly and scalable mobile apps for iOS and Android.",
      subItems: [
        "iOS App Development",
        "Android App Development",
        "React Native App Development",
        "Flutter App Development"
      ]
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

  useEffect(() => {
    const path = location.pathname;
    if (path === '/industries') {
      setActiveItem('industries');
    } else if (path === '/contact') {
      setActiveItem('contact');
    } else if (path === '/about-us') {
      setActiveItem('about');
    } else if (path === '/career') {
      setActiveItem('career');
    } else if (path === '/') {
      if (location.state?.scrollTo === 'services2-section') {
        setActiveItem('services');
      } else {
        setActiveItem('home');
      }
    } else {
      setActiveItem('');
    }
  }, [location.pathname, location.state]);

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
          <img src={logoImg} alt="Anshiya Innovations Logo" className='navlogo' />
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
            
            {/* Services Mega Menu Trigger Link */}
            <li 
              className={`nav-item has-dropdown ${showDropdown ? 'show-dropdown' : ''}`}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button 
                onClick={() => {
                  setShowDropdown(false);
                  handleNavClick('services2-section', 'services');
                }} 
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
                            setShowDropdown(false);
                            if (service.title === "SAP S/4 or SAP BTP") {
                              navigate('/sap-service');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            } else {
                              handleNavClick('services2-section', 'services');
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
                        setShowDropdown(false);
                        if (dropdownServices[activeTab].title === "SAP S/4 or SAP BTP") {
                          navigate('/sap-service');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          handleNavClick('services2-section', 'services');
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
                              setShowDropdown(false);
                              if (subItem === "AI Consulting") {
                                navigate('/solutions/ai_consulting');
                              } else if (subItem === "SAP AI Services") {
                                navigate('/solutions/sap_ai_services');
                              } else if (subItem === "AI Solutions Implementation") {
                                navigate('/solutions/ai_solutions_implementation');
                              } else if (subItem === "SAP Business AI") {
                                navigate('/solutions/sap_business_ai');
                              } else if (subItem === "AI App Development") {
                                navigate('/solutions/ai_app_development');
                              } else if (subItem === "SAP Joule") {
                                navigate('/solutions/sap_joule');
                              } else if (subItem === "AI Agent Development") {
                                navigate('/solutions/ai_agent_development');
                              } else if (subItem === "SAP Joule Studio") {
                                navigate('/solutions/sap_joule_studio');
                              } else if (subItem === "Generative AI") {
                                navigate('/solutions/generative_ai');
                              } else if (subItem === "AI Assistant Development") {
                                navigate('/solutions/ai_assistant_development');
                              } else if (subItem === "iOS App Development") {
                                navigate('/solutions/ios_app_development');
                              } else if (subItem === "Android App Development") {
                                navigate('/solutions/android_app_development');
                              } else if (subItem === "React Native App Development") {
                                navigate('/solutions/react_native_app_development');
                              } else if (subItem === "Flutter App Development") {
                                navigate('/solutions/flutter_app_development');
                              } else if (subItem === "Cloud Consulting") {
                                navigate('/solutions/cloud_consulting');
                              } else if (subItem === "Cloud Migration & Modernization") {
                                navigate('/solutions/cloud_migration_modernization');
                              } else if (subItem === "Managed Cloud Operations") {
                                navigate('/solutions/managed_cloud_operations');
                              } else if (subItem === "Cloud Optimization") {
                                navigate('/solutions/cloud_optimization');
                              } else if (subItem === "Platform Engineering & Automation") {
                                navigate('/solutions/platform_engineering_automation');
                              } else if (subItem === "Customer Service Automation") {
                                navigate('/solutions/customer_service_automation');
                              } else if (subItem === "Finance & Accounting Automation") {
                                navigate('/solutions/finance_accounting_automation');
                              } else if (subItem === "Human Resources Automation") {
                                navigate('/solutions/human_resources_automation');
                              } else if (subItem === "Information Technology (IT) Automation") {
                                navigate('/solutions/it_automation');
                              } else if (subItem === "Service Operations Automation") {
                                navigate('/solutions/service_operations_automation');
                              } else if (subItem === "Shared Services & Operations Automation") {
                                navigate('/solutions/shared_services_operations_automation');
                              } else if (subItem === "AI & ML Corporate") {
                                navigate('/solutions/ai_ml_corporate');
                              } else if (subItem === "Project & Process Management") {
                                navigate('/solutions/project_process_management');
                              } else if (subItem === "Data Science & Analytics Corporate") {
                                navigate('/solutions/data_science_analytics_corporate');
                              } else if (subItem === "Cloud & DevOps Corporate") {
                                navigate('/solutions/cloud_devops_corporate');
                              } else if (subItem === "Cybersecurity Corporate") {
                                navigate('/solutions/cybersecurity_corporate');
                              } else if (subItem === "Software Development Corporate") {
                                navigate('/solutions/software_development_corporate');
                              } else if (subItem === "Digital Business Corporate") {
                                navigate('/solutions/digital_business_corporate');
                              } else if (subItem === "Agentic AI Applied Program") {
                                navigate('/solutions/agentic_ai_applied_program');
                              } else if (subItem === "Digital Communication and GenAI Tools") {
                                navigate('/solutions/digital_communication_genai_tools');
                              } else if (subItem === "Front-end Dev with React & GenAI Advanced Program") {
                                navigate('/solutions/frontend_dev_react_genai');
                              } else if (subItem === "Full-Stack Development with GenAI Honours Program") {
                                navigate('/solutions/fullstack_dev_genai');
                              } else if (subItem === "Java Development Certificate Program") {
                                navigate('/solutions/java_dev_certificate');
                              } else if (subItem === "Java: Object-Oriented Programming") {
                                navigate('/solutions/java_oop');
                              } else if (subItem === "Programming using Python") {
                                navigate('/solutions/programming_python');
                              } else if (subItem === "SQL Essentials with GenAI") {
                                navigate('/solutions/sql_essentials_genai');
                              } else if (subItem === "PGP in Machine Learning & Artificial Intelligence") {
                                navigate('/solutions/pgp_ml_ai');
                              } else if (subItem === "Data Analytics Using Python and SQL Certificate Program") {
                                navigate('/solutions/data_analytics_python_sql');
                              } else if (subItem === "Managing and Querying Database") {
                                navigate('/solutions/managing_querying_database');
                              } else if (subItem === "Cybersecurity with GenAI Advanced Program") {
                                navigate('/solutions/cybersecurity_genai');
                              } else if (subItem === "IT SysAdmin & Cloud Computing Advanced Program") {
                                navigate('/solutions/it_sysadmin_cloud');
                              } else if (subItem === "SAP BTP Internship") {
                                navigate('/solutions/sap_btp_internship');
                              } else if (subItem === "Code Assessment") {
                                navigate('/solutions/code');
                              } else if (subItem === "DATA ASSESSMENT" || subItem === "Data Assessment") {
                                navigate('/solutions/data');
                              } else if (subItem === "Integration Assessment") {
                                navigate('/solutions/integration');
                              } else if (subItem === "Analytics Assessment") {
                                navigate('/solutions/analytics');
                              } else if (subItem === "Planning  Assessment") {
                                navigate('/solutions/planning');
                              } else if (subItem === "S/4HANA Migration Services") {
                                navigate('/solutions/s4hana');
                              } else if (subItem === "Business Data Cloud") {
                                navigate('/solutions/datacloud');
                              } else if (subItem === "PIPO to Integration Suite") {
                                navigate('/solutions/pipo');
                              } else if (subItem === "Clean Core") {
                                navigate('/solutions/cleancore_main');
                              } else if (subItem === "SAP S/4HANA") {
                                navigate('/solutions/s4hana_main');
                              } else if (subItem === "SAP Analytics Cloud") {
                                navigate('/solutions/sac_main');
                              } else if (subItem === "Line of Business Enhancements on SAP BTP") {
                                navigate('/solutions/lob_btp');
                              } else if (subItem === "Application  Managed Services") {
                                 navigate('/solutions/ams');
                               } else if (subItem === "Infrastructure Services") {
                                 navigate('/solutions/infrastructure');
                               } else if (subItem === "SAP Applicationn Security") {
                                 navigate('/solutions/sap_application_security');
                               } else if (subItem === "SAP Security & Controls Monitoring") {
                                 navigate('/solutions/sap_security_controls_monitoring');
                               } else if (subItem === "AI Security") { navigate('/solutions/ai_security');
                              } else if (subItem === "Exposure Management") { navigate('/solutions/exposure_management');
                              } else if (subItem === "Unified Vulnerability Management") { navigate('/solutions/uvm');
                              } else if (subItem === "Attack Surface Management (ASM)") { navigate('/solutions/asm');
                              } else if (subItem === "Cloud Security Posture Management (CSPM)") { navigate('/solutions/cspm');
                              } else if (subItem === "Data Security Posture Management (DSPM)") { navigate('/solutions/dspm');
                              } else if (subItem === "Infrastructure Entitlements Management (CIEM)") { navigate('/solutions/ciem');
                              } else if (subItem === "Wiz Cloud Compliance") { navigate('/solutions/wiz_compliance');
                              } else if (subItem === "Infrastructure-as-Code Scanning") { navigate('/solutions/iac_scanning');
                              } else if (subItem === "Supply Chain Security (SCA and SBOM)") { navigate('/solutions/sca_sbom');
                              } else if (subItem === "WizOS: Secured Container Images") { navigate('/solutions/wiz_os');
                              } else if (subItem === "Application Security Posture Management (ASPM)") { navigate('/solutions/aspm');
                              } else if (subItem === "Static Application Security Testing (SAST)") { navigate('/solutions/sast');
                              } else if (subItem === "Workload Protection Platform (CWPP)") { navigate('/solutions/cwpp');
                              } else if (subItem === "Container & Kubernetes security") { navigate('/solutions/k8s_security');
                              } else if (subItem === "Cloud Detection & Response (CDR)") { navigate('/solutions/cdr');
                              } else if (subItem === "Cloud Cost") { navigate('/solutions/cloud_cost');
                              } else if (subItem === "Wiz Sensor: Runtime Protection") { navigate('/solutions/wiz_sensor');
                              } else if (subItem === "SOC 2") { navigate('/solutions/soc2');
                              } else if (subItem === "ISO 27001") { navigate('/solutions/iso27001');
                              } else if (subItem === "HIPAA") { navigate('/solutions/hipaa');
                              } else if (subItem === "GDPR") { navigate('/solutions/gdpr');
                              } else if (subItem === "FedRAMP") { navigate('/solutions/fedramp');
                              } else if (subItem === "CMMC") { navigate('/solutions/cmmc');
                              } else if (subItem === "ISO 42001") { navigate('/solutions/iso42001');
                              } else if (subItem === "PCI DSS") { navigate('/solutions/pci_dss');
                              } else if (subItem === "HITRUST") { navigate('/solutions/hitrust');
                              } else if (subItem === "NIST AI RMF") { navigate('/solutions/nist_ai_rmf');
                              } else if (subItem === "DORA") { navigate('/solutions/dora');
                              } else if (subItem === "Custom Frameworks") { navigate('/solutions/custom_frameworks');
                              } else if (subItem === "Audit Services") { navigate('/solutions/audit_services');
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
              <Link 
                to="/industries" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveItem('industries');
                }}
                className={`nav-link ${activeItem === 'industries' ? 'active' : ''}`}
              >
                Industries
              </Link>
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
                to="/career" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveItem('career');
                }}
                className={`nav-link ${activeItem === 'career' ? 'active' : ''}`}
              >
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about-us" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveItem('about');
                }}
                className={`nav-link ${activeItem === 'about' ? 'active' : ''}`}
              >
                About Us
              </Link>
            </li>
          </ul>
          
          <div className="navbar-cta-mobile">
            <button onClick={() => window.open('https://calendly.com/anshiyainnovations/30min', '_blank', 'noopener,noreferrer')} className="btn-primary">
              Get Free Consultation
            </button>
          </div>
        </div>

        <div className="navbar-cta">
          <button onClick={() => window.open('https://calendly.com/anshiyainnovations/30min', '_blank', 'noopener,noreferrer')} className="btn-primary">
            Get Free Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
