import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import logoMobile from '../../assets/logo-mobile.webp';
import './Navbar.css';

const getCategorySlug = (title) => {
  const mapping = {
    "AI Integration & Automation": "ai-integration-automation",
    "SAP S/4 or SAP BTP": "sap-btp",
    "Cyber Security": "cyber-security",
    "Security Compliance & Audit": "security-compliance-audit",
    "Business Automations": "business-automations",
    "Cloud Solutions": "cloud-solutions",
    "Employee Training Program": "employee-training-program",
    "Internship for Students": "internship-for-students",
    "Mobile App Development": "mobile-app-development"
  };
  return mapping[title] || "general";
};

const mobileServices = [
  { title: "AI Integration & Automation" },
  { title: "SAP S/4 or SAP BTP" },
  { title: "Cyber Security" },
  { title: "Security Compliance & Audit" },
  { title: "Business Automations" },
  { title: "Cloud Solutions" },
  { title: "Employee Training Program" },
  { title: "Internship for Students" },
  { title: "Mobile App Development" }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [megaMenuData, setMegaMenuData] = useState(null);

  // Lazy load mega menu data on desktop view only to reduce mobile bundle size
  useEffect(() => {
    if (isDesktop && !megaMenuData) {
      import('./megaMenuData.js').then((module) => {
        setMegaMenuData(module);
      });
    }
  }, [isDesktop, megaMenuData]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <picture>
            <source media="(max-width: 768px)" srcSet={logoMobile} type="image/webp" />
            <img src={logoImg} alt="Anshiya Innovations Logo" width="440" height="123" className='navlogo' />
          </picture>
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
              className={`nav-item has-dropdown ${showDropdown ? 'show-dropdown' : ''} ${mobileDropdownOpen ? 'mobile-dropdown-open' : ''}`}
              onMouseEnter={() => {
                if (window.innerWidth > 768) setShowDropdown(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 768) setShowDropdown(false);
              }}
            >
              <button 
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    setMobileDropdownOpen(!mobileDropdownOpen);
                  } else {
                    setShowDropdown(false);
                    handleNavClick('services2-section', 'services');
                  }
                }} 
                className={`nav-link ${activeItem === 'services' ? 'active' : ''}`}
              >
                Services
              </button>
              
              {/* Mobile Services Dropdown (Visible only on mobile/tablet view) */}
              {mobileDropdownOpen && (
                <ul className="navbar-mobile-dropdown">
                  {mobileServices.map((service, index) => (
                    <li key={index} className="mobile-dropdown-item">
                      <button
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobileDropdownOpen(false);
                          const slug = getCategorySlug(service.title);
                          navigate(`/service-details/${slug}`);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="mobile-dropdown-link"
                      >
                        {service.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              
              {/* Dropdown Mega Menu Panel */}
              {isDesktop && megaMenuData && (
                <div className="navbar-mega-dropdown">
                  <div className="mega-dropdown-split">
                    {/* Left Column: 9 Tab Headings */}
                    <div className="mega-dropdown-left">
                      {megaMenuData.dropdownServices.map((service, index) => {
                        return (
                          <button
                            key={index}
                            className={`mega-tab-btn ${activeTab === index ? 'active' : ''}`}
                            onMouseEnter={() => setActiveTab(index)}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setShowDropdown(false);
                              const slug = getCategorySlug(service.title);
                              navigate(`/service-details/${slug}`);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                          >
                            {service.title}
                          </button>
                        );
                      })}
                    </div>

                    {/* Right Column: Active Tab Content Panel */}
                    <div className="mega-dropdown-right">
                      <div className="mega-dropdown-right-inner">
                        <div className="mega-right-header">
                          <h4 className="mega-right-title">
                            {megaMenuData.dropdownServices[activeTab].title}
                          </h4>
                          <p className="mega-right-subtitle">
                            {megaMenuData.dropdownServices[activeTab].description}
                          </p>
                        </div>

                        {/* Placeholder Grid for Sub-Items */}
                        <div className="mega-right-grid">
                          {megaMenuData.dropdownServices[activeTab].subItems && megaMenuData.dropdownServices[activeTab].subItems.length > 0 ? (
                            megaMenuData.dropdownServices[activeTab].subItems.map((subItem, subIndex) => (
                              <div 
                                key={subIndex} 
                                className="mega-right-item"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setShowDropdown(false);
                                  
                                  const categoryTitle = megaMenuData.dropdownServices[activeTab].title;
                                  const categorySlug = getCategorySlug(categoryTitle);
                                  const solutionKey = megaMenuData.getSubItemSolutionKey(subItem);
                                  
                                  if (solutionKey) {
                                    navigate(`/services/${categorySlug}/${solutionKey}`);
                                  } else {
                                    navigate('/sap-service');
                                  }
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
                </div>
              )}
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
                  window.scrollTo({ top: 0, behavior: 'smooth' });
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
