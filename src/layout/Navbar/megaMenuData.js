export const getSubItemSolutionKey = (subItem) => {
  const item = subItem.trim();
  if (item === "AI Consulting") return "ai_consulting";
  if (item === "SAP AI Services") return "sap_ai_services";
  if (item === "AI Solutions Implementation") return "ai_solutions_implementation";
  if (item === "SAP Business AI") return "sap_business_ai";
  if (item === "AI App Development") return "ai_app_development";
  if (item === "SAP Joule") return "sap_joule";
  if (item === "AI Agent Development") return "ai_agent_development";
  if (item === "SAP Joule Studio") return "sap_joule_studio";
  if (item === "Generative AI") return "generative_ai";
  if (item === "AI Assistant Development") return "ai_assistant_development";

  if (item === "Code Assessment") return "code";
  if (item === "DATA ASSESSMENT" || item === "Data Assessment") return "data";
  if (item === "Integration Assessment") return "integration";
  if (item === "Analytics Assessment") return "analytics";
  if (item === "Planning  Assessment") return "planning";
  if (item === "S/4HANA Migration Services") return "s4hana";
  if (item === "Business Data Cloud") return "datacloud";
  if (item === "PIPO to Integration Suite") return "pipo";
  if (item === "Clean Core") return "cleancore_main";
  if (item === "SAP S/4HANA") return "s4hana_main";
  if (item === "SAP Analytics Cloud") return "sac_main";
  if (item === "Line of Business Enhancements on SAP BTP") return "lob_btp";
  if (item === "Application  Managed Services") return "ams";
  if (item === "Infrastructure Services") return "infrastructure";
  if (item === "SAP Applicationn Security") return "sap_application_security";
  if (item === "SAP Security & Controls Monitoring") return "sap_security_controls_monitoring";

  if (item === "AI Security") return "ai_security";
  if (item === "Exposure Management") return "exposure_management";
  if (item === "Unified Vulnerability Management") return "uvm";
  if (item === "Attack Surface Management (ASM)") return "asm";
  if (item === "Cloud Security Posture Management (CSPM)") return "cspm";
  if (item === "Data Security Posture Management (DSPM)") return "dspm";
  if (item === "Infrastructure Entitlements Management (CIEM)") return "ciem";
  if (item === "Cloud Compliance" || item === "Wiz Cloud Compliance") return "wiz_compliance";
  if (item === "Infrastructure-as-Code Scanning") return "iac_scanning";
  if (item === "Supply Chain Security (SCA and SBOM)") return "sca_sbom";
  if (item === "Secured Container Images" || item === "WizOS: Secured Container Images") return "wiz_os";
  if (item === "Application Security Posture Management (ASPM)") return "aspm";
  if (item === "Static Application Security Testing (SAST)") return "sast";
  if (item === "Workload Protection Platform (CWPP)") return "cwpp";
  if (item === "Container & Kubernetes security") return "k8s_security";
  if (item === "Cloud Detection & Response (CDR)") return "cdr";
  if (item === "Cloud Cost") return "cloud_cost";
  if (item === "Sensor: Runtime Protection" || item === "Wiz Sensor: Runtime Protection") return "wiz_sensor";

  if (item === "SOC 2") return "soc2";
  if (item === "ISO 27001") return "iso27001";
  if (item === "HIPAA") return "hipaa";
  if (item === "GDPR") return "gdpr";
  if (item === "FedRAMP") return "fedramp";
  if (item === "CMMC") return "cmmc";
  if (item === "ISO 42001") return "iso42001";
  if (item === "PCI DSS") return "pci_dss";
  if (item === "HITRUST") return "hitrust";
  if (item === "NIST AI RMF") return "nist_ai_rmf";
  if (item === "DORA") return "dora";
  if (item === "Custom Frameworks") return "custom_frameworks";
  if (item === "Audit Services") return "audit_services";

  if (item === "Customer Service Automation") return "customer_service_automation";
  if (item === "Finance & Accounting Automation") return "finance_accounting_automation";
  if (item === "Human Resources Automation") return "human_resources_automation";
  if (item === "Information Technology (IT) Automation") return "it_automation";
  if (item === "Service Operations Automation") return "service_operations_automation";
  if (item === "Shared Services & Operations Automation") return "shared_services_operations_automation";

  if (item === "Cloud Consulting") return "cloud_consulting";
  if (item === "Cloud Migration & Modernization") return "cloud_migration_modernization";
  if (item === "Managed Cloud Operations") return "managed_cloud_operations";
  if (item === "Cloud Optimization") return "cloud_optimization";
  if (item === "Platform Engineering & Automation") return "platform_engineering_automation";

  if (item === "AI & ML Corporate") return "ai_ml_corporate";
  if (item === "Project & Process Management") return "project_process_management";
  if (item === "Data Science & Analytics Corporate") return "data_science_analytics_corporate";
  if (item === "Cloud & DevOps Corporate") return "cloud_devops_corporate";
  if (item === "Cybersecurity Corporate") return "cybersecurity_corporate";
  if (item === "Software Development Corporate") return "software_development_corporate";
  if (item === "Digital Business Corporate") return "digital_business_corporate";

  if (item === "Agentic AI Applied Program") return "agentic_ai_applied_program";
  if (item === "Digital Communication and GenAI Tools") return "digital_communication_genai_tools";
  if (item === "Front-end Dev with React & GenAI Advanced Program") return "frontend_dev_react_genai";
  if (item === "Full-Stack Development with GenAI Honours Program") return "fullstack_dev_genai";
  if (item === "Java Development Certificate Program") return "java_dev_certificate";
  if (item === "Java: Object-Oriented Programming") return "java_oop";
  if (item === "Programming using Python") return "programming_python";
  if (item === "SQL Essentials with GenAI") return "sql_essentials_genai";
  if (item === "PGP in Machine Learning & Artificial Intelligence") return "pgp_ml_ai";
  if (item === "Data Analytics Using Python and SQL Certificate Program") return "data_analytics_python_sql";
  if (item === "Managing and Querying Database") return "managing_querying_database";
  if (item === "Cybersecurity with GenAI Advanced Program") return "cybersecurity_genai";
  if (item === "IT SysAdmin & Cloud Computing Advanced Program") return "it_sysadmin_cloud";
  if (item === "SAP BTP Internship") return "sap_btp_internship";

  if (item === "iOS App Development") return "ios_app_development";
  if (item === "Android App Development") return "android_app_development";
  if (item === "React Native App Development") return "react_native_app_development";
  if (item === "Flutter App Development") return "flutter_app_development";

  return null;
};

export const dropdownServices = [
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
