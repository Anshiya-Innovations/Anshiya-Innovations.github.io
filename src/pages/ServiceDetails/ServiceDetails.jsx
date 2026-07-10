import React, { useEffect } from 'react';
import { useSearchParams, useNavigate, Link, useParams } from 'react-router-dom';
import './ServiceDetails.css';

const dropdownServices = [
  {
    slug: "ai-integration-automation",
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
    slug: "sap-btp",
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
    slug: "cyber-security",
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
    slug: "security-compliance-audit",
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
    slug: "business-automations",
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
    slug: "cloud-solutions",
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
    slug: "employee-training-program",
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
    slug: "internship-for-students",
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
    slug: "mobile-app-development",
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

const getSubItemRoute = (subItem) => {
  const item = subItem.trim();
  if (item === "AI Consulting") return "/solutions/ai_consulting";
  if (item === "SAP AI Services") return "/solutions/sap_ai_services";
  if (item === "AI Solutions Implementation") return "/solutions/ai_solutions_implementation";
  if (item === "SAP Business AI") return "/solutions/sap_business_ai";
  if (item === "AI App Development") return "/solutions/ai_app_development";
  if (item === "SAP Joule") return "/solutions/sap_joule";
  if (item === "AI Agent Development") return "/solutions/ai_agent_development";
  if (item === "SAP Joule Studio") return "/solutions/sap_joule_studio";
  if (item === "Generative AI") return "/solutions/generative_ai";
  if (item === "AI Assistant Development") return "/solutions/ai_assistant_development";

  if (item === "Code Assessment") return "/solutions/code";
  if (item === "DATA ASSESSMENT" || item === "Data Assessment") return "/solutions/data";
  if (item === "Integration Assessment") return "/solutions/integration";
  if (item === "Analytics Assessment") return "/solutions/analytics";
  if (item === "Planning  Assessment") return "/solutions/planning";
  if (item === "S/4HANA Migration Services") return "/solutions/s4hana";
  if (item === "Business Data Cloud") return "/solutions/datacloud";
  if (item === "PIPO to Integration Suite") return "/solutions/pipo";
  if (item === "Clean Core") return "/solutions/cleancore_main";
  if (item === "SAP S/4HANA") return "/solutions/s4hana_main";
  if (item === "SAP Analytics Cloud") return "/solutions/sac_main";
  if (item === "Line of Business Enhancements on SAP BTP") return "/solutions/lob_btp";
  if (item === "Application  Managed Services") return "/solutions/ams";
  if (item === "Infrastructure Services") return "/solutions/infrastructure";
  if (item === "SAP Applicationn Security") return "/solutions/sap_application_security";
  if (item === "SAP Security & Controls Monitoring") return "/solutions/sap_security_controls_monitoring";

  if (item === "AI Security") return "/solutions/ai_security";
  if (item === "Exposure Management") return "/solutions/exposure_management";
  if (item === "Unified Vulnerability Management") return "/solutions/uvm";
  if (item === "Attack Surface Management (ASM)") return "/solutions/asm";
  if (item === "Cloud Security Posture Management (CSPM)") return "/solutions/cspm";
  if (item === "Data Security Posture Management (DSPM)") return "/solutions/dspm";
  if (item === "Infrastructure Entitlements Management (CIEM)") return "/solutions/ciem";
  if (item === "Cloud Compliance" || item === "Wiz Cloud Compliance") return "/solutions/wiz_compliance";
  if (item === "Infrastructure-as-Code Scanning") return "/solutions/iac_scanning";
  if (item === "Supply Chain Security (SCA and SBOM)") return "/solutions/sca_sbom";
  if (item === "Secured Container Images" || item === "WizOS: Secured Container Images") return "/solutions/wiz_os";
  if (item === "Application Security Posture Management (ASPM)") return "/solutions/aspm";
  if (item === "Static Application Security Testing (SAST)") return "/solutions/sast";
  if (item === "Workload Protection Platform (CWPP)") return "/solutions/cwpp";
  if (item === "Container & Kubernetes security") return "/solutions/k8s_security";
  if (item === "Cloud Detection & Response (CDR)") return "/solutions/cdr";
  if (item === "Cloud Cost") return "/solutions/cloud_cost";
  if (item === "Sensor: Runtime Protection" || item === "Wiz Sensor: Runtime Protection") return "/solutions/wiz_sensor";

  if (item === "SOC 2") return "/solutions/soc2";
  if (item === "ISO 27001") return "/solutions/iso27001";
  if (item === "HIPAA") return "/solutions/hipaa";
  if (item === "GDPR") return "/solutions/gdpr";
  if (item === "FedRAMP") return "/solutions/fedramp";
  if (item === "CMMC") return "/solutions/cmmc";
  if (item === "ISO 42001") return "/solutions/iso42001";
  if (item === "PCI DSS") return "/solutions/pci_dss";
  if (item === "HITRUST") return "/solutions/hitrust";
  if (item === "NIST AI RMF") return "/solutions/nist_ai_rmf";
  if (item === "DORA") return "/solutions/dora";
  if (item === "Custom Frameworks") return "/solutions/custom_frameworks";
  if (item === "Audit Services") return "/solutions/audit_services";

  if (item === "Customer Service Automation") return "/solutions/customer_service_automation";
  if (item === "Finance & Accounting Automation") return "/solutions/finance_accounting_automation";
  if (item === "Human Resources Automation") return "/solutions/human_resources_automation";
  if (item === "Information Technology (IT) Automation") return "/solutions/it_automation";
  if (item === "Service Operations Automation") return "/solutions/service_operations_automation";
  if (item === "Shared Services & Operations Automation") return "/solutions/shared_services_operations_automation";

  if (item === "Cloud Consulting") return "/solutions/cloud_consulting";
  if (item === "Cloud Migration & Modernization") return "/solutions/cloud_migration_modernization";
  if (item === "Managed Cloud Operations") return "/solutions/managed_cloud_operations";
  if (item === "Cloud Optimization") return "/solutions/cloud_optimization";
  if (item === "Platform Engineering & Automation") return "/solutions/platform_engineering_automation";

  if (item === "AI & ML Corporate") return "/solutions/ai_ml_corporate";
  if (item === "Project & Process Management") return "/solutions/project_process_management";
  if (item === "Data Science & Analytics Corporate") return "/solutions/data_science_analytics_corporate";
  if (item === "Cloud & DevOps Corporate") return "/solutions/cloud_devops_corporate";
  if (item === "Cybersecurity Corporate") return "/solutions/cybersecurity_corporate";
  if (item === "Software Development Corporate") return "/solutions/software_development_corporate";
  if (item === "Digital Business Corporate") return "/solutions/digital_business_corporate";

  if (item === "Agentic AI Applied Program") return "/solutions/agentic_ai_applied_program";
  if (item === "Digital Communication and GenAI Tools") return "/solutions/digital_communication_genai_tools";
  if (item === "Front-end Dev with React & GenAI Advanced Program") return "/solutions/frontend_dev_react_genai";
  if (item === "Full-Stack Development with GenAI Honours Program") return "/solutions/fullstack_dev_genai";
  if (item === "Java Development Certificate Program") return "/solutions/java_dev_certificate";
  if (item === "Java: Object-Oriented Programming") return "/solutions/java_oop";
  if (item === "Programming using Python") return "/solutions/programming_python";
  if (item === "SQL Essentials with GenAI") return "/solutions/sql_essentials_genai";
  if (item === "PGP in Machine Learning & Artificial Intelligence") return "/solutions/pgp_ml_ai";
  if (item === "Data Analytics Using Python and SQL Certificate Program") return "/solutions/data_analytics_python_sql";
  if (item === "Managing and Querying Database") return "/solutions/managing_querying_database";
  if (item === "Cybersecurity with GenAI Advanced Program") return "/solutions/cybersecurity_genai";
  if (item === "IT SysAdmin & Cloud Computing Advanced Program") return "/solutions/it_sysadmin_cloud";
  if (item === "SAP BTP Internship") return "/solutions/sap_btp_internship";

  if (item === "iOS App Development") return "/solutions/ios_app_development";
  if (item === "Android App Development") return "/solutions/android_app_development";
  if (item === "React Native App Development") return "/solutions/react_native_app_development";
  if (item === "Flutter App Development") return "/solutions/flutter_app_development";

  return "/sap-service";
};

const ServiceDetails = () => {
  const { type: pathType } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const typeParam = pathType || searchParams.get('type') || 'ai-integration-automation';

  const activeService = dropdownServices.find(s => s.slug === typeParam) || dropdownServices[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [typeParam]);

  return (
    <div className="service-details-page">
      {/* Background glow effects */}
      <div className="glow-effect top-left"></div>
      <div className="glow-effect bottom-right"></div>

      <div className="container service-details-container">
        {/* Breadcrumb */}
        <div className="service-details-breadcrumb">
          <Link to="/">Home</Link> &rsaquo; <span>Services</span> &rsaquo; <span className="active-breadcrumb">{activeService.title}</span>
        </div>

        {/* Hero Section */}
        <div className="service-details-hero">
          <span className="hero-badge">Enterprise Services</span>
          <h1 className="hero-title">{activeService.title}</h1>
          <p className="hero-description">{activeService.description}</p>
        </div>

        {/* Grid Section */}
        <div className="service-details-grid-section">
          <h2 className="grid-section-title">Explore Our Offerings</h2>
          <div className="service-subitems-grid">
            {activeService.subItems.map((subItem, idx) => {
              const route = getSubItemRoute(subItem);
              return (
                <div 
                  key={idx} 
                  className="subitem-card"
                  onClick={() => {
                    navigate(route);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="card-hover-border"></div>
                  <div className="subitem-card-content">
                    <div className="subitem-icon-wrapper">
                      <svg viewBox="0 0 24 24" className="subitem-icon" fill="none" stroke="currentColor" strokeWidth="2">
                        {typeParam.includes('ai') || typeParam.includes('automation') ? (
                          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M12 7a5 5 0 100 10 5 5 0 000-10z" />
                        ) : typeParam.includes('security') || typeParam.includes('compliance') ? (
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        ) : typeParam.includes('sap') ? (
                          <path d="M4 7V4h16v3M9 20h6M12 4v16" />
                        ) : typeParam.includes('cloud') ? (
                          <path d="M18 10a5 5 0 00-9.53-2.27A6 6 0 1011 18h7a5 5 0 000-10z" />
                        ) : (
                          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        )}
                      </svg>
                    </div>
                    <h3 className="subitem-title">{subItem}</h3>
                    <span className="subitem-link">Explore Solution &rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="service-details-cta">
          <h2 className="cta-title">Need a Custom Enterprise Solution?</h2>
          <p className="cta-subtitle">Let our certified team design, implement, and maintain intelligent digital ecosystems tailored to your unique scaling requirements.</p>
          <div className="cta-actions">
            <button 
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="btn-primary cta-btn"
            >
              Get in Touch
            </button>
            <button onClick={() => navigate('/', { state: { scrollTo: 'services2-section' } })} className="btn-outline cta-btn">Other Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
