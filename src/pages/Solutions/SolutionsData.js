// src/pages/Solutions/SolutionsData.js
import showcasePie from '../../assets/showcase-dashboard-pie.png';
import showcaseBars from '../../assets/showcase-dashboard-bars.png';
import showcaseTable from '../../assets/showcase-dashboard-table.png';
import solutionsDashboard from '../../assets/solutions-dashboard.png';

import { aiContentMap } from './aiContentMap';

export const contentMap = {
  ...aiContentMap,
  code: {
    hero: {
      badge: "FUTURE-READY ENTERPRISE",
      title1: "SAP Clean Core",
      title2: "Assessment",
      desc: "Evaluate, optimize, and modernize your SAP landscape for sustainable growth. A Clean Core strategy minimizes unnecessary customizations, making SAP systems easier to upgrade, maintain, and extend. Our assessment identifies optimization opportunities and delivers a clear roadmap for a modern, scalable, and future-ready SAP landscape.",
      ctaPrimary: "Get Free Consultation",
      ctaSecondary: "View Methodology"
    },
    insights: {
      title: "Powerful Insights for SAP Modernization",
      subtitle: "Gain comprehensive visibility into your SAP landscape with actionable recommendations to simplify customizations, reduce technical complexity, and accelerate your Clean Core transformation.",
      cards: [
        {
          title: "Comprehensive SAP Landscape Analysis",
          desc: "Gain complete visibility into custom developments, enhancements, user exits, BADIs, and modifications. Identify optimization opportunities and support a standardized Clean Core architecture."
        },
        {
          title: "Modern Extension Strategy",
          desc: "Evaluate existing customizations and identify the most effective extension approach using SAP BTP, APIs, standard applications, and side-by-side extensions while preserving a Clean Core."
        },
        {
          title: "Migration Readiness Assessment",
          desc: "Analyze migration complexity, technical debt, and upgrade readiness to support efficient SAP transformations while reducing implementation risks."
        },
        {
          title: "Transformation Roadmap",
          desc: "Receive prioritized recommendations for custom code optimization, SAP S/4HANA readiness, extension modernization, and SAP BTP adoption."
        }
      ]
    },
    debt: {
      title1: "Reduce Technical Complexity,",
      title2: "Maximize Business Value",
      desc: "Our SAP Clean Core Assessment provides strategic insights and a modernization roadmap to build a simplified, scalable, and future-ready SAP landscape.",
      bullets: [
        "Identify redundant customizations & obsolete developments",
        "Actionable roadmap to optimize costs & resources",
        "Accelerate transformation to standard clean core"
      ],
      cards: [
        {
          category: "COST OPTIMIZATION",
          subtitle: "Optimize costs & resources",
          desc: "Gain insights into project effort, resource planning, and modernization priorities to improve operational efficiency."
        },
        {
          category: "ACCELERATE TRANSFORMATION",
          subtitle: "Accelerate SAP Transformation",
          desc: "Prepare your SAP landscape for smoother upgrades, SAP S/4HANA migration, and cloud adoption with minimal business disruption."
        },
        {
          category: "BUSINESS AGILITY",
          subtitle: "Improve Business Agility",
          desc: "Adopt SAP best practices and standardized processes that improve flexibility, scalability, and responsiveness."
        },
        {
          category: "FUTURE INNOVATION",
          subtitle: "Enable Future-Ready Innovation",
          desc: "Leverage SAP BTP, SAP Fiori, APIs, and modern extension strategies while maintaining a clean and stable SAP core."
        }
      ]
    },
    showcase: {
      title: "InFocus Dashboard Showcase",
      subtitle: "Explore assessment dashboards that provide complete visibility into your SAP landscape and support informed modernization decisions.",
      rows: [
        {
          img: showcasePie,
          title: "SAP Landscape Analysis",
          desc: "Visualize every custom development, enhancement, user exit, BADI, and system dependency through an intuitive, interactive assessment dashboard. Our deep-scan analytics surface hidden technical debt and flag objects at risk during S/4HANA migration, giving your transformation team a complete, prioritized picture before a single line of code changes.",
          badges: ["Detailed Dashboard", "Interactive Reports"]
        },
        {
          img: showcaseBars,
          title: "Functional Category Analysis",
          desc: "Analyze custom objects by functional category, business criticality, complexity score, and actual usage frequency to identify the highest-impact modernization targets. Color-coded heat maps and trend charts help architects and business owners align on which customizations to retire, simplify, or migrate to SAP BTP extensions with confidence.",
          badges: ["Complexity Analysis", "Usage Metrics"]
        },
        {
          img: solutionsDashboard,
          title: "Package & Component Analysis",
          desc: "Drill into individual SAP packages or business components to isolate risk and focus scope without being overwhelmed by system-wide noise. Each component view delivers object-level detail — modification flags, transport history, and dependency graphs — so project teams can plan iterative, low-disruption modernization sprints with surgical precision.",
          badges: ["Package Insights", "Component View"]
        },
        {
          img: showcaseTable,
          title: "Object-Level Readiness Tracking",
          desc: "Track the end-to-end readiness of every custom object from initial discovery through remediation and sign-off. Automated scoring combines usage data, complexity, and upgrade-compatibility checks to generate effort estimates and cost projections, enabling stakeholders to build realistic business cases and govern Clean Core progress with full transparency.",
          badges: ["Cost Estimation", "Usage Analysis"]
        }
      ]
    },
    cta: {
      title: "Schedule Your SAP Clean Core Assessment",
      subtitle: "Build a Smarter, Simpler, and Future-Ready SAP Landscape. Take the first step toward a more agile, scalable, and upgrade-ready SAP environment. Let our experts help you unlock the full potential of your SAP investment.",
      primary: "Get Started Today",
      secondary: "Contact support"
    }
  },
  data: {
    hero: {
      badge: "FUTURE-READY ENTERPRISE",
      title1: "SAP Datasphere",
      title2: "Readiness Assessment",
      desc: "Transform Your Data. Empower Smarter Decisions. Evaluate your SAP BW landscape and prepare for a seamless migration to SAP Datasphere. Gain actionable insights, reduce migration risks, and build a scalable, cloud-ready foundation for analytics, AI, and intelligent decision-making.",
      ctaPrimary: "Get Started",
      ctaSecondary: "View Methodology"
    },
    insights: {
      title: "Powerful Insights for SAP Datasphere Migration",
      subtitle: "Our assessment delivers comprehensive insights to evaluate your existing data landscape, reduce migration risks, and build a scalable foundation for modern analytics.",
      cards: [
        {
          title: "SAP BW Landscape & Usage Analysis",
          desc: "Analyze SAP BW objects, data models, InfoProviders, custom developments, and system dependencies. Identify active, unused, and redundant objects to optimize performance."
        },
        {
          title: "Migration Readiness Assessment",
          desc: "Evaluate migration complexity, technical dependencies, integrations, and critical system paths to Datasphere."
        },
        {
          title: "SAP HANA Modernization Assessment",
          desc: "Review SAP HANA database artifacts, schemas, and custom calculation views for cloud modernization readiness."
        },
        {
          title: "Strategic Migration Roadmap",
          desc: "Receive prioritized effort estimates, timelines, project milestones, and modernization recommendations for a smooth migration."
        }
      ]
    },
    debt: {
      title1: "Simplify Data Migration,",
      title2: "Enable Smarter Analytics",
      desc: "Reduce migration complexity, improve data management, and accelerate the transition to a cloud-ready data platform.",
      bullets: [
        "Simplify Data Migration and cloud platform onboarding",
        "Optimize Your Data Landscape by removing redundant pools",
        "Plan with Confidence using expert complexity estimates"
      ],
      cards: [
        {
          category: "DATA MIGRATION",
          subtitle: "Simplify data migration",
          desc: "Streamline transition paths and migration models to accelerate the move to the cloud with minimal disruption."
        },
        {
          category: "OPTIMIZATION",
          subtitle: "Optimize your data landscape",
          desc: "De-clutter redundant data pools and optimize data models to maximize processing speed and efficiency."
        },
        {
          category: "DATA GOVERNANCE",
          subtitle: "Strengthen Data Governance",
          desc: "Ensure end-to-end data lineage, security configurations, and compliant governance in your new database."
        },
        {
          category: "INTELLIGENT ANALYTICS",
          subtitle: "Enable Intelligent Analytics",
          desc: "Build a solid cloud-ready foundation for AI, advanced predictive analytics, and real-time business reporting."
        }
      ]
    },
    showcase: {
      title: "How We Help",
      subtitle: "We simplify your journey from SAP BW to SAP Datasphere with expert assessments, migration planning, and modernization strategies. Our solutions reduce complexity, improve data accessibility, and build a secure, cloud-ready foundation for analytics, AI, and future business innovation.",
      rows: [
        {
          img: showcasePie,
          title: "SAP BW Landscape Analyzer",
          desc: "Perform a comprehensive deep-scan of your existing SAP BW systems to analyze active data sources, custom extractors, and system configurations. By identifying technical debt, compatibility gaps, and legacy dependencies, this analyzer provides the critical baseline information needed to plan a low-risk, highly efficient transition to SAP Datasphere.",
          badges: ["Source Profiling", "Extractor View"]
        },
        {
          img: showcaseBars,
          title: "Data Model Complexity Analyzer",
          desc: "Examine InfoCubes, Data Store Objects (DSOs), advanced InfoProviders, and complex custom queries to map their structure against modern cloud data schemas. This analysis automatically flags compatibility risks, evaluates schema translation complexity, and delivers prescriptive remediation steps to ensure a clean, high-performance model in SAP Datasphere.",
          badges: ["Complexity Mapping", "Model Conversion"]
        },
        {
          img: solutionsDashboard,
          title: "System Usage & Redundancy Insights",
          desc: "Analyze database table access patterns, active query usage, and transactional access frequencies to isolate redundant or obsolete datasets. By identifying cold storage candidates and data pruning opportunities, this module helps you shrink your data footprint significantly before migration, saving substantial cloud storage costs and improving database performance.",
          badges: ["Access Metrics", "Storage Optimization"]
        },
        {
          img: showcaseTable,
          title: "Modernization Migration Estimator",
          desc: "Generate data-driven, automated estimations of the migration timeline, implementation effort, and post-migration BTP cloud resource requirements. By leveraging historical project metrics and your unique landscape complexity profile, this tool provides budget sponsors and project managers with a reliable financial and operational planning framework.",
          badges: ["Timeline Estimator", "Resource Config"]
        }
      ]
    },
    cta: {
      title: "Accelerate Your SAP Transformation Journey",
      subtitle: "Empower your business with scalable SAP solutions, intelligent data platforms, and future-ready technologies.",
      primary: "Talk to Our Experts",
      secondary: "Contact Us"
    }
  },
  integration: {
    hero: {
      badge: "FUTURE-READY ENTERPRISE",
      title1: "SAP Integration",
      title2: "Assessment",
      desc: "Simplify Integration. Accelerate Digital Transformation. Modernize your integration landscape with expert assessment and actionable insights. Evaluate existing interfaces, middleware, APIs, and dependencies to plan a smooth migration to SAP Integration Suite with reduced risk, improved performance, and greater business agility.",
      ctaPrimary: "Get Started",
      ctaSecondary: "View Methodology"
    },
    insights: {
      title: "Powerful Insights for Integration Modernization",
      subtitle: "Our assessment delivers comprehensive insights to evaluate your existing integration landscape, reduce migration risks, and build a connected enterprise.",
      cards: [
        {
          title: "Integration Landscape & Performance Analysis",
          desc: "Analyze existing interfaces, middleware, APIs, and system dependencies. Identify performance bottlenecks, redundant interfaces, and optimize processing speed."
        },
        {
          title: "Migration Readiness Assessment",
          desc: "Evaluate migration complexity, technical dependencies, and critical integration paths to the cloud."
        },
        {
          title: "Effort & Cost Estimation",
          desc: "Receive prioritized effort estimates, timelines, resource allocations, and conversion costs."
        },
        {
          title: "Future-Ready Integration Strategy",
          desc: "Modernize integration approaches using APIs, event-driven architecture, and side-by-side extension models."
        }
      ]
    },
    debt: {
      title1: "Reduce Complexity,",
      title2: "Build Connected Enterprises",
      desc: "Our assessment provides a clear roadmap to modernize your integration landscape and accelerate your connectivity journey.",
      bullets: [
        "Streamline interfaces, remove redundant connections, and simplify middleware",
        "Optimize data flows, reduce latency, and improve processing efficiency",
        "Leverage detailed estimates to minimize project risks and plan with confidence"
      ],
      cards: [
        {
          category: "REDUCE COMPLEXITY",
          subtitle: "Simplify connectivity",
          desc: "Streamline point-to-point connections and consolidate middleware interfaces to reduce operations cost."
        },
        {
          category: "PERFORMANCE",
          subtitle: "Improve system performance",
          desc: "Optimize message routing and payload handling to reduce latency and accelerate response times."
        },
        {
          category: "BUSINESS CONTINUITY",
          subtitle: "Strengthen Business Continuity",
          desc: "Build resilient, fault-tolerant integration pipelines that ensure high availability across systems."
        },
        {
          category: "FUTURE-READY PLATFORM",
          subtitle: "Build a connected platform",
          desc: "Leverage API-first, event-driven architectures on modern cloud middleware like SAP Integration Suite."
        }
      ]
    },
    showcase: {
      title: "How Do We Help?",
      subtitle: "We help organizations assess, modernize, and optimize their integration landscape with SAP Integration Suite. Our structured approach simplifies connectivity, reduces migration complexity, enables secure data exchange, and builds a scalable, cloud-ready foundation for future innovation.",
      rows: [
        {
          img: showcasePie,
          title: "Integration Pipeline Analyzer",
          desc: "Map and analyze all active message pipelines, custom adapters, and point-to-point interface topologies across your middleware landscape. By evaluating each interface against SAP Integration Suite standards, it flags unsupported patterns and isolates modernization targets, enabling architects to design a clean, future-proof API-led integration model.",
          badges: ["Pipeline Profiling", "Custom Adapter View"]
        },
        {
          img: showcaseBars,
          title: "Interface Complexity Mapper",
          desc: "Perform deep-level inspections of mapping scripts, custom XSLT/Java mappings, and legacy schemas to determine target translation paths in the SAP Integration Suite. This module generates automated compatibility scores and mapping suggestions, reducing the manual effort required to rebuild complex legacy connections in the cloud.",
          badges: ["Flow Mapping", "Schema Translation"]
        },
        {
          img: solutionsDashboard,
          title: "System Usage & Redundancy Insights",
          desc: "Track real-time message volumes, transmission payloads, peak queue load times, and processing latencies to identify integration bottlenecks and resource constraints. These insights enable platform engineers to size cloud resources accurately, configure optimal auto-scaling rules, and prevent service disruptions during high-traffic periods.",
          badges: ["Load Metrics", "Queue Optimization"]
        },
        {
          img: showcaseTable,
          title: "Modernization Migration Planner",
          desc: "Leverage automated assessment outputs to generate a detailed, phased migration roadmap, including effort estimations, resource planning, and SAP Integration Suite configuration requirements. This planner minimizes project risks by establishing a structured, priority-based transition path that keeps business processes running smoothly.",
          badges: ["Effort Estimator", "Suite Config"]
        }
      ]
    },
    cta: {
      title: "Accelerate Your SAP Integration Journey",
      subtitle: "Build a secure, scalable, and connected enterprise with SAP Integration Suite.",
      primary: "Talk to Our Experts",
      secondary: "Contact Us"
    }
  },
  analytics: {
    hero: {
      badge: "FUTURE-READY ENTERPRISE",
      title1: "SAP Analytics",
      title2: "Readiness Assessment",
      desc: "Transform Your Analytics. Unlock Real-Time Business Insights. Modernize your analytics landscape and transition to SAP Analytics Cloud (SAC) with confidence. Evaluate your existing reporting environment, dashboards, data models, and analytics workflows to gain actionable insights, reduce migration complexity, and build a scalable, cloud-ready analytics platform.",
      ctaPrimary: "Get Started",
      ctaSecondary: "View Methodology"
    },
    insights: {
      title: "Powerful Insights for Analytics Modernization",
      subtitle: "Our SAP Analytics Readiness Assessment provides comprehensive insights to evaluate your analytics landscape, simplify modernization, and accelerate your transition to SAP Analytics Cloud.",
      cards: [
        {
          title: "Analytics Landscape & Usage Analysis",
          desc: "Gain complete visibility into reports, dashboards, analytics assets, and data models. Analyze reporting structures, dashboard usage, data sources, and optimization opportunities."
        },
        {
          title: "SAP Analytics Cloud Readiness",
          desc: "Evaluate how your legacy metadata structures, security profiles, and calculation views translate into native SAP Analytics Cloud features. This check identifies technical compatibility issues, estimates feature parity gaps, and prioritizes integration tasks to ensure a smooth transition to a modern, cloud-native BI platform."
        },
        {
          title: "Effort & Cost Planning",
          desc: "Estimate project effort, implementation timelines, resource requirements, and project costs with confidence."
        },
        {
          title: "Migration Strategy & Roadmap",
          desc: "Receive a structured migration plan with prioritized recommendations, implementation phases, and SAP best practices."
        }
      ]
    },
    debt: {
      title1: "Modernize Analytics,",
      title2: "Enable Smarter Decisions",
      desc: "Our SAP Analytics Readiness Assessment helps organizations modernize reporting, improve analytics performance, and unlock greater business value.",
      bullets: [
        "Simplify transition to SAP Analytics Cloud with a structured strategy",
        "Deliver real-time business insights through optimized dashboards",
        "Identify outdated reports and opportunities to improve reporting efficiency"
      ],
      cards: [
        {
          category: "ACCELERATION",
          subtitle: "Accelerate Modernization",
          desc: "Simplify your transition to SAP Analytics Cloud with a structured migration onboarding strategy."
        },
        {
          category: "DECISION MAKING",
          subtitle: "Improve Decision-Making",
          desc: "Deliver real-time business insights through optimized dashboards and intelligent visualizations."
        },
        {
          category: "OPTIMIZATION",
          subtitle: "Optimize Performance",
          desc: "Identify outdated reports, unused analytics assets, and opportunities to improve reporting efficiency."
        },
        {
          category: "CONFIDENCE",
          subtitle: "Plan with Confidence",
          desc: "Gain accurate migration estimates, implementation guidance, timelines, and resource planning."
        }
      ]
    },
    showcase: {
      title: "How Do We Help?",
      subtitle: "We help organizations modernize their analytics landscape through comprehensive assessments, migration planning, and SAP best practices. Our approach simplifies migration, improves reporting capabilities, enhances data visibility, and builds a secure, scalable analytics platform.",
      rows: [
        {
          img: showcasePie,
          title: "Analytics Landscape Overview",
          desc: "Generate a comprehensive, interactive visual map of your entire analytics footprint, including active reports, legacy dashboards, semantic models, and underlying database connections. This end-to-end mapping helps stakeholders identify functional redundancies, trace data lineage, and establish a clear catalog of assets to migrate to SAP Analytics Cloud.",
          badges: ["Asset View", "Model Overview"]
        },
        {
          img: showcaseBars,
          title: "Reporting & Usage Insights",
          desc: "Analyze report execution frequencies, user engagement metrics, and dashboard access trends to determine the actual business value of each analytics asset. By separating critical executive dashboards from unused or obsolete legacy reports, this analyzer allows you to optimize your reporting environment and focus migration effort only on high-value analytics.",
          badges: ["Usage Analysis", "Optimization Map"]
        },
        {
          img: solutionsDashboard,
          title: "SAP Analytics Cloud Readiness",
          desc: "Evaluate migration readiness, system compatibility, and cloud integration priorities.",
          badges: ["Compatibility Check", "Cloud Readiness"]
        },
        {
          img: showcaseTable,
          title: "Migration Roadmap",
          desc: "Deliver a prioritized, step-by-step roadmap that outlines custom implementation phases, data migration timelines, and change management strategies for SAP Analytics Cloud. This framework helps teams track transition progress, manage resource allocation, and ensure business continuity throughout the analytics modernization journey.",
          badges: ["Phase Tracker", "Planning Insights"]
        }
      ]
    },
    cta: {
      title: "Schedule Your SAP Analytics Assessment",
      subtitle: "Unlock the Next Generation of Business Analytics. Gain real-time insights, smarter reporting, and a future-ready analytics platform with our SAP Analytics Readiness Assessment.",
      primary: "Get in Touch",
      secondary: "Talk to Our Experts"
    }
  },
  planning: {
    hero: {
      badge: "FUTURE-READY ENTERPRISE",
      title1: "SAP Planning",
      title2: "Readiness Assessment",
      desc: "Transform Planning with Intelligent, Cloud-Based Solutions. Modernize your planning environment and transition to SAP Analytics Cloud Planning with confidence. Evaluate planning models, business processes, data integration, and reporting capabilities to improve forecasting, streamline planning, and build a scalable, cloud-ready planning platform.",
      ctaPrimary: "Get Started",
      ctaSecondary: "View Methodology"
    },
    insights: {
      title: "Powerful Insights for Planning Modernization",
      subtitle: "Our SAP Planning Readiness Assessment provides comprehensive insights to evaluate your planning environment, streamline modernization, and prepare your organization for SAP Analytics Cloud Planning.",
      cards: [
        {
          title: "Planning Landscape & Process Analysis",
          desc: "Evaluate planning models, business processes, data structures, and workflows. Analyze budgeting, forecasting, and planning workflows to improve operational efficiency."
        },
        {
          title: "Migration Readiness Assessment",
          desc: "Assess system dependencies, integrations, migration complexity, and key optimization opportunities for cloud planning."
        },
        {
          title: "Effort & Resource Planning",
          desc: "Estimate project effort, timelines, implementation costs, and resource requirements."
        },
        {
          title: "Implementation Roadmap",
          desc: "Receive a phased migration strategy with best practices, project milestones, and actionable recommendations."
        }
      ]
    },
    debt: {
      title1: "Improve Planning,",
      title2: "Drive Better Business Decisions",
      desc: "Our SAP Planning Readiness Assessment helps organizations modernize planning processes, improve forecasting accuracy, and build a scalable planning environment.",
      bullets: [
        "Simplify budgeting, forecasting, and planning workflows while enhancing collaboration",
        "Leverage centralized planning and real-time insights to improve business decisions",
        "Gain accurate estimates for project effort, timelines, costs, and resource planning"
      ],
      cards: [
        {
          category: "EFFICIENCY",
          subtitle: "Improve Planning Efficiency",
          desc: "Streamline forecasting models and coordinate budgeting processes across all business segments."
        },
        {
          category: "SMARTER DECISIONS",
          subtitle: "Enable Smarter Decisions",
          desc: "Make decisions backed by centralized cloud planning and real-time forecast data."
        },
        {
          category: "RISK REDUCTION",
          subtitle: "Reduce Migration Risks",
          desc: "Discover integrations, planning gaps, and custom calculations early to ease transitions."
        },
        {
          category: "FUTURE-READY PLATFORM",
          subtitle: "Build a cloud planning platform",
          desc: "Deploy secure, scalable models utilizing SAP Analytics Cloud Planning templates."
        }
      ]
    },
    showcase: {
      title: "How Do We Help?",
      subtitle: "We help organizations modernize their planning landscape through comprehensive assessments, migration planning, and SAP best practices. Our structured approach simplifies planning modernization, improves forecasting, enhances collaboration, and builds a secure, scalable planning platform.",
      rows: [
        {
          img: showcasePie,
          title: "Planning Landscape Overview",
          desc: "Map out your entire planning ecosystem, including budgeting worksheets, forecasting models, operational workflows, and data sources, in a single consolidated interface. This unified view helps finance and operational leaders identify process disconnects, data silos, and structural bottlenecks that slow down the enterprise planning cycle.",
          badges: ["Model View", "Workflow Overview"]
        },
        {
          img: showcaseBars,
          title: "Budgeting & Forecast Analysis",
          desc: "Analyze the efficiency of your current budgeting cycles, collaborative forecasting methods, and manual data-reconciliation efforts. By identifying process delays and data inaccuracies, this analysis provides the blueprint for automating planning workflows and establishing rolling forecasts in SAP Analytics Cloud Planning.",
          badges: ["Budget Analysis", "Forecast Method"]
        },
        {
          img: solutionsDashboard,
          title: "Migration Readiness",
          desc: "Assess the complexity of custom allocation rules, currency conversion models, and data integrations in your legacy planning systems. This readiness check flags technical dependencies, maps database schemas, and prioritizes implementation tasks to ensure a low-risk, high-performance cloud deployment.",
          badges: ["Complexity Assessment", "Priorities View"]
        },
        {
          img: showcaseTable,
          title: "Planning Roadmap",
          desc: "Track modernization phases, recommendation tasks, and project planning timelines. This roadmap aligns technical milestones with finance and operations targets, ensuring your team achieves early, measurable improvements in planning agility and forecasting accuracy.",
          badges: ["Phase Tracker", "Timeline Planning"]
        }
      ]
    },
    cta: {
      title: "Schedule Your SAP Planning Readiness Assessment",
      subtitle: "Take the First Step Toward Smarter, Agile Business Planning. Empower your organization with intelligent planning, accurate forecasting, and a future-ready strategy powered by SAP Analytics Cloud Planning.",
      primary: "Contact Us Today",
      secondary: "Talk to Our Experts"
    }
  },
  s4hana: {
    hero: {
      badge: "FUTURE-READY ENTERPRISE",
      title1: "SAP S/4HANA",
      title2: "Migration Services",
      desc: "Modernize your SAP landscape with a seamless migration to SAP S/4HANA. We help you assess, plan, and execute a secure, scalable, and future-ready transformation.",
      ctaPrimary: "Get Started",
      ctaSecondary: "View Methodology"
    },
    insights: {
      title: "Powerful Insights for Migration",
      subtitle: "Prepare your enterprise for SAP S/4HANA with structured assessments, proven methodologies, and a roadmap that minimizes risk while accelerating transformation.",
      cards: [
        {
          title: "Comprehensive Migration Assessment",
          desc: "Assess your current SAP landscape, business processes, custom developments, integrations, and dependencies to define the right migration strategy."
        },
        {
          title: "System Readiness",
          desc: "Evaluate technical readiness, migration complexity, and business impacts before implementation."
        },
        {
          title: "Effort & Resource Planning",
          desc: "Estimate migration effort, project duration, required skills, budgets, and resource allocation."
        },
        {
          title: "Migration Strategy & Roadmap",
          desc: "Create a structured migration roadmap with implementation phases, timelines, resource planning, and risk mitigation."
        }
      ]
    },
    debt: {
      title1: "Why Migrate to",
      title2: "SAP S/4HANA?",
      desc: "Modernizing to SAP S/4HANA helps organizations simplify operations and build a future-ready digital enterprise.",
      bullets: [
        "Reduce operational expenses with a simplified SAP landscape",
        "Respond faster to changing business demands with a flexible digital core",
        "Connect enterprise data for real-time visibility and collaboration"
      ],
      cards: [
        {
          category: "AUTOMATION",
          subtitle: "Process Automation",
          desc: "Automate budgeting, sales, and supply chain workflows to improve efficiency across the organization."
        },
        {
          category: "SECURITY",
          subtitle: "Enhanced Security",
          desc: "Strengthen governance and compliance with modern SAP security configurations."
        },
        {
          category: "INTEGRATION",
          subtitle: "Seamless Integration",
          desc: "Connect SAP and third-party applications using modern APIs and Integration Suite."
        },
        {
          category: "PERFORMANCE",
          subtitle: "Real-Time Performance",
          desc: "Leverage SAP HANA database for faster transactional processing and real-time operational analytics."
        }
      ]
    },
    showcase: {
      title: "Our Migration Process",
      subtitle: "We simplify your journey to SAP S/4HANA with structured assessments, migration planning, testing, and post-go-live optimization.",
      rows: [
        {
          img: showcasePie,
          title: "SAP Landscape Assessment",
          desc: "Conduct a technical audit of your existing SAP ECC landscape, custom code footprint, database sizing, and system integrations to define your transformation goals. This assessment identifies customization cleanup opportunities, evaluates database readiness for SAP HANA, and establishes the optimal path toward a Clean Core architecture.",
          badges: ["System Assessment", "Landscape View"]
        },
        {
          img: showcaseBars,
          title: "Conversion Project Planning",
          desc: "Establish a detailed, risk-mitigated migration plan that outlines conversion phases, cutover schedules, resource allocation, and business continuity guidelines. By structuring the project into logical milestones, this roadmap ensures alignment across technical, functional, and business teams, minimizing operational downtime during the transition.",
          badges: ["Phase Roadmap", "Milestone Planning"]
        },
        {
          img: solutionsDashboard,
          title: "Data Migration & Validation",
          desc: "Securely extract, cleanse, and load legacy master and transactional data into the SAP S/4HANA environment using automated validation rules. This process maintains data integrity, resolves data quality issues, and validates downstream integration touchpoints to ensure business operations function seamlessly from day one.",
          badges: ["Data Validation", "Schema Check"]
        },
        {
          img: showcaseTable,
          title: "Post-Go-Live Support & Optimization",
          desc: "Ensure long-term system stability and performance through post-migration hypercare support, proactive database tuning, and continuous process monitoring. Our experts help you identify system bottlenecks, drive user adoption, and leverage new S/4HANA capabilities to maximize the return on your ERP investment.",
          badges: ["Performance Monitor", "Go-Live Support"]
        }
      ]
    },
    cta: {
      title: "Ready to Transform Your SAP Landscape?",
      subtitle: "Modernize your SAP environment with expert guidance, structured migration planning, and SAP best practices.",
      primary: "Contact Our Experts",
      secondary: "Schedule a Consultation"
    }
  },
  datacloud: {
    hero: {
      badge: "FUTURE-READY ENTERPRISE",
      title1: "SAP Business Data",
      title2: "Cloud",
      desc: "Connect, govern, and analyze enterprise data with SAP Business Data Cloud. Unlock real-time insights, AI-powered analytics, and a scalable foundation for smarter business decisions.",
      ctaPrimary: "Get Started",
      ctaSecondary: "View Solutions"
    },
    insights: {
      title: "Powerful Insights for Data Modernization",
      subtitle: "Our SAP Business Data Cloud solutions unify enterprise data, strengthen governance, and accelerate AI-driven decision-making.",
      cards: [
        {
          title: "Enterprise Data Integration & Automation",
          desc: "Unify SAP and non-SAP data into a trusted enterprise platform. Automate integration, transformation, and business workflows."
        },
        {
          title: "Real-Time Data Governance",
          desc: "Maintain secure, compliant, high-quality, and governed enterprise data across the cloud."
        },
        {
          title: "AI-Driven Analytics",
          desc: "Transform enterprise data into intelligent business insights with predictive analytics."
        },
        {
          title: "Scalable Cloud Platform",
          desc: "Build a secure, cloud-native, and future-ready enterprise platform prepared for future business growth."
        }
      ]
    },
    debt: {
      title1: "Connected Enterprise Data,",
      title2: "Smarter Decision-Making",
      desc: "Our services evaluate your current data landscape, integration readiness, and analytics capabilities to build a strategic roadmap.",
      bullets: [
        "Access trusted real-time analytics for instant operational visibility",
        "Optimize cloud resources, streamline databases, and simplify infrastructure",
        "Create a single source of truth across SAP and non-SAP systems"
      ],
      cards: [
        {
          category: "INSIGHTS",
          subtitle: "Faster Business Insights",
          desc: "Make decisions backed by real-time operations dashboards and trusted analytics."
        },
        {
          category: "COST REDUCTION",
          subtitle: "Lower Operational Costs",
          desc: "Optimize cloud storage allocations, reduce compute load, and simplify data structures."
        },
        {
          category: "DECISION MAKING",
          subtitle: "Smarter Decision-Making",
          desc: "Leverage AI-driven analytics models and automated workflows directly on your data cloud."
        },
        {
          category: "SCALABILITY",
          subtitle: "Secure & Scalable Platform",
          desc: "Build a governed, future-ready enterprise cloud environment that scales easily."
        }
      ]
    },
    showcase: {
      title: "How Do We Help?",
      subtitle: "We help organizations assess, implement, integrate, and optimize SAP Business Data Cloud. Our services simplify data management, strengthen governance, enable AI-powered analytics, and create a scalable platform for long-term digital transformation.",
      rows: [
        {
          img: showcasePie,
          title: "Workday Data Integration",
          desc: "Unify Workday human resource structures, payroll details, and employee organizational data with core SAP financial datasets to achieve real-time visibility. This seamless integration enables granular workforce cost analysis, automated financial allocations, and data-driven headcount planning directly inside your consolidated business intelligence dashboards.",
          badges: ["Workforce Analytics", "Cost Visibility"]
        },
        {
          img: showcaseBars,
          title: "Salesforce CRM Integration",
          desc: "Connect Salesforce CRM opportunities, pipelines, and account histories with SAP ERP order management and inventory data. This bridge enables real-time order-to-cash visibility, unified revenue forecasting, and proactive supply chain planning, eliminating critical information silos between sales and operations teams.",
          badges: ["Pipeline Visibility", "Revenue Forecast"]
        },
        {
          img: solutionsDashboard,
          title: "ServiceNow Operations Integration",
          desc: "Integrate ServiceNow IT service management metrics, operational assets, and support workflows with SAP data for end-to-end service and operational analytics. This alignment enables end-to-end service delivery costing, predictive maintenance analytics, and automated IT resource allocation that optimizes operational efficiency.",
          badges: ["Incident Visibility", "Asset Management"]
        },
        {
          img: showcaseTable,
          title: "Project Controls Dashboard",
          desc: "Monitor project budget execution, baseline variances, resource utilization rates, and cost overrun risks in a single, unified analytics workspace. This dashboard enables real-time scenario simulation, automated cost-to-complete forecasting, and proactive resource reallocation to keep capital projects on time and within budget limits.",
          badges: ["Scenario Planning", "Cost Control"]
        }
      ]
    },
    cta: {
      title: "Ready to Modernize Your Enterprise Data?",
      subtitle: "Unlock the Full Potential of SAP Business Data Cloud. Transform enterprise data into actionable insights with intelligent analytics, secure governance, and AI-powered innovation.",
      primary: "Contact Our Experts",
      secondary: "Schedule a Consultation"
    }
  },
  pipo: {
    hero: {
      badge: "FUTURE-READY ENTERPRISE",
      title1: "PIPO to SAP",
      title2: "Integration Suite",
      desc: "Connect Your Enterprise with Intelligent Integration. Connect SAP and non-SAP applications, cloud platforms, on-premises systems, and business processes using SAP Integration Suite. Build secure, scalable, and real-time integrations that simplify operations, enable automation, and accelerate digital transformation.",
      ctaPrimary: "Get Started",
      ctaSecondary: "View Methodology"
    },
    insights: {
      title: "Powerful Integration Capabilities",
      subtitle: "Connect cloud, on-premises, and hybrid applications with secure, scalable integrations and intelligent workflows.",
      cards: [
        {
          title: "Cloud Integration & Event Mesh",
          desc: "Seamlessly connect cloud, on-premises, and hybrid applications with secure, scalable integrations. Enable event-driven architectures for responsive, real-time communication across distributed applications."
        },
        {
          title: "API Management",
          desc: "Design, publish, secure, monitor, and govern APIs to improve connectivity and accelerate innovation."
        },
        {
          title: "Integration Assessment",
          desc: "Evaluate your current integration landscape, identify modernization opportunities, and define a clear migration roadmap."
        },
        {
          title: "Pre-built Content & Integration Advisor",
          desc: "Leverage AI-assisted mapping recommendations and pre-built integration content to reduce manual effort, improve quality, and accelerate implementations."
        }
      ]
    },
    debt: {
      title1: "Why SAP",
      title2: "Integration Suite?",
      desc: "Modernize your integration landscape with a cloud-native platform designed to simplify connectivity and improve operational efficiency.",
      bullets: [
        "Connect SAP and non-SAP systems seamlessly across cloud and local premises",
        "Automate complex end-to-end business workflows to eliminate manual data entries",
        "Scale operations dynamically with high-volume message throughput capabilities"
      ],
      cards: [
        {
          category: "CONNECTIVITY",
          subtitle: "Connect SAP & Non-SAP Systems",
          desc: "Easily link heterogeneous software architectures using standardized adapters and cloud APIs."
        },
        {
          category: "AUTOMATION",
          subtitle: "Automate Business Workflows",
          desc: "Automate complex business processes and document transfers to eliminate manual data entry steps."
        },
        {
          category: "SPEED",
          subtitle: "Pre-built Content Acceleration",
          desc: "Leverage thousands of pre-packaged integration flows and APIs to speed up deployments."
        },
        {
          category: "GOVERNANCE",
          subtitle: "Strengthen security & compliance",
          desc: "Deploy state-of-the-art security patterns, encrypted pipelines, and comprehensive audit logs."
        }
      ]
    },
    showcase: {
      title: "How We Help",
      subtitle: "We help organizations modernize their integration landscape by assessing existing interfaces, designing scalable integration architectures, and implementing SAP Integration Suite using SAP best practices. Our services simplify complex integrations, improve operational efficiency, and build a connected, future-ready enterprise.",
      rows: [
        {
          img: showcasePie,
          title: "Open Connectors Dashboard",
          desc: "Leverage pre-built adapters and standard APIs to connect your SAP system to over 170 popular third-party cloud applications, including Salesforce, Workday, ServiceNow, and HubSpot. This simplifies connectivity, eliminates custom-built adapters, and significantly reduces the time-to-value for enterprise cloud integration projects.",
          badges: ["Connector Portfolio", "API Manager"]
        },
        {
          img: showcaseBars,
          title: "Trading Partner Management",
          desc: "Centralize and automate your business-to-business (B2B) integrations, electronic data exchange (EDI), and partner onboarding workflows. This module ensures secure, standard-compliant communication with suppliers, distributors, and customers, improving supply chain visibility while reducing manual document processing effort.",
          badges: ["B2B Automation", "Partner Config"]
        },
        {
          img: solutionsDashboard,
          title: "Integration Advisor Tool",
          desc: "Utilize machine-learning-driven recommendations and pre-mapped industry templates to design interface connections and data transformations. This AI-assisted advisor significantly accelerates integration design, reduces human configuration errors, and ensures high-quality interface definitions across your hybrid landscape.",
          badges: ["AI Advisor", "Schema Map"]
        },
        {
          img: showcaseTable,
          title: "Interface Assessment Dashboard",
          desc: "Conduct a technical audit of your existing PIPO channels, custom mapping scripts, and legacy adapter configurations to evaluate migration complexity. This dashboard generates automated readiness scores and migration roadmap recommendations to ensure a smooth transition to the SAP Integration Suite.",
          badges: ["Legacy Migration", "Readiness Check"]
        }
      ]
    },
    cta: {
      title: "Accelerate Your Integration Journey",
      subtitle: "Build a connected, scalable, and intelligent enterprise with SAP Integration Suite.",
      primary: "Contact Our Experts",
      secondary: "Schedule a Consultation"
    }
  }
,
  cleancore_main: {
    hero: {
      badge: "FUTURE-READY ENTERPRISE",
      title1: "Clean Core",
      title2: "Strategy",
      desc: "Simplify your SAP environment with a Clean Core strategy built for innovation and growth. Reduce complexity, improve performance, and prepare your business for the future.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Talk to Our SAP Experts"
    },
    insights: {
      title: "Benefits of a Clean Core",
      subtitle: "A Clean Core strategy helps organizations build a future-ready SAP environment that is easier to maintain, faster to upgrade, and better equipped to support cloud adoption.",
      cards: [
        { title: "Ensure System Stability", desc: "Maintain a reliable and standardized SAP environment by reducing unnecessary customizations." },
        { title: "Improve Scalability & Flexibility", desc: "Adopt standard SAP capabilities and cloud-based extensions that allow your business to scale efficiently." },
        { title: "Reduce Total Cost of Ownership", desc: "Minimize maintenance efforts, lower operational costs, and reduce technical debt." },
        { title: "Accelerate Business Agility", desc: "Respond faster to market changes by enabling quicker SAP upgrades and continuous innovation." }
      ]
    },
    debt: {
      title1: "Reduce Technical Complexity,",
      title2: "Maximize Business Value",
      desc: "Transform your SAP landscape with a modern Clean Core strategy that simplifies operations, reduces complexity, and accelerates innovation.",
      bullets: [
        "SAP Best Practice–Driven Approach",
        "Tailored Clean Core Strategy",
        "SAP S/4HANA & SAP BTP Expertise"
      ],
      cards: [
        { category: "CUSTOMER-FOCUSED", subtitle: "Delivery Model", desc: "Provide ongoing optimization, system monitoring, and strategic guidance." },
        { category: "END-TO-END", subtitle: "Implementation", desc: "From assessment and planning to implementation, testing, and post-go-live optimization." },
        { category: "STRATEGY", subtitle: "Assessment & Strategy", desc: "Evaluate your current SAP landscape and identify unnecessary customizations." },
        { category: "BEST PRACTICES", subtitle: "SAP Expertise", desc: "Follow SAP-recommended best practices to build standardized environments." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya?",
      subtitle: "We help organizations simplify their SAP landscape by adopting Clean Core principles that support long-term innovation and sustainable growth.",
      rows: [
        { img: showcasePie, title: "SAP Best Practice Expertise", desc: "Adopt SAP-recommended standard business processes and configuration models to eliminate custom core developments. Our experts align your system architecture with industry best practices, creating a standardized, lean environment that simplifies maintenance, reduces custom code debt, and ensures seamless upgrades.", badges: ["Best Practices", "Standardization"] },
        { img: showcaseBars, title: "Comprehensive Assessment", desc: "Analyse your entire SAP landscape — custom code, modifications, third-party add-ons, and integration dependencies — using a structured scoring model that quantifies technical debt and identifies the highest-priority remediation targets. The resulting assessment report gives executives a clear business case and gives architects a precise technical blueprint, so both sides align on Clean Core goals before any implementation work begins.", badges: ["Assessment", "Planning"] },
        { img: solutionsDashboard, title: "End-to-End Implementation", desc: "Manage the full lifecycle of your Clean Core modernization — from initial gap analysis and code refactoring through validation testing and cutover support. This structured implementation methodology ensures that custom enhancements are migrated to SAP BTP safely, maintaining business continuity at every stage.", badges: ["Implementation", "Optimization"] },
        { img: showcaseTable, title: "Continuous Innovation & Support", desc: "Secure your Clean Core gains over the long term with proactive transport compliance checks, continuous system performance monitoring, and regular roadmap updates. Our managed services ensure that new developments adhere to clean-core principles, supporting sustainable innovation as your business evolves.", badges: ["Innovation", "Support"] }
      ]
    },
    cta: {
      title: "Ready to Simplify Your SAP Landscape?",
      subtitle: "Empower your business with a Clean Core strategy that enhances agility, improves performance, and prepares your organization for the future.",
      primary: "Contact Our Experts",
      secondary: "Ask Our Experts"
    }
  },
  s4hana_main: {
    hero: {
      badge: "INTELLIGENT ERP",
      title1: "SAP S/4HANA",
      title2: "Transformation",
      desc: "Transform your business with SAP S/4HANA and unlock intelligent, real-time enterprise management. Drive innovation, improve efficiency, and build a secure, future-ready digital enterprise.",
      ctaPrimary: "Get Started",
      ctaSecondary: "View Methodology"
    },
    insights: {
      title: "Why Choose SAP S/4HANA?",
      subtitle: "SAP S/4HANA provides an intelligent, integrated ERP platform that enables organizations to simplify operations, improve productivity, and make data-driven decisions.",
      cards: [
        { title: "Real-Time Business Insights", desc: "Leverage in-memory computing to process large volumes of business data instantly." },
        { title: "Optimized Business Processes", desc: "Streamline critical functions like finance, procurement, and supply chain through automation." },
        { title: "Scalable Deployment", desc: "Choose cloud, on-premise, or hybrid deployment models while ensuring scalability." },
        { title: "Intelligent Automation & AI", desc: "Automate routine tasks using embedded AI, machine learning, and predictive capabilities." }
      ]
    },
    debt: {
      title1: "Powering the Next Generation",
      title2: "of Intelligent Enterprise",
      desc: "SAP S/4HANA empowers organizations with an intelligent ERP platform that simplifies business operations and enhances decision-making.",
      bullets: [
        "Enhanced Operational Efficiency",
        "Real-Time Business Intelligence",
        "Lower Total Cost of Ownership"
      ],
      cards: [
        { category: "EFFICIENCY", subtitle: "Operational Efficiency", desc: "Automate workflows and improve productivity across your business." },
        { category: "INSIGHTS", subtitle: "Real-Time Insights", desc: "Make faster decisions with live analytics and business intelligence." },
        { category: "COST OPTIMIZATION", subtitle: "Cost Optimization", desc: "Reduce operational costs and maximize your ERP investment." },
        { category: "FUTURE-READY", subtitle: "Future-Ready ERP", desc: "Build a scalable platform for continuous innovation and business growth." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya?",
      subtitle: "We help organizations successfully modernize their ERP landscape with SAP S/4HANA by combining SAP best practices and industry expertise.",
      rows: [
        { img: showcasePie, title: "Expert SAP S/4HANA Consulting", desc: "Design a custom S/4HANA migration strategy aligned to your unique business model, data complexity, and operational goals. Our senior consultants evaluate greenfield, brownfield, and selective-data-transition options, creating a clear architectural roadmap that positions your organization for long-term growth and digital innovation.", badges: ["Consulting", "Strategy"] },
        { img: showcaseBars, title: "Structured Implementation", desc: "Execute your ERP transformation using a proven, Activate-aligned implementation framework that covers system build, code remediation, parallel-run testing, and cutover execution. This structured approach manages project risks proactively, coordinates cross-functional milestones, and ensures a secure, validated go-live.", badges: ["Implementation", "Deployment"] },
        { img: solutionsDashboard, title: "End-to-End SAP Services", desc: "Access a full suite of SAP conversion services, including custom code optimization, data cleansing, functional process modernization, and third-party integration mapping. We manage every phase of the technical and functional workstream under a single, unified service model, reducing coordination complexity and delivery risk.", badges: ["End-to-End", "Services"] },
        { img: showcaseTable, title: "Continuous Optimization", desc: "Maximize the ongoing value of your S/4HANA platform through continuous performance tuning, regular release upgrade support, and the adoption of emerging features like embedded AI and real-time operational analytics. Our support model helps your business stay competitive, standardized, and audit-ready at all times.", badges: ["Optimization", "Innovation"] }
      ]
    },
    cta: {
      title: "Transform Your Business with SAP S/4HANA",
      subtitle: "Accelerate your digital transformation with intelligent ERP solutions designed to streamline operations and drive sustainable business growth.",
      primary: "Ask Our Experts",
      secondary: "Schedule Consultation"
    }
  },
  sac_main: {
    hero: {
      badge: "DATA-DRIVEN INSIGHTS",
      title1: "SAP Analytics Cloud",
      title2: "Services",
      desc: "Unlock the full potential of your enterprise data with intelligent analytics, real-time insights, and cloud-based planning. Build a connected, data-driven enterprise ready for the future.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Discover More"
    },
    insights: {
      title: "Features of SAP Analytics Cloud",
      subtitle: "SAP Analytics Cloud combines advanced analytics, planning, and business intelligence in a single cloud platform.",
      cards: [
        { title: "Business Intelligence", desc: "Interactive dashboards and real-time reporting for informed decision-making." },
        { title: "AI-Powered Analytics", desc: "Predict trends and uncover insights with intelligent analytics." },
        { title: "Integrated Planning", desc: "Connect financial and operational planning on a unified platform." },
        { title: "Data Integration", desc: "Unify SAP and non-SAP data for a complete business view." }
      ]
    },
    debt: {
      title1: "Transform Data into",
      title2: "Intelligent Business Decisions",
      desc: "Empower your organization with SAP Analytics Cloud to unify planning, analytics, and business intelligence.",
      bullets: [
        "Real-Time Business Insights",
        "AI-Powered Intelligence",
        "Secure & Governed Analytics"
      ],
      cards: [
        { category: "REAL-TIME", subtitle: "Real-Time Insights", desc: "Monitor business performance with live dashboards and actionable analytics." },
        { category: "AI INTELLIGENCE", subtitle: "AI-Powered Intelligence", desc: "Improve forecasting and decision-making with predictive analytics." },
        { category: "UNIFIED DATA", subtitle: "Unified Data Platform", desc: "Connect SAP and non-SAP data for a complete business view." },
        { category: "COLLABORATION", subtitle: "Collaborative Analytics", desc: "Enable teams to work together with shared insights and planning." }
      ]
    },
    showcase: {
      title: "Why Implement SAC with Anshiya?",
      subtitle: "We help organizations successfully adopt SAP Analytics Cloud by delivering tailored solutions aligned with business objectives.",
      rows: [
        { img: showcasePie, title: "Assessment & Strategy Development", desc: "Create a clear roadmap for SAP Analytics Cloud adoption aligned to your business strategy, data maturity, and analytics priorities. Anshiya conducts a thorough current-state assessment covering data sources, existing BI tools, planning processes, and user personas, translating findings into a phased adoption roadmap that maximises time-to-value and minimises implementation risk across your SAC rollout programme.", badges: ["Strategy", "Assessment"] },
        { img: showcaseBars, title: "End-to-End Implementation", desc: "Deploy SAP Analytics Cloud across your organisation with proven implementation methodology that covers data modelling, story design, security setup, and user acceptance testing. Anshiya's certified SAC consultants manage the full delivery lifecycle — from initial environment configuration through end-user training — ensuring smooth adoption, minimal business disruption, and rapid realisation of the analytics value your organisation invested in the platform to achieve.", badges: ["Implementation", "Deployment"] },
        { img: solutionsDashboard, title: "System Integration & Data Migration", desc: "Connect SAP Analytics Cloud to SAP S/4HANA, BW/4HANA, and third-party data sources through Live Data Connections and Import Data pipelines that deliver trusted, governance-compliant analytics. Anshiya's integration specialists manage data extraction, transformation, and quality validation to ensure every SAC model reflects accurate, timely business data that analysts and planners can rely on confidently for critical financial and operational decisions.", badges: ["Integration", "Migration"] },
        { img: showcaseTable, title: "Custom Dashboards & Analytics", desc: "Design interactive SAC stories and dashboards tailored to each stakeholder audience — from executive KPI scorecards through operational drill-down reports — applying UX best practices that maximise user engagement and adoption. Anshiya's analytics designers collaborate directly with business users during iterative design sprints, incorporating real feedback to produce dashboards that finance, supply chain, and sales teams genuinely use and value in their daily decision-making workflows.", badges: ["Dashboards", "Reporting"] }
      ]
    },
    cta: {
      title: "Unlock Smarter Decisions with SAC",
      subtitle: "Transform your enterprise data into actionable insights with intelligent analytics, interactive dashboards, and collaborative planning.",
      primary: "Contact Our Experts",
      secondary: "Talk to Our Experts"
    }
  },
  lob_btp: {
    hero: {
      badge: "ENTERPRISE EXTENSIONS",
      title1: "Line of Business Enhancements",
      title2: "on SAP BTP",
      desc: "Extend your SAP applications with intelligent, scalable, and cloud-native business solutions. Drive innovation, automate processes, and enhance business performance with SAP BTP.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Learn More"
    },
    insights: {
      title: "Extend SAP Applications Intelligently",
      subtitle: "Modernize your business processes with SAP BTP extensions that improve efficiency while preserving a Clean Core architecture.",
      cards: [
        { title: "Business Application Extensions", desc: "Enhance SAP applications without modifying the ERP core." },
        { title: "Reusable Business Services", desc: "Accelerate development with pre-built workflows and reusable components." },
        { title: "Low-Code Development", desc: "Build applications quickly using SAP Build and low-code tools." },
        { title: "Enterprise Integration", desc: "Connect SAP and third-party systems through secure APIs and integrations." }
      ]
    },
    debt: {
      title1: "Accelerate Innovation with",
      title2: "SAP BTP Enhancements",
      desc: "Unlock the full potential of your SAP landscape with cloud-native enhancements that improve business performance.",
      bullets: [
        "Accelerated Business Innovation",
        "Greater Business Agility",
        "Maximize SAP Investments"
      ],
      cards: [
        { category: "INNOVATION", subtitle: "Accelerated Innovation", desc: "Deliver new business applications and enhancements faster." },
        { category: "AGILITY", subtitle: "Business Agility", desc: "Respond quickly to changing business requirements with flexible solutions." },
        { category: "INVESTMENTS", subtitle: "Maximize SAP Investments", desc: "Extend SAP capabilities while preserving a Clean Core architecture." },
        { category: "FUTURE-READY", subtitle: "Future-Ready Platform", desc: "Build scalable, secure, and cloud-native solutions for long-term growth." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for SAP BTP?",
      subtitle: "We help organizations extend their SAP landscape with intelligent, cloud-native solutions built on SAP BTP.",
      rows: [
        { img: showcasePie, title: "Innovation Assessment & Strategy", desc: "Evaluate your specific line-of-business requirements and identify the most effective SAP BTP extension pattern — Key User Extensibility, Side-by-Side, or Developer Extensibility — through structured workshops that align business stakeholders and architects on scope, approach, and expected outcomes before any development investment is committed.", badges: ["Assessment", "Strategy"] },
        { img: showcaseBars, title: "Custom Application Development", desc: "Design and deploy production-grade SAP BTP extensions using CAP, SAP Fiori Elements, and Integration Suite, following SAP's recommended architecture patterns that preserve Clean Core compliance and ensure forward compatibility with future S/4HANA releases. Each extension is delivered through a governed development process including code review, security testing, and performance validation before production deployment.", badges: ["Development", "Customization"] },
        { img: solutionsDashboard, title: "Enterprise Integration Services", desc: "Connect BTP extensions seamlessly to SAP S/4HANA, SuccessFactors, and third-party systems through pre-built Integration Suite adapters and event-driven architectures that maintain real-time data consistency without impacting SAP core performance. Anshiya's integration architects design resilient, observable integration patterns backed by automated CI/CD pipelines that enable safe, frequent extension updates throughout the operational lifecycle.", badges: ["Integration", "APIs"] },
        { img: showcaseTable, title: "Continuous Support & Optimization", desc: "Protect your SAP BTP extension investment through a comprehensive Application Managed Services programme offering 24/7 incident support, proactive performance monitoring, SAP release-compatibility validation, and structured enhancement cycles driven by evolving business requirements. Anshiya's dedicated support team ensures extensions remain current, performant, and aligned with your organisation's strategic SAP roadmap over the long term.", badges: ["Support", "Optimization"] }
      ]
    },
    cta: {
      title: "Innovate Faster with SAP BTP",
      subtitle: "Empower your organization with intelligent SAP BTP solutions that simplify business processes and improve operational efficiency.",
      primary: "Contact Our Experts",
      secondary: "Talk to Our Experts"
    }
  },
  ams: {
    hero: {
      badge: "RELIABLE OPERATIONS",
      title1: "Application",
      title2: "Managed Services",
      desc: "Keep your SAP landscape secure, optimized, and future-ready with proactive support, continuous monitoring, and performance optimization tailored to your business needs.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Explore Services"
    },
    insights: {
      title: "Our Managed Services Offerings",
      subtitle: "Keep your SAP landscape secure, stable, and optimized with our proactive support and ongoing improvements.",
      cards: [
        { title: "Technical Support", desc: "Proactive monitoring, maintenance, and performance optimization." },
        { title: "Functional Support", desc: "Business process optimization and SAP application enhancements." },
        { title: "SAP Basis Administration", desc: "System monitoring, upgrades, security, and user management." },
        { title: "Application Maintenance", desc: "Continuous support and enhancement for SAP applications." }
      ]
    },
    debt: {
      title1: "Maximize the Value of",
      title2: "Your SAP Investment",
      desc: "Modern businesses require SAP systems that are secure, reliable, and continuously optimized. Partner with Anshiya to streamline your operations.",
      bullets: [
        "Cost-Effective SAP Support",
        "Proactive Monitoring & Support",
        "Scalable & Future-Ready Solutions"
      ],
      cards: [
        { category: "END-TO-END", subtitle: "End-to-End Managed Support", desc: "Comprehensive SAP management, monitoring, and optimization services." },
        { category: "ON-DEMAND", subtitle: "On-Demand SAP Support", desc: "Expert assistance for projects, upgrades, and technical challenges." },
        { category: "AUGMENTATION", subtitle: "Staff Augmentation", desc: "Extend your team with experienced SAP professionals." },
        { category: "OPTIMIZATION", subtitle: "Application Optimization", desc: "Improve SAP performance, usability, and business efficiency." }
      ]
    },
    showcase: {
      title: "Our Approach to Managed Services",
      subtitle: "We follow a structured and proactive service delivery approach to ensure your SAP environment remains secure and optimized.",
      rows: [
        { img: showcasePie, title: "Assessment & Planning", desc: "Begin each managed services engagement with a thorough assessment of your SAP landscape — covering system health, custom code inventory, interface complexity, and support team maturity — to design a bespoke AMS model with clearly defined service tiers, SLA commitments, and escalation protocols that align precisely with your operational risk tolerance and business-continuity requirements.", badges: ["Assessment", "Strategy"] },
        { img: showcaseBars, title: "Seamless Implementation", desc: "Transition to Anshiya's managed services model through a structured knowledge-transfer programme that documents system configurations, key contacts, escalation paths, and business-critical processes before the live service start date. Our onboarding methodology minimises the disruption and knowledge loss typically associated with support model transitions, ensuring service quality and responsiveness meet commitments from day one of the managed services engagement.", badges: ["Implementation", "Transition"] },
        { img: solutionsDashboard, title: "Continuous Optimization", desc: "Continuously monitor SAP system performance, batch-job execution, interface throughput, and database health through 24/7 automated tooling that detects anomalies and triggers proactive remediation before users experience service degradation. Monthly performance trend reports and quarterly health reviews provide IT leadership with the operational intelligence needed to plan infrastructure investments and capacity expansions ahead of demand.", badges: ["Monitoring", "Optimization"] },
        { img: showcaseTable, title: "Innovation & Growth", desc: "Accelerate business value from your SAP investment through ongoing enhancement management — from requirements gathering and solution design through development, testing, and deployment — governed by a structured change-management process that balances business agility with system stability. Anshiya's innovation advisory services additionally help organisations identify and adopt new SAP capabilities that deliver measurable improvements to business processes and user productivity.", badges: ["Innovation", "Growth"] }
      ]
    },
    cta: {
      title: "Empower Your Business with Expert AMS",
      subtitle: "Keep your SAP environment secure, optimized, and ready for the future with scalable managed services from Anshiya.",
      primary: "Contact Our Experts",
      secondary: "Talk to Our Experts"
    }
  },
  infrastructure: {
    hero: {
      badge: "ROBUST IT FOUNDATION",
      title1: "Infrastructure",
      title2: "Services",
      desc: "Build a secure, scalable, and high-performance infrastructure that powers business growth and digital innovation. Optimize performance and prepare your enterprise for the future.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Discover More"
    },
    insights: {
      title: "Cloud Infrastructure Services",
      subtitle: "End-to-end cloud services that help organizations build secure, scalable, and high-performance environments.",
      cards: [
        { title: "Cloud Strategy & Consulting", desc: "Develop a cloud roadmap aligned with your business goals." },
        { title: "Cloud Solution Implementation", desc: "Build secure, scalable, and high-performance cloud environments." },
        { title: "Cloud Migration", desc: "Move applications and workloads with minimal business disruption." },
        { title: "Cloud Integration", desc: "Connect cloud platforms with SAP and enterprise applications." }
      ]
    },
    debt: {
      title1: "Strengthen Your",
      title2: "Enterprise Infrastructure",
      desc: "Our solutions are designed to ensure high availability, reliability, and scalability to support mission-critical applications.",
      bullets: [
        "Resilient IT Infrastructure",
        "High Availability & Performance",
        "Future-Ready Cloud Strategies"
      ],
      cards: [
        { category: "MANAGEMENT", subtitle: "Infrastructure Management", desc: "Optimize cloud resources, performance, and system reliability." },
        { category: "MONITORING", subtitle: "Monitoring & Support", desc: "Proactively monitor and maintain cloud environments for maximum uptime." },
        { category: "SECURITY", subtitle: "Security Services", desc: "Reduce cyber risks and ensure secure data access and protection." },
        { category: "COMPLIANCE", subtitle: "Compliance", desc: "Ensure your infrastructure meets all industry regulations and standards." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya?",
      subtitle: "We help businesses build resilient IT environments ready to support evolving technologies and cloud adoption.",
      rows: [
        { img: showcasePie, title: "End-to-End Cloud Services", desc: "Design purpose-built, highly available cloud infrastructure for SAP workloads across AWS, Azure, and GCP using SAP-certified configurations that meet the strict performance and resiliency requirements of production S/4HANA, BW/4HANA, and BTP landscapes. Anshiya's architects produce detailed blueprints, cost models, and disaster-recovery strategies aligned to your business-continuity objectives and applicable regulatory compliance requirements throughout the cloud engagement.", badges: ["Cloud Services", "End-to-End"] },
        { img: showcaseBars, title: "High Availability", desc: "Engineer multi-layer high availability for SAP environments through redundant compute clusters, database replication, load-balanced application tiers, and geographically distributed failover capabilities that collectively deliver the uptime levels required by your SLA commitments and business-continuity obligations. Anshiya's availability engineering practice uses infrastructure-as-code templates and automated failover testing to validate HA configurations under realistic failure scenarios before production deployment.", badges: ["Availability", "Uptime"] },
        { img: solutionsDashboard, title: "Scalable Architecture", desc: "Architect cloud infrastructure with scalability built into the foundational design — using auto-scaling compute groups, elastic storage tiers, and adaptive network configurations — so SAP system capacity grows automatically in response to business demand without requiring manual intervention or emergency infrastructure projects during peak operational periods. Anshiya's capacity management programme includes quarterly utilisation reviews that anticipate scaling needs ahead of seasonal demand cycles and business growth milestones.", badges: ["Scalability", "Architecture"] },
        { img: showcaseTable, title: "Advanced Security & Governance", desc: "Implement defence-in-depth security across all SAP infrastructure layers — encompassing network segmentation, role-based access control, encrypted data transmission, patch management automation, and SIEM integration — to protect sensitive business data and maintain compliance with GDPR, SOC 2, ISO 27001, and industry-specific frameworks. Anshiya conducts periodic penetration-testing engagements and configuration audits that validate your SAP infrastructure security posture and provide evidence packages for regulatory certification programmes.", badges: ["Security", "Governance"] }
      ]
    },
    cta: {
      title: "Build a Future-Ready Infrastructure",
      subtitle: "Strengthen your business with secure, scalable, and high-performance infrastructure solutions.",
      primary: "Get Started",
      secondary: "Talk to Our Experts"
    }
  }

,
  ai_security: {
    hero: {
      badge: "ENTERPRISE PROTECTION",
      title1: "AI",
      title2: "Security",
      desc: "Protect your AI applications, machine learning models, and enterprise data with comprehensive AI security solutions. Build, deploy, and manage AI systems securely while ensuring compliance, privacy, and continuous threat protection.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Discover AI Security"
    },
    insights: {
      title: "End-to-End AI Protection",
      subtitle: "As organizations adopt AI technologies, protecting AI models, training data, APIs, and cloud environments becomes essential.",
      cards: [
        { title: "AI Discovery & Inventory", desc: "Gain complete visibility into AI models, services, APIs, and AI-powered applications across your organization." },
        { title: "AI Security Assessment", desc: "Identify vulnerabilities, configuration issues, and security gaps before they impact your business." },
        { title: "AI Data Protection", desc: "Protect sensitive training data, business information, and AI datasets with advanced security controls." },
        { title: "AI Threat Detection", desc: "Monitor AI environments to detect suspicious activities, prompt injection attacks, and unauthorized access." }
      ]
    },
    debt: {
      title1: "Secure AI Adoption",
      title2: "Across the Enterprise",
      desc: "Reduce AI-related risks with governance, compliance monitoring, and secure AI development practices.",
      bullets: [
        "Secure AI adoption across your enterprise",
        "Protect AI models and sensitive training data",
        "Enable safe and scalable AI innovation"
      ],
      cards: [
        { category: "VISIBILITY", subtitle: "Full AI Visibility", desc: "Discover and manage AI assets, models, APIs, and cloud-based AI services from a centralized platform." },
        { category: "CONFIGURATION", subtitle: "Configuration Security", desc: "Enforce security best practices by identifying insecure AI deployments and configuration issues." },
        { category: "COMPLIANCE", subtitle: "Data Privacy & Compliance", desc: "Protect sensitive business data while meeting industry regulations and responsible AI standards." },
        { category: "PREVENTION", subtitle: "AI Attack Prevention", desc: "Identify potential attack paths and secure AI systems before threats can impact your operations." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for AI Security?",
      subtitle: "We help organizations protect AI models, secure sensitive data, and reduce cyber risks while accelerating AI innovation.",
      rows: [
        { img: showcasePie, title: "AI Security Expertise", desc: "Leverage our deep experience in artificial intelligence security to protect your machine learning models and LLMs. We help you identify unique AI threats like prompt injection and data poisoning before deployment. Our team establishes robust defense controls tailored to your enterprise AI application architectures.", badges: ["Expertise", "AI Security"] },
        { img: showcaseBars, title: "End-to-End Protection", desc: "Secure your entire AI development and deployment lifecycle from data preparation to live runtime monitoring. We ensure that sensitive training datasets, model configurations, and production APIs remain protected at all times. This lifecycle coverage eliminates security blind spots and prevents unauthorized model access.", badges: ["Lifecycle", "Protection"] },
        { img: solutionsDashboard, title: "Enterprise-Ready Solutions", desc: "Deploy scalable, high-performance security solutions designed specifically for complex enterprise AI ecosystems. We integrate security checks into existing development pipelines to ensure compliance without slowing down innovation. Our framework supports multi-model, multi-cloud setups with centralized policy control.", badges: ["Scalable", "Enterprise"] },
        { img: showcaseTable, title: "Continuous Support", desc: "Receive ongoing monitoring, threat intelligence updates, and operational guidance from our dedicated security team. We track emerging AI-specific vulnerabilities and continuously adjust security filters to block novel exploitation techniques. This keeps your AI systems resilient against evolving adversarial threats.", badges: ["Support", "Monitoring"] }
      ]
    },
    cta: {
      title: "Ready to Secure Your AI Environment?",
      subtitle: "Build AI solutions with confidence using Anshiya's AI Security Services.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  },
  exposure_management: {
    hero: {
      badge: "PROACTIVE DEFENSE",
      title1: "Exposure",
      title2: "Management",
      desc: "Identify, prioritize, and eliminate security risks across your enterprise. Protect your business with intelligent exposure management that provides complete visibility into cloud, applications, networks, endpoints, and hybrid environments.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Learn More"
    },
    insights: {
      title: "Gain Complete Visibility",
      subtitle: "Modern IT environments generate thousands of security alerts every day. We consolidate findings to help you identify critical risks.",
      cards: [
        { title: "Exposure Discovery", desc: "Continuously discover security exposures across cloud infrastructure, applications, networks, APIs, and enterprise assets." },
        { title: "Risk Assessment", desc: "Evaluate vulnerabilities, misconfigurations, identity risks, and exposed assets using business and security context." },
        { title: "Attack Surface Management", desc: "Identify external-facing assets, exposed services, and potential attack paths before attackers can exploit them." },
        { title: "Automated Remediation", desc: "Accelerate issue resolution with guided remediation, automated workflows, and actionable security recommendations." }
      ]
    },
    debt: {
      title1: "Reduce Attack Surface",
      title2: "Across Environments",
      desc: "Focus on the most critical exposures using intelligent risk scoring based on exploitability, business impact, and threat intelligence.",
      bullets: [
        "Complete visibility into enterprise security risks",
        "Prioritize critical vulnerabilities with business context",
        "Strengthen overall cyber resilience"
      ],
      cards: [
        { category: "VISIBILITY", subtitle: "Unified Security Visibility", desc: "Centralize security findings across cloud, applications, infrastructure, and hybrid environments." },
        { category: "ANALYSIS", subtitle: "Intelligent Risk Analysis", desc: "Correlate vulnerabilities, identities, configurations, and business context to identify high-priority risks." },
        { category: "DETECTION", subtitle: "Attack Path Detection", desc: "Visualize potential attack paths and eliminate security gaps before they can be exploited." },
        { category: "INSIGHTS", subtitle: "AI-Powered Security Insights", desc: "Leverage AI-driven analytics to identify complex risks, prioritize remediation, and improve security operations." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for Exposure Management?",
      subtitle: "Partner with us to identify hidden risks, strengthen your security posture, and protect your organization with intelligent exposure management.",
      rows: [
        { img: showcasePie, title: "Cyber Security Expertise", desc: "Utilize our deep cybersecurity experience to identify and mitigate critical security exposures across your hybrid estate. We perform advanced context-aware risk analysis to isolate vulnerabilities that traditional scanners miss entirely. Our specialists design strategic defense controls that protect your most valuable business assets.", badges: ["Expertise", "Cyber Security"] },
        { img: showcaseBars, title: "End-to-End Security Coverage", desc: "Achieve comprehensive visibility across all assets, including cloud services, on-premises networks, user identities, and SaaS integrations. We ensure no security gaps remain unmonitored by uniting posture management, vulnerability assessment, and threat detection. This unified coverage protects your operations against multi-stage attacks.", badges: ["Coverage", "Protection"] },
        { img: solutionsDashboard, title: "AI-Driven Risk Intelligence", desc: "Leverage intelligent risk analytics that correlate vulnerability data with threat intelligence and asset business criticality. Our system automatically ranks exposures to highlight the most dangerous attack paths requiring immediate remediation. This allows your IT teams to focus effort where it delivers the highest risk reduction.", badges: ["AI", "Intelligence"] },
        { img: showcaseTable, title: "Continuous Monitoring & Support", desc: "Maintain continuous protection through 24/7 exposure scanning, automated anomaly alerts, and regular executive reports. Our managed service ensures new system deployments and configuration changes are immediately evaluated against security policies. This prevents risk accumulation and keeps your digital environment continuously defended.", badges: ["Monitoring", "Support"] }
      ]
    },
    cta: {
      title: "Ready to Reduce Your Security Exposure?",
      subtitle: "Identify hidden risks, strengthen your security posture, and protect your organization with intelligent exposure management solutions.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  },
  uvm: {
    hero: {
      badge: "VULNERABILITY CONTROL",
      title1: "Unified Vulnerability",
      title2: "Management",
      desc: "Strengthen your security posture with a unified vulnerability management solution that helps you discover, assess, prioritize, and remediate vulnerabilities across cloud, applications, networks, and on-premises environments.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Explore Solutions"
    },
    insights: {
      title: "Simplify Vulnerability Management",
      subtitle: "Gain complete visibility into security risks through continuous assessment and intelligent risk prioritization.",
      cards: [
        { title: "Vulnerability Assessment", desc: "Continuously scan cloud, network, applications, and endpoints to identify security weaknesses before they become threats." },
        { title: "Centralized Risk Visibility", desc: "Consolidate security findings from multiple tools into a single dashboard for complete visibility and simplified management." },
        { title: "Risk Prioritization", desc: "Prioritize vulnerabilities based on business impact, asset criticality, exploitability, and real-world threat intelligence." },
        { title: "Security Monitoring", desc: "Continuously monitor your environment to detect newly discovered vulnerabilities and emerging security risks." }
      ]
    },
    debt: {
      title1: "Accelerate Issue Resolution",
      title2: "with Actionable Guidance",
      desc: "Stay ahead of evolving cyber threats with real-time intelligence and proactive vulnerability management.",
      bullets: [
        "Detect vulnerabilities before attackers do",
        "Reduce security risks with intelligent prioritization",
        "Accelerate vulnerability remediation"
      ],
      cards: [
        { category: "VISIBILITY", subtitle: "Complete Asset Visibility", desc: "Discover vulnerabilities across cloud infrastructure, servers, applications, containers, APIs, and endpoints." },
        { category: "ANALYSIS", subtitle: "Intelligent Risk Analysis", desc: "Analyze vulnerabilities using contextual information to focus on the most critical security risks." },
        { category: "SCANNING", subtitle: "Automated Scanning", desc: "Perform continuous security assessments without disrupting business operations." },
        { category: "COMPLIANCE", subtitle: "Compliance Support", desc: "Maintain compliance with industry standards through continuous vulnerability monitoring and reporting." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for UVM?",
      subtitle: "Protect your business with our Unified Vulnerability Management Services and gain complete visibility into your security risks.",
      rows: [
        { img: showcasePie, title: "Comprehensive Security Expertise", desc: "Protect your hybrid infrastructure, applications, and endpoints with our proven vulnerability assessment and remediation methodologies. We combine industry best practices with security engineering knowledge to evaluate your risk exposure accurately. Our team designs customized security baselines that elevate defense standards across your organization.", badges: ["Expertise", "Security"] },
        { img: showcaseBars, title: "End-to-End Management", desc: "Manage the entire vulnerability lifecycle from initial scanning and asset discovery through prioritization, tracking, and remediation. We consolidate findings from multiple tools into a single, structured registry to streamline security operations. This unified management workflow eliminates manual spreadsheet tracking and reduces operational bottlenecks.", badges: ["Management", "End-to-End"] },
        { img: solutionsDashboard, title: "Continuous Protection", desc: "Stay protected against emerging cyber threats with automated continuous scanning and real-time security alerts. We continuously monitor your cloud workloads, code repositories, and networks for newly discovered CVEs and misconfigurations. This proactive monitoring ensures security gaps are addressed before threat actors can exploit them.", badges: ["Protection", "Continuous"] },
        { img: showcaseTable, title: "Scalable Security Solutions", desc: "Deploy flexible, scalable vulnerability management workflows designed to support your organization as it grows. Our integration-first approach connects scanning tools with your existing ticketing, CI/CD, and IT operations systems automatically. This maintains consistent security governance across all business units and development pipelines.", badges: ["Scalable", "Flexible"] }
      ]
    },
    cta: {
      title: "Ready to Strengthen Your Security?",
      subtitle: "Gain complete visibility into your security risks while reducing vulnerabilities across your enterprise.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  },
  asm: {
    hero: {
      badge: "ATTACK SURFACE DEFENSE",
      title1: "Attack Surface",
      title2: "Management (ASM)",
      desc: "Protect your organization by identifying internet-facing assets, detecting security exposures, and eliminating exploitable risks before attackers can take advantage.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Secure Your Assets"
    },
    insights: {
      title: "Stay Ahead of Cyber Threats",
      subtitle: "As organizations expand their digital footprint, hidden assets and exposed services create new security risks.",
      cards: [
        { title: "Asset Discovery", desc: "Automatically identify internet-facing assets, domains, IP addresses, cloud resources, APIs, and external applications." },
        { title: "Exposure Assessment", desc: "Continuously monitor exposed services, vulnerabilities, misconfigurations, and security weaknesses." },
        { title: "Risk Prioritization", desc: "Prioritize security issues based on exploitability, business impact, and critical asset importance." },
        { title: "Attack Path Analysis", desc: "Visualize potential attack paths and identify the most critical security gaps that attackers could exploit." }
      ]
    },
    debt: {
      title1: "Monitor Your Digital",
      title2: "Footprint 24/7",
      desc: "Detect newly exposed assets and emerging threats in real time while accelerating remediation with actionable recommendations.",
      bullets: [
        "Discover unknown internet-facing assets",
        "Reduce your external attack surface",
        "Improve incident response and remediation"
      ],
      cards: [
        { category: "VISIBILITY", subtitle: "Complete External Visibility", desc: "Gain a comprehensive view of your internet-facing assets across cloud, applications, APIs, and hybrid environments." },
        { category: "ANALYSIS", subtitle: "Intelligent Risk Analysis", desc: "Focus on the security exposures that present the highest risk to your organization." },
        { category: "DETECTION", subtitle: "Real-Time Threat Detection", desc: "Identify exposed assets, insecure configurations, and suspicious activities as they occur." },
        { category: "AI INSIGHTS", subtitle: "AI-Powered Security Insights", desc: "Leverage AI-driven analytics to identify attack paths and improve response efficiency." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for ASM?",
      subtitle: "We help businesses continuously discover, assess, and secure their external attack surface, reducing vulnerabilities and strengthening cyber resilience.",
      rows: [
        { img: showcasePie, title: "Proactive Risk Reduction", desc: "Shrink your external digital exposure by proactively identifying and hardening internet-facing systems before they are targeted. We assess encryption strengths, patch levels, and access configurations to resolve perimeter weaknesses. This disciplined attack surface reduction makes your organization a difficult and unattractive target.", badges: ["Proactive", "Risk Reduction"] },
        { img: showcaseBars, title: "Faster Remediation", desc: "Accelerate the closure of external exposures by delivering precise, actionable fixing instructions to your technical teams. We automate task assignment, track SLA compliance, and verify remediations through automated resubmission scanning. This organized workflow significantly reduces the time your perimeter remains vulnerable to exploitation.", badges: ["Remediation", "Automated"] },
        { img: solutionsDashboard, title: "Comprehensive Discovery", desc: "Enumerate all internet-exposed assets, including domains, subdomains, IPs, cloud buckets, and legacy shadow IT. We run continuous external scanning that mirrors the reconnaissance techniques used by modern threat actors. This ensures you maintain a complete, always-current inventory of your public-facing footprint.", badges: ["Discovery", "Comprehensive"] },
        { img: showcaseTable, title: "Continuous Improvement", desc: "Drive long-term security maturity by establishing a structured cycle of attack surface monitoring, patching, and policy reviews. We deliver monthly executive trend reports that track risk-reduction metrics and compliance scores over time. This continuous feedback loop helps optimize security controls and align engineering teams on perimeter hygiene.", badges: ["Improvement", "Strategy"] }
      ]
    },
    cta: {
      title: "Ready to Secure Your External Attack Surface?",
      subtitle: "Discover, monitor, and eliminate exploitable risks before attackers can take advantage.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  },
  cspm: {
    hero: {
      badge: "CLOUD SECURITY",
      title1: "Cloud Security Posture",
      title2: "Management (CSPM)",
      desc: "Protect your cloud infrastructure by continuously identifying, monitoring, and remediating security misconfigurations across multi-cloud environments.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Secure Your Cloud"
    },
    insights: {
      title: "Strengthen Your Cloud Security",
      subtitle: "Gain complete visibility into cloud resources, detect security risks in real time, and enforce security best practices across all environments.",
      cards: [
        { title: "Cloud Security Assessment", desc: "Continuously assess cloud environments to identify security gaps, vulnerabilities, and configuration risks." },
        { title: "Configuration Management", desc: "Monitor cloud resources against industry best practices and detect configuration issues before they become threats." },
        { title: "Risk Prioritization", desc: "Analyze security findings with business context to prioritize the most critical risks and reduce attack surfaces." },
        { title: "Infrastructure as Code Security", desc: "Scan IaC templates to identify security issues early in the development lifecycle." }
      ]
    },
    debt: {
      title1: "Continuous Visibility",
      title2: "and Risk Management",
      desc: "Maintain continuous compliance with standards and accelerate issue resolution through intelligent recommendations and automated workflows.",
      bullets: [
        "Improve cloud security visibility",
        "Detect risks before they become threats",
        "Strengthen compliance and governance"
      ],
      cards: [
        { category: "VISIBILITY", subtitle: "Complete Cloud Visibility", desc: "Gain a centralized view of cloud resources, workloads, containers, VMs, storage, and applications." },
        { category: "MONITORING", subtitle: "Continuous Security Monitoring", desc: "Detect cloud misconfigurations, policy violations, and emerging risks in real time." },
        { category: "COMPLIANCE", subtitle: "Compliance Reporting", desc: "Generate detailed compliance reports and continuously monitor regulatory requirements." },
        { category: "MULTI-CLOUD", subtitle: "Multi-Cloud Security", desc: "Secure AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud environments from a single platform." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for CSPM?",
      subtitle: "Partner with us to strengthen your cloud security, maintain compliance, and confidently accelerate your cloud transformation journey.",
      rows: [
        { img: showcasePie, title: "Cloud Security Experts", desc: "Secure your multi-cloud infrastructure with certified architects who understand AWS, Azure, and GCP security configurations. We translate complex security standards into clear, actionable configuration policies that protect your resources. Our specialists design secure cloud foundations that prevent common misconfigurations and access exposures.", badges: ["Cloud", "Experts"] },
        { img: showcaseBars, title: "End-to-End Cloud Protection", desc: "Achieve total security visibility across your cloud accounts, virtual machines, serverless workloads, container registries, and databases. We integrate continuous compliance monitoring with automated posture checks to ensure comprehensive protection. This unified visibility prevents silent risk accumulation in complex, dynamic cloud environments.", badges: ["Protection", "End-to-End"] },
        { img: solutionsDashboard, title: "Proactive Risk Management", desc: "Identify and resolve cloud security risks before they can be exploited by scanning configurations in near-real-time. We correlate posture findings with data sensitivity and identity entitlements to prioritize critical exposures. This context-aware approach ensures you remediate high-impact misconfigurations first.", badges: ["Proactive", "Risk Management"] },
        { img: showcaseTable, title: "Continuous Support", desc: "Maintain continuous cloud security governance through managed monitoring services, regular policy updates, and expert advisory support. We keep your CSPM policies aligned with evolving CIS Benchmarks, regulatory updates, and emerging threat intelligence. This ensures your cloud estate remains secure and compliant throughout the year.", badges: ["Support", "Monitoring"] }
      ]
    },
    cta: {
      title: "Ready to Secure Your Cloud Environment?",
      subtitle: "Continuously identify, monitor, and remediate security misconfigurations across multi-cloud environments.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  },
  dspm: {
    hero: {
      badge: "DATA PROTECTION",
      title1: "Data Security Posture",
      title2: "Management (DSPM)",
      desc: "Protect your sensitive data across cloud and hybrid environments by gaining complete visibility into data locations, access privileges, and security risks.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Secure Your Data"
    },
    insights: {
      title: "Secure Data Wherever It Lives",
      subtitle: "Discover, classify, and protect your sensitive data to prevent breaches and ensure compliance across your entire digital footprint.",
      cards: [
        { title: "Data Discovery & Classification", desc: "Automatically locate and classify sensitive data across cloud storage, databases, and SaaS applications." },
        { title: "Access & Entitlement Analysis", desc: "Analyze who has access to sensitive data and enforce least-privilege principles to reduce risk." },
        { title: "Data Risk Assessment", desc: "Identify exposed data, misconfigurations, and vulnerabilities that could lead to unauthorized access or breaches." },
        { title: "Compliance Monitoring", desc: "Ensure your data handling practices meet stringent regulatory requirements like GDPR, HIPAA, and CCPA." }
      ]
    },
    debt: {
      title1: "Proactive Data Security",
      title2: "and Risk Mitigation",
      desc: "Eliminate data blind spots and protect your most valuable assets with intelligent, context-aware security controls.",
      bullets: [
        "Gain complete visibility into sensitive data",
        "Prevent data breaches and unauthorized access",
        "Ensure regulatory compliance automatically"
      ],
      cards: [
        { category: "VISIBILITY", subtitle: "Comprehensive Data Mapping", desc: "Visualize data flows and storage locations across your entire hybrid environment." },
        { category: "ANALYSIS", subtitle: "Context-Aware Risk Scoring", desc: "Prioritize data risks based on data sensitivity, exposure level, and business impact." },
        { category: "REMEDIATION", subtitle: "Automated Protection", desc: "Implement automated workflows to secure exposed data and correct misconfigurations instantly." },
        { category: "GOVERNANCE", subtitle: "Data Lifecycle Management", desc: "Monitor data from creation to deletion to ensure consistent security policies are applied." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for DSPM?",
      subtitle: "We help you safeguard your critical data assets with advanced posture management tailored to modern cloud architectures.",
      rows: [
        { img: showcasePie, title: "Data Security Specialists", desc: "Protect your sensitive data assets with specialists experienced in database security, cryptography, and privacy compliance. We design secure data boundaries that protect PII, financial details, and intellectual property across cloud services. Our consultants ensure data security controls match the criticality of your information assets.", badges: ["Specialists", "Data"] },
        { img: showcaseBars, title: "Continuous Data Monitoring", desc: "Maintain 24/7 automated monitoring of sensitive data repositories to detect unauthorized access and policy drift. We track data flow paths, encryption settings, and access configurations to flag security anomalies in real time. This continuous oversight helps prevent data leakage and ensures immediate containment of suspicious activities.", badges: ["Monitoring", "Continuous"] },
        { img: solutionsDashboard, title: "Seamless Integration", desc: "Connect data security posture monitoring with your existing SIEM, SOAR, and database management platforms via APIs. This integration enriches security alerts with data sensitivity context to improve incident prioritization. It enables automated, data-aware security workflows that streamline protection across your hybrid database estate.", badges: ["Integration", "Seamless"] },
        { img: showcaseTable, title: "Compliance Assurance", desc: "Simplify regulatory compliance by automating evidence collection for GDPR, CCPA, HIPAA, and PCI DSS data protection requirements. We generate audit-ready reports that document data classification, access governance, and encryption status. This compliance reporting reduces audit stress and demonstrates strong data stewardship.", badges: ["Compliance", "Auditing"] }
      ]
    },
    cta: {
      title: "Ready to Protect Your Sensitive Data?",
      subtitle: "Gain complete visibility and control over your data security posture today.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  }

,
  ciem: {
    hero: {
      badge: "IDENTITY SECURITY",
      title1: "Infrastructure Entitlements",
      title2: "Management (CIEM)",
      desc: "Protect your cloud infrastructure by managing user identities, permissions, and access controls. Reduce identity risks, enforce least-privilege access, and strengthen cloud security across multi-cloud environments.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Secure Cloud Identities"
    },
    insights: {
      title: "Strengthen Identity Security",
      subtitle: "Gain complete visibility into cloud identities, detect excessive permissions, and secure access to critical resources while maintaining compliance.",
      cards: [
        { title: "Identity Visibility", desc: "Gain complete visibility into users, service accounts, roles, and permissions across your cloud infrastructure." },
        { title: "Permission Analysis", desc: "Analyze user access and identify excessive privileges, inactive accounts, and unnecessary permissions." },
        { title: "Least Privilege Enforcement", desc: "Implement least-privilege access policies to reduce security risks and protect sensitive business resources." },
        { title: "Identity Risk Detection", desc: "Detect risky identities, privilege escalation, and misconfigurations before they become security threats." }
      ]
    },
    debt: {
      title1: "Protect Cloud Resources",
      title2: "with Intelligent Governance",
      desc: "Manage identity lifecycle, access policies, and role-based permissions through centralized governance.",
      bullets: [
        "Reduce identity-based security risks",
        "Enforce least-privilege access",
        "Improve cloud identity governance"
      ],
      cards: [
        { category: "VISIBILITY", subtitle: "Complete Identity Visibility", desc: "Discover human and machine identities across cloud platforms from a single dashboard." },
        { category: "ASSESSMENT", subtitle: "Access Risk Assessment", desc: "Identify high-risk permissions, inactive accounts, and unauthorized access to critical resources." },
        { category: "MANAGEMENT", subtitle: "Privileged Access Management", desc: "Control administrative privileges and enforce secure access to sensitive cloud services." },
        { category: "DETECTION", subtitle: "Threat Detection", desc: "Monitor identity-related threats, credential misuse, and abnormal access activities in real time." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for CIEM?",
      subtitle: "Strengthen identity security, reduce access risks, and build a secure cloud environment with intelligent entitlement management.",
      rows: [
        { img: showcasePie, title: "Cloud Security Specialists", desc: "Govern cloud identities and permissions across multi-cloud environments with specialists in IAM security. We untangle complex cross-account roles, federated identities, and service permissions to establish clear visibility. Our team designs precise access controls that prevent credential exploitation and privilege escalation.", badges: ["Specialists", "Identity"] },
        { img: showcaseBars, title: "End-to-End Identity Protection", desc: "Secure every human and machine identity across AWS, Azure, and GCP from creation to runtime operation. We analyze effective permissions, discover dormant credentials, and flag over-privileged service accounts. This comprehensive identity mapping ensures you maintain full control over who has access to your cloud assets.", badges: ["End-to-End", "Protection"] },
        { img: solutionsDashboard, title: "Secure Cloud Operations", desc: "Enforce a strict least-privilege access model by automatically right-sizing permissions based on actual resource usage patterns. We provide clear remediation scripts to remove unnecessary permissions safely without breaking application workflows. This minimizes your identity attack surface and protects operations against credential compromise.", badges: ["Operations", "Security"] },
        { img: showcaseTable, title: "Continuous Support", desc: "Sustain secure identity governance with continuous access monitoring, automated policy audits, and expert advisory support. We help you adapt IAM controls to new cloud service adoptions and changing business requirements. This ongoing support ensures your identity security remains robust and compliant with industry standards.", badges: ["Support", "Monitoring"] }
      ]
    },
    cta: {
      title: "Ready to Secure Your Cloud Identities?",
      subtitle: "Reduce access risks and build a secure cloud environment with intelligent entitlement management.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  },
  wiz_compliance: {
    hero: {
      badge: "CLOUD COMPLIANCE",
      title1: "Wiz Cloud",
      title2: "Compliance",
      desc: "Stay compliant with global security standards and industry regulations through automated cloud compliance monitoring. Continuously assess, monitor, and improve your compliance posture across multi-cloud environments.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Simplify Compliance"
    },
    insights: {
      title: "Simplify Cloud Compliance Management",
      subtitle: "Reduce compliance risks, simplify audits, and strengthen cloud security with automated assessments and continuous monitoring.",
      cards: [
        { title: "Compliance Assessment", desc: "Evaluate your cloud infrastructure against industry regulations and security best practices to identify compliance gaps." },
        { title: "Continuous Monitoring", desc: "Monitor cloud resources continuously to detect policy violations, configuration issues, and security risks in real time." },
        { title: "Regulatory Compliance", desc: "Support compliance with globally recognized standards including ISO 27001, PCI DSS, GDPR, HIPAA, SOC 2, NIST, and CIS Benchmarks." },
        { title: "Automated Remediation", desc: "Reduce compliance risks through intelligent recommendations, automated remediation workflows, and continuous policy enforcement." }
      ]
    },
    debt: {
      title1: "Ensure Continuous Compliance",
      title2: "Across Your Cloud",
      desc: "Generate detailed technical reports, executive dashboards, and audit-ready documentation for stakeholders and regulatory requirements.",
      bullets: [
        "Faster audit readiness with automated reporting",
        "Identify and resolve compliance issues early",
        "Reduce operational effort through automation"
      ],
      cards: [
        { category: "AUTOMATION", subtitle: "Automated Compliance Assessment", desc: "Continuously evaluate your cloud environment against multiple compliance frameworks without manual intervention." },
        { category: "MULTI-CLOUD", subtitle: "Multi-Cloud Compliance", desc: "Manage compliance across AWS, Azure, GCP, SAP Cloud, and hybrid cloud infrastructures." },
        { category: "DASHBOARDS", subtitle: "Executive Dashboards", desc: "View compliance scores, security posture, trends, and risk summaries from a centralized dashboard." },
        { category: "REPORTING", subtitle: "Flexible Reporting", desc: "Generate business-specific and organization-wide compliance reports for internal teams and auditors." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for Compliance?",
      subtitle: "We help organizations simplify compliance management and confidently meet industry regulations.",
      rows: [
        { img: showcasePie, title: "Compliance Experts", desc: "Automate regulatory compliance management across your multi-cloud environment with certified security governance consultants. We map your cloud configurations to SOC 2, ISO 27001, HIPAA, PCI DSS, and CIS standards simultaneously. Our experts ensure your compliance policies reflect current regulatory expectations and audit requirements.", badges: ["Experts", "Compliance"] },
        { img: showcaseBars, title: "End-to-End Compliance Management", desc: "Govern your compliance posture from initial readiness assessment through control implementation, evidence collection, and audit facilitation. We consolidate compliance findings into a single dashboard to simplify tracking and reporting across all business units. This structured management workflow eliminates manual compliance tasks and reduces audit overhead.", badges: ["Management", "End-to-End"] },
        { img: solutionsDashboard, title: "Intelligent Automation", desc: "Collect and organize audit-ready compliance evidence automatically from your cloud infrastructure and security systems. We run continuous policy checks that detect compliance drift in real time and generate automated alerts for quick remediation. This automation ensures your organization remains perpetually audit-ready throughout the year.", badges: ["Automation", "Intelligent"] },
        { img: showcaseTable, title: "Continuous Support", desc: "Maintain a secure, compliant cloud posture with ongoing monitoring, regular policy library updates, and audit support. We help you interpret new compliance requirements and implement necessary controls in your cloud environment. This continuous partnership protects your organization from compliance gaps and audit failures.", badges: ["Support", "Continuous"] }
      ]
    },
    cta: {
      title: "Ready to Strengthen Your Cloud Compliance?",
      subtitle: "Simplify compliance management and strengthen cloud security with intelligent solutions.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  },
  iac_scanning: {
    hero: {
      badge: "SECURE DEVELOPMENT",
      title1: "Infrastructure-as-Code",
      title2: "Scanning",
      desc: "Secure your cloud infrastructure from the very beginning. Detect vulnerabilities, misconfigurations, exposed secrets, and compliance issues before deployment, enabling faster and more secure software delivery.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Secure Your Pipeline"
    },
    insights: {
      title: "Build Secure Cloud Infrastructure",
      subtitle: "Integrate security directly into DevOps workflows to ensure infrastructure templates are protected.",
      cards: [
        { title: "Infrastructure-as-Code Scanning", desc: "Scan Terraform, AWS CloudFormation, Azure ARM, Kubernetes, and other IaC templates to identify security risks before deployment." },
        { title: "Container Security", desc: "Protect container images by detecting vulnerabilities, malware, and insecure configurations throughout the container lifecycle." },
        { title: "Secret Detection", desc: "Automatically identify exposed API keys, passwords, certificates, tokens, and sensitive credentials within source code." },
        { title: "Configuration Management", desc: "Detect cloud misconfigurations and enforce security best practices across development and production environments." }
      ]
    },
    debt: {
      title1: "Integrate Security into",
      title2: "Your CI/CD Pipelines",
      desc: "Embed automated code scanning directly into your workflows to identify security issues before deployment.",
      bullets: [
        "Faster secure deployments without compromise",
        "Identify vulnerabilities before deployment",
        "Improve DevSecOps and compliance"
      ],
      cards: [
        { category: "SHIFT-LEFT", subtitle: "Shift-Left Security", desc: "Identify and fix security issues early in the development lifecycle before they reach production." },
        { category: "ANALYSIS", subtitle: "Infrastructure Code Analysis", desc: "Continuously analyze infrastructure templates for vulnerabilities and compliance violations." },
        { category: "SECRETS", subtitle: "Secret & Credential Protection", desc: "Prevent accidental exposure of sensitive credentials in code repositories and deployment pipelines." },
        { category: "AUTOMATION", subtitle: "Automated Security Checks", desc: "Integrate automated scanning into DevOps workflows for continuous security validation." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for IaC Security?",
      subtitle: "Partner with us to integrate security into your development lifecycle and protect your cloud infrastructure.",
      rows: [
        { img: showcasePie, title: "DevSecOps Expertise", desc: "Integrate security into your cloud provisioning workflows with specialists experienced in DevSecOps and IaC automation. We help you scan Terraform, CloudFormation, and Kubernetes templates for security defects before deployment. Our team establishes secure coding guidelines that empower developers to build compliant infrastructure.", badges: ["DevSecOps", "Expertise"] },
        { img: showcaseBars, title: "End-to-End Infrastructure Security", desc: "Protect your cloud environment from code to deployment by scanning IaC templates for misconfigurations, compliance gaps, and hardcoded secrets. We ensure that only security-validated templates are permitted to provision resources in your production environment. This prevents security risks from ever reaching your live cloud systems.", badges: ["Infrastructure", "Security"] },
        { img: solutionsDashboard, title: "Automated Security Integration", desc: "Embed IaC security scanning directly into your GitHub, GitLab, and Azure DevOps pipelines via automated quality gates. We return precise, line-level feedback to developers within their normal pull-request workflow, enabling rapid fixes. This automated feedback cycle accelerates secure delivery without introducing manual approval bottlenecks.", badges: ["Automation", "Integration"] },
        { img: showcaseTable, title: "Continuous Support", desc: "Sustain IaC security quality with continuous policy library updates, scanning tool tuning, and expert developer support. We help you adapt scanning rules to new cloud services and evolving security standards. This ongoing enablement ensures your infrastructure-as-code remains secure, compliant, and easy to maintain.", badges: ["Support", "Optimization"] }
      ]
    },
    cta: {
      title: "Ready to Secure Your Infrastructure as Code?",
      subtitle: "Deliver secure applications with confidence by building security into your deployment pipelines.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  },
  sca_sbom: {
    hero: {
      badge: "SUPPLY CHAIN SECURITY",
      title1: "Supply Chain Security",
      title2: "(SCA and SBOM)",
      desc: "Secure your software supply chain from code to production. Gain complete visibility into software components, detect supply chain risks, and secure open-source dependencies and containers.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Enhance Software Security"
    },
    insights: {
      title: "Build Secure Software with Complete Visibility",
      subtitle: "Identify dependencies, assess risks, and enforce security across the entire software supply chain.",
      cards: [
        { title: "Software Composition Analysis (SCA)", desc: "Identify and monitor open-source libraries, third-party components, and software dependencies to detect known vulnerabilities." },
        { title: "Software Bill of Materials (SBOM)", desc: "Generate and manage detailed inventories of software components to improve visibility, compliance, and supply chain transparency." },
        { title: "Container & Image Security", desc: "Scan container images and VM images for vulnerabilities, malware, exposed secrets, and insecure configurations." },
        { title: "Continuous Risk Monitoring", desc: "Continuously monitor software components and dependencies to identify new vulnerabilities and emerging threats." }
      ]
    },
    debt: {
      title1: "Secure Every Link in",
      title2: "Your Software Supply Chain",
      desc: "Reduce vulnerabilities across applications, containers, and dependencies to accelerate secure software releases.",
      bullets: [
        "Improve software security and compliance",
        "Increase development confidence",
        "Accelerate secure software releases"
      ],
      cards: [
        { category: "VISIBILITY", subtitle: "Complete Software Visibility", desc: "Gain full visibility into software packages, dependencies, libraries, and container images across your environment." },
        { category: "DETECTION", subtitle: "Vulnerability Detection", desc: "Identify vulnerabilities, exposed secrets, outdated components, and security misconfigurations before they impact production." },
        { category: "SBOM", subtitle: "SBOM Management", desc: "Maintain accurate software inventories to support security governance and regulatory compliance." },
        { category: "AUTOMATION", subtitle: "Automated Security Scanning", desc: "Continuously scan applications, repositories, and infrastructure to reduce supply chain risks." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for Supply Chain Security?",
      subtitle: "We deliver enterprise-grade software supply chain security solutions for modern development environments.",
      rows: [
        { img: showcasePie, title: "Software Security Experts", desc: "Secure your application software supply chain with specialists in open-source security, dependency analysis, and license compliance. We help you map and evaluate third-party libraries, container images, and software components for security risks. Our team designs secure supply-chain policies that protect your proprietary software products.", badges: ["Experts", "Security"] },
        { img: showcaseBars, title: "End-to-End Protection", desc: "Protect your software development lifecycle from source code dependencies to build artifacts and production deployments. We automate Software Composition Analysis (SCA) to identify vulnerable packages, outdated libraries, and licensing conflicts. This comprehensive scanning ensures your applications remain secure against supply-chain exploits.", badges: ["End-to-End", "Protection"] },
        { img: solutionsDashboard, title: "DevSecOps Integration", desc: "Embed dependency scanning and SBOM generation directly into your automated build and release pipelines. We provide developers with instant vulnerability feedback during the code-commit phase, enabling quick package updates. This integration ensures compliance with customer and regulatory transparency requirements without slowing releases.", badges: ["DevSecOps", "Integration"] },
        { img: showcaseTable, title: "Continuous Support", desc: "Maintain software supply chain resilience with continuous dependency monitoring, automated SBOM catalog updates, and threat advisory support. We alert your teams when new vulnerabilities affect existing production libraries, providing guided remediation steps. This ongoing support protects your products from newly disclosed software supply-chain risks.", badges: ["Support", "Monitoring"] }
      ]
    },
    cta: {
      title: "Ready to Secure Your Supply Chain?",
      subtitle: "Protect your applications and secure open-source dependencies today.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  },
  wiz_os: {
    hero: {
      badge: "CONTAINER SECURITY",
      title1: "WizOS: Secured",
      title2: "Container Images",
      desc: "Build, deploy, and run containers with confidence. Reduce vulnerabilities, secure container images, and maintain compliance throughout the software development lifecycle.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Secure Your Containers"
    },
    insights: {
      title: "Secure Containers from Development to Production",
      subtitle: "Build, scan, and manage secure container images that minimize vulnerabilities and accelerate application delivery.",
      cards: [
        { title: "Secure Base Images", desc: "Build applications using hardened, production-ready container images designed to reduce security risks." },
        { title: "Container Vulnerability Scanning", desc: "Continuously scan images for known vulnerabilities, outdated packages, malware, and security weaknesses before deployment." },
        { title: "Image Hardening", desc: "Strengthen container images by removing unnecessary components, applying security best practices, and reducing the attack surface." },
        { title: "Automated Image Updates", desc: "Keep container images secure with continuous patch management and automated security updates." }
      ]
    },
    debt: {
      title1: "Strengthen Cloud-Native",
      title2: "Application Security",
      desc: "Ensure container images comply with industry security standards and regulatory requirements without disrupting developer workflows.",
      bullets: [
        "Reduce container vulnerabilities",
        "Accelerate secure development",
        "Simplify maintenance and patching"
      ],
      cards: [
        { category: "MINIMAL", subtitle: "Minimal & Secure Images", desc: "Deploy lightweight, hardened container images that reduce vulnerabilities and improve application performance." },
        { category: "SCANNING", subtitle: "Continuous Security Scanning", desc: "Automatically scan images throughout the development lifecycle to detect security issues early." },
        { category: "VERIFICATION", subtitle: "Trusted Image Verification", desc: "Verify container image integrity using digital signatures, SBOM, and security validation." },
        { category: "DEVELOPERS", subtitle: "Developer-Friendly Security", desc: "Provide developers with actionable security recommendations without interrupting development workflows." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for Container Security?",
      subtitle: "Partner with us to build, deploy, and manage secure container images tailored for cloud-native ecosystems.",
      rows: [
        { img: showcasePie, title: "Cloud-Native Security Experts", desc: "Build secure container environments with certified cloud-native security engineers experienced in Docker and Kubernetes protection. We design and maintain hardened base container image libraries that are pre-stripped of unnecessary packages. Our team ensures your container foundations meet the highest security standards from the start.", badges: ["Experts", "Cloud-Native"] },
        { img: showcaseBars, title: "End-to-End Container Protection", desc: "Secure your containerized applications across the entire lifecycle, including image build, registry storage, and runtime operation. We run continuous vulnerability scans on container layers and compiled binaries to detect security weaknesses. This multi-stage protection prevents compromised or unsigned images from reaching production environments.", badges: ["Protection", "End-to-End"] },
        { img: solutionsDashboard, title: "DevSecOps Integration", desc: "Integrate container scanning and image signature validation directly into your automated CI/CD pipelines. We configure admission controller policies that block non-compliant container images from deploying to your clusters. This automated gatekeeper ensures all running workloads meet your organization's security standards.", badges: ["Integration", "DevSecOps"] },
        { img: showcaseTable, title: "Continuous Support", desc: "Sustain container security quality with continuous base image updates, registry policy audits, and runtime security support. We track container vulnerability developments and update image libraries with security patches automatically. This ongoing support ensures your cloud-native workloads remain secure, stable, and compliant.", badges: ["Support", "Optimization"] }
      ]
    },
    cta: {
      title: "Ready to Secure Your Container Applications?",
      subtitle: "Reduce vulnerabilities and strengthen your cloud-native security strategy.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  },
  aspm: {
    hero: {
      badge: "APPLICATION SECURITY",
      title1: "Application Security Posture",
      title2: "Management (ASPM)",
      desc: "Secure your applications from code to cloud. Gain complete visibility into application risks, prioritize exploitable vulnerabilities, and accelerate remediation with continuous security monitoring.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Protect Applications"
    },
    insights: {
      title: "Strengthen App Security Across the SDLC",
      subtitle: "Identify security risks and protect cloud-native applications with a unified approach integrating dev, ops, and security.",
      cards: [
        { title: "Application Risk Assessment", desc: "Identify vulnerabilities, security gaps, and configuration issues across applications, APIs, and cloud environments." },
        { title: "Code-to-Cloud Visibility", desc: "Gain end-to-end visibility into application security from source code and CI/CD pipelines to production workloads." },
        { title: "Vulnerability Prioritization", desc: "Focus on the vulnerabilities that pose the greatest business risk using intelligent, context-based risk analysis." },
        { title: "DevSecOps Integration", desc: "Embed automated security testing into development workflows, version control systems, and CI/CD pipelines." }
      ]
    },
    debt: {
      title1: "Prioritize Exploitable Risks",
      title2: "and Accelerate Fixes",
      desc: "Integrate security throughout the software development lifecycle to reduce risks before deployment.",
      bullets: [
        "Improve application security from code to cloud",
        "Accelerate vulnerability remediation",
        "Strengthen DevSecOps and reduce risk"
      ],
      cards: [
        { category: "VISIBILITY", subtitle: "End-to-End Application Visibility", desc: "Monitor applications from development through deployment with centralized security insights." },
        { category: "ANALYSIS", subtitle: "Intelligent Risk Analysis", desc: "Correlate application vulnerabilities with runtime, cloud, and business context for accurate prioritization." },
        { category: "SUPPLY CHAIN", subtitle: "Software Supply Chain Security", desc: "Protect source code, dependencies, APIs, and CI/CD pipelines from security risks." },
        { category: "DASHBOARD", subtitle: "Unified Security Dashboard", desc: "Manage application security posture, remediation status, and compliance through a centralized platform." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for ASPM?",
      subtitle: "Build secure software with comprehensive Application Security Posture Management solutions.",
      rows: [
        { img: showcasePie, title: "Application Security Specialists", desc: "Govern application risk across your entire software portfolio with specialists in application security management. We consolidate security findings from SAST, DAST, and SCA tools into a unified risk dashboard. Our team designs custom application security baselines that map directly to your business risk profile.", badges: ["Specialists", "AppSec"] },
        { img: showcaseBars, title: "End-to-End Protection", desc: "Protect your applications from source code repositories through build pipelines, cloud deployments, and live runtime operations. We map all application assets, APIs, and dependencies to provide complete code-to-cloud visibility. This comprehensive coverage ensures no application component remains unmonitored or unvalidated.", badges: ["Protection", "End-to-End"] },
        { img: solutionsDashboard, title: "Integrated DevSecOps", desc: "Embed application security governance directly into your software development lifecycle, project management, and developer tools. We automate vulnerability correlation, deduplicating findings to present engineering teams with a clean remediation queue. This integration streamlines collaboration between security and development teams.", badges: ["Integration", "DevSecOps"] },
        { img: showcaseTable, title: "Continuous Support", desc: "Sustain application security maturity with continuous posture monitoring, regular code assessments, and expert support. We help you tune security policies, manage exception workflows, and prepare compliance evidence for audits. This ongoing partnership keeps your application estate secure and resilient against new threats.", badges: ["Support", "Monitoring"] }
      ]
    },
    cta: {
      title: "Ready to Secure Your Applications?",
      subtitle: "Strengthen your application security, reduce cyber risks, and build secure software today.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  }

,
  sast: {
    hero: {
      badge: "SECURE CODING",
      title1: "Static Application",
      title2: "Security Testing (SAST)",
      desc: "Identify and fix security vulnerabilities early in development. Detect coding flaws and security risks directly in your source code before deployment, helping developers deliver secure applications faster.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Secure Your Code"
    },
    insights: {
      title: "Secure Applications from the First Line of Code",
      subtitle: "Analyze source code, identify security weaknesses, and provide actionable recommendations before applications reach production.",
      cards: [
        { title: "Source Code Analysis", desc: "Analyze application source code to identify security vulnerabilities, coding errors, and compliance issues early." },
        { title: "Vulnerability Detection", desc: "Detect common security risks including SQL Injection, XSS, insecure authentication, APIs, and code vulnerabilities." },
        { title: "Secure Coding Assessment", desc: "Evaluate applications against secure coding standards and industry best practices to improve software security." },
        { title: "CI/CD Security Integration", desc: "Integrate automated code scanning into your CI/CD pipelines to identify security issues before deployment." }
      ]
    },
    debt: {
      title1: "Resolve Vulnerabilities",
      title2: "During Development",
      desc: "Prioritize vulnerabilities based on exploitability, business impact, and application context for faster remediation.",
      bullets: [
        "Reduce application vulnerabilities before deployment",
        "Enable developers to identify and fix security issues earlier",
        "Integrate security into your software development lifecycle"
      ],
      cards: [
        { category: "EARLY DETECTION", subtitle: "Early Vulnerability Detection", desc: "Identify security flaws during development before they become production risks." },
        { category: "AUTOMATION", subtitle: "Automated Code Scanning", desc: "Continuously scan source code across the software development lifecycle." },
        { category: "INTEGRATION", subtitle: "Secure Development Workflow", desc: "Integrate seamlessly with development tools, version control systems, and DevOps pipelines." },
        { category: "COMPLIANCE", subtitle: "Compliance Support", desc: "Support secure software development while meeting industry standards and regulatory requirements." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for SAST?",
      subtitle: "Partner with us to strengthen your application security and reduce vulnerabilities.",
      rows: [
        { img: showcasePie, title: "Application Security Experts", desc: "Identify and fix application code vulnerabilities early with specialists experienced in static code analysis and secure development. We configure scanning rules to match your specific technology stack, including Java, Python, JavaScript, and .NET. Our team helps you eliminate common weaknesses like injection and authentication flaws.", badges: ["Experts", "AppSec"] },
        { img: showcaseBars, title: "End-to-End Code Security", desc: "Protect your intellectual property and application code from development through release by scanning source repositories for security bugs. We verify code compliance against OWASP Top 10, CWE Top 25, and industry-specific security standards. This comprehensive scanning ensures your proprietary code is secure before deployment.", badges: ["Code Security", "Testing"] },
        { img: solutionsDashboard, title: "DevSecOps Integration", desc: "Embed SAST scanning directly into your developer workflows, IDEs, and automated build pipelines via pull-request gates. We deliver precise, line-level remediation guidance directly to engineers, enabling quick code corrections. This automated feedback cycle accelerates secure coding without slowing feature delivery.", badges: ["Integration", "DevSecOps"] },
        { img: showcaseTable, title: "Continuous Support", desc: "Maintain SAST tool accuracy and rule currency through continuous scanning adjustments, false-positive tuning, and developer support. We keep your code scanning policies aligned with emerging secure-coding standards and compliance updates. This ongoing enablement ensures your static analysis programme remains credible and effective.", badges: ["Support", "Assessments"] }
      ]
    },
    cta: {
      title: "Ready to Build More Secure Applications?",
      subtitle: "Strengthen your application security, reduce vulnerabilities, and deliver secure software.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  },
  cwpp: {
    hero: {
      badge: "WORKLOAD SECURITY",
      title1: "Cloud Workload",
      title2: "Protection Platform (CWPP)",
      desc: "Secure cloud workloads across every environment. Protect virtual machines, containers, Kubernetes, serverless applications, and workloads with continuous monitoring, threat detection, and real-time protection.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Secure Cloud Workloads"
    },
    insights: {
      title: "Protect Every Cloud Workload with Confidence",
      subtitle: "Gain complete visibility into your cloud workloads, identify vulnerabilities, detect threats, and respond quickly.",
      cards: [
        { title: "Workload Discovery", desc: "Automatically discover and inventory VMs, containers, Kubernetes clusters, and serverless functions." },
        { title: "Vulnerability Assessment", desc: "Continuously scan workloads for vulnerabilities, misconfigurations, exposed secrets, and malware." },
        { title: "Runtime Protection", desc: "Monitor workloads in real time to detect suspicious behavior, unauthorized access, and active cyber threats." },
        { title: "Threat Detection & Response", desc: "Identify security incidents early with intelligent threat detection and guided incident response." }
      ]
    },
    debt: {
      title1: "Continuous Security Monitoring",
      title2: "and Rapid Response",
      desc: "Protect workloads throughout the entire application lifecycle—from development and deployment to runtime.",
      bullets: [
        "Strengthen cloud security across all environments",
        "Identify and eliminate vulnerabilities before exploitation",
        "Simplify compliance with continuous monitoring"
      ],
      cards: [
        { category: "VISIBILITY", subtitle: "Complete Workload Visibility", desc: "Gain centralized visibility into cloud workloads across AWS, Azure, Google Cloud, and Kubernetes." },
        { category: "MONITORING", subtitle: "Continuous Monitoring", desc: "Monitor workloads 24/7 to detect vulnerabilities, malware, and configuration changes." },
        { category: "PRIORITIZATION", subtitle: "Risk-Based Prioritization", desc: "Prioritize security issues based on business impact, exploitability, and workload criticality." },
        { category: "RUNTIME", subtitle: "Runtime Threat Protection", desc: "Detect and respond to threats in real time before they impact business operations." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for CWPP?",
      subtitle: "Secure your virtual machines, containers, Kubernetes environments, and cloud-native applications.",
      rows: [
        { img: showcasePie, title: "Cloud Security Specialists", desc: "Protect your cloud workloads, virtual machines, containers, and serverless functions with certified cloud security engineers. We deploy workload protection controls that safeguard your infrastructure from the host OS to the application layer. Our team ensures your production workloads meet rigorous security standards.", badges: ["Experts", "Cloud"] },
        { img: showcaseBars, title: "End-to-End Workload Protection", desc: "Secure cloud workloads across all lifecycle phases from configuration security and patch management to live runtime protection. We integrate vulnerability scanning with behavioral monitoring to detect and block active exploit attempts. This comprehensive protection prevents lateral movement and compromise inside your cloud estate.", badges: ["Protection", "End-to-End"] },
        { img: solutionsDashboard, title: "Intelligent Threat Detection", desc: "Leverage eBPF-based runtime monitoring to detect active threats like fileless malware, reverse shells, and cryptominers with minimal overhead. Our system alerts security operations teams to anomalous workload behavior and triggers containment actions automatically. This ensures rapid threat response and minimizes business impact.", badges: ["AI", "Detection"] },
        { img: showcaseTable, title: "Continuous Support", desc: "Sustain cloud workload security and compliance with continuous monitoring, regular vulnerability checks, and policy management. We keep workload protection controls aligned with CIS benchmarks and regulatory updates throughout the year. This ongoing support ensures your cloud infrastructure remains secure and audit-ready.", badges: ["Support", "Monitoring"] }
      ]
    },
    cta: {
      title: "Ready to Protect Your Cloud Workloads?",
      subtitle: "Secure your entire cloud infrastructure with comprehensive CWPP solutions.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  },
  k8s_security: {
    hero: {
      badge: "KUBERNETES & CONTAINERS",
      title1: "Container & Kubernetes",
      title2: "Security",
      desc: "Protect your containerized applications and Kubernetes environments. Ensure robust security posture from build to runtime with comprehensive vulnerability scanning, misconfiguration detection, and continuous monitoring.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Secure Your Clusters"
    },
    insights: {
      title: "Secure Your Cloud-Native Ecosystem",
      subtitle: "Strengthen the security of your dynamic container and Kubernetes deployments across all cloud environments.",
      cards: [
        { title: "Cluster Posture Management", desc: "Continuously scan Kubernetes clusters for misconfigurations and enforce security best practices." },
        { title: "Container Vulnerability Scanning", desc: "Detect vulnerabilities, malware, and exposed secrets in container images across registries and runtime." },
        { title: "RBAC & Identity Governance", desc: "Analyze and govern role-based access control (RBAC) in Kubernetes to prevent privilege escalation." },
        { title: "Runtime Threat Protection", desc: "Monitor container behavior in real-time to detect anomalous activity and stop zero-day attacks." }
      ]
    },
    debt: {
      title1: "Eliminate Blind Spots in",
      title2: "Dynamic Environments",
      desc: "Keep up with the pace of modern development while ensuring that your orchestration layers remain completely secure and compliant.",
      bullets: [
        "Gain deep visibility into ephemeral container workloads",
        "Prevent misconfigurations in Kubernetes manifests",
        "Stop lateral movement within clusters"
      ],
      cards: [
        { category: "VISIBILITY", subtitle: "Full Cluster Visibility", desc: "Visualize all nodes, pods, and namespaces to identify security gaps effortlessly." },
        { category: "COMPLIANCE", subtitle: "Continuous Compliance", desc: "Automate compliance checks against CIS benchmarks for Kubernetes and Docker." },
        { category: "SHIFT-LEFT", subtitle: "Shift-Left Security", desc: "Validate Kubernetes manifests and Helm charts directly in the CI/CD pipeline." },
        { category: "DEFENSE", subtitle: "Active Threat Defense", desc: "Block unauthorized executions and network connections at the container level." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for K8s Security?",
      subtitle: "We help you navigate the complexity of Kubernetes with specialized security expertise.",
      rows: [
        { img: showcasePie, title: "Kubernetes Specialists", desc: "Secure your container orchestration environments with certified Kubernetes administrators and container security engineers. We audit API server settings, etcd encryption, node configurations, and RBAC policies to eliminate cluster risks. Our team helps you design defensible cluster architectures built for secure scaling.", badges: ["Kubernetes", "Specialists"] },
        { img: showcaseBars, title: "Seamless Integration", desc: "Deploy cluster security controls and network segmentation policies natively within managed services like EKS, AKS, and GKE. We integrate runtime security monitoring with your existing SIEM and incident-response platforms via standardized APIs. This ensures container security alerts are correlated with broader enterprise security logs.", badges: ["Integration", "Cloud-Native"] },
        { img: solutionsDashboard, title: "DevSecOps Alignment", desc: "Align container security checks with developer and DevOps workflows through automated manifest linting and registry verification gates. We return actionable, context-aware remediation guidance directly to platform engineers to accelerate configuration fixes. This collaborative alignment prevents misconfigured manifests from reaching production.", badges: ["DevSecOps", "Agility"] },
        { img: showcaseTable, title: "24/7 Cluster Monitoring", desc: "Maintain continuous visibility into cluster control-plane events, container processes, and network communication flows. We run real-time anomaly detection that flags policy violations, cluster-drift, and suspicious container executions. This 24/7 monitoring ensures immediate detection and containment of orchestration threats.", badges: ["Monitoring", "24/7"] }
      ]
    },
    cta: {
      title: "Ready to Secure Your Kubernetes Clusters?",
      subtitle: "Deploy containerized applications with confidence and enterprise-grade protection.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  },
  cdr: {
    hero: {
      badge: "THREAT RESPONSE",
      title1: "Cloud Detection",
      title2: "& Response (CDR)",
      desc: "Detect, investigate, and respond to cloud threats in real time. Continuously monitor workloads, applications, cloud infrastructure, and AI environments to stop attacks before they impact your business.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Detect & Respond"
    },
    insights: {
      title: "Stay Ahead of Modern Cloud Threats",
      subtitle: "Leverage real-time visibility, AI-powered threat analytics, and rapid incident response to identify suspicious activities.",
      cards: [
        { title: "Real-Time Threat Detection", desc: "Continuously monitor cloud workloads, VMs, containers, and serverless applications to detect malicious activities instantly." },
        { title: "Threat Investigation", desc: "Analyze security events with contextual intelligence to identify attack paths, root causes, and business impact." },
        { title: "Incident Response", desc: "Accelerate threat containment and remediation with automated response workflows and expert guidance." },
        { title: "Identity Threat Detection", desc: "Detect suspicious user activities, privilege misuse, and identity-based attacks across cloud environments." }
      ]
    },
    debt: {
      title1: "Investigate and Respond",
      title2: "with Contextual Intelligence",
      desc: "Correlate security events across cloud infrastructure, workloads, identities, and applications for faster root-cause analysis.",
      bullets: [
        "Detect cyber threats in real time before they impact operations",
        "Accelerate investigation and remediation with AI automation",
        "Reduce downtime and operational disruptions"
      ],
      cards: [
        { category: "MONITORING", subtitle: "Continuous Runtime Monitoring", desc: "Monitor cloud environments 24/7 to detect threats, suspicious behavior, and security incidents." },
        { category: "AI THREATS", subtitle: "AI-Powered Threat Intelligence", desc: "Leverage advanced analytics and AI-driven detection to identify emerging cyber threats faster." },
        { category: "AUTOMATION", subtitle: "Intelligent Incident Response", desc: "Reduce response time with automated workflows, remediation recommendations, and guided actions." },
        { category: "HUNTING", subtitle: "Threat Hunting & Analytics", desc: "Proactively identify advanced threats using behavioral analysis and attack path visualization." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for CDR?",
      subtitle: "Partner with us to detect threats faster, respond intelligently, and protect your cloud infrastructure.",
      rows: [
        { img: showcasePie, title: "Cloud Security Experts", desc: "Detect and respond to cloud threats with specialists experienced in cloud forensics, threat hunting, and incident response. We analyze control-plane activity and telemetry across AWS, Azure, and GCP to expose active attack campaigns. Our experts guide your team through structured cloud incident investigation and containment workflows.", badges: ["Experts", "CDR"] },
        { img: showcaseBars, title: "End-to-End Threat Protection", desc: "Protect your multi-cloud estate by correlating threat signals across control-plane logs, network flows, and workload runtime events. We ensure no visibility gaps remain by integrating security telemetry into a single, unified detection canvas. This comprehensive protection exposes advanced attack campaigns targeting your cloud resources.", badges: ["Protection", "Unified"] },
        { img: solutionsDashboard, title: "AI-Driven Operations", desc: "Leverage machine-learning-driven analytics to identify account compromises, privilege escalations, and data exfiltration patterns. Our system automatically prioritizes cloud alerts by confidence and business impact, triggering automated containment playbooks. This reduces response times and helps analysts resolve threats efficiently.", badges: ["AI", "Operations"] },
        { img: showcaseTable, title: "Continuous Security Support", desc: "Maintain continuous cloud threat readiness with managed detection and response services, regular threat hunts, and forensic support. We supply your operations team with real-time threat intelligence updates and custom cloud detection rules. This ongoing support ensures your defenses evolve alongside modern cloud attack techniques.", badges: ["Support", "Incident Response"] }
      ]
    },
    cta: {
      title: "Ready to Strengthen Your Cloud Security?",
      subtitle: "Detect threats faster, respond intelligently, and protect your infrastructure.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  },
  cloud_cost: {
    hero: {
      badge: "COST OPTIMIZATION",
      title1: "Cloud Cost",
      title2: "Management",
      desc: "Optimize your cloud expenditure without sacrificing performance or security. Gain complete visibility into your cloud spend, identify waste, and enforce financial governance across all your cloud environments.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Optimize Spend"
    },
    insights: {
      title: "Maximize the Value of Your Cloud Investments",
      subtitle: "Correlate cloud usage with security and operations to ensure you are running an efficient, lean, and highly optimized infrastructure.",
      cards: [
        { title: "Spend Visibility & Analytics", desc: "Gain a unified view of your cloud costs across AWS, Azure, and GCP down to the resource level." },
        { title: "Waste Identification", desc: "Automatically detect idle, orphaned, or over-provisioned resources and receive actionable downsizing recommendations." },
        { title: "FinOps Governance", desc: "Implement budgets, cost allocation tags, and automated alerts to prevent unexpected cost spikes." },
        { title: "Security-Cost Correlation", desc: "Ensure security investments are cost-effective and eliminate redundant security tooling expenditures." }
      ]
    },
    debt: {
      title1: "Eliminate Cloud Waste and",
      title2: "Improve Financial Accountability",
      desc: "Empower engineering and finance teams to collaborate on cloud efficiency with data-driven insights and automated cost controls.",
      bullets: [
        "Reduce monthly cloud bills significantly",
        "Forecast future cloud spend with high accuracy",
        "Align engineering decisions with business budgets"
      ],
      cards: [
        { category: "VISIBILITY", subtitle: "Unified Cost Dashboards", desc: "Visualize spend trends, anomalies, and cost drivers across multi-cloud environments in real time." },
        { category: "OPTIMIZATION", subtitle: "Automated Rightsizing", desc: "Leverage machine learning to automatically recommend optimal instance types based on historical usage." },
        { category: "ACCOUNTABILITY", subtitle: "Chargeback & Showback", desc: "Accurately allocate cloud costs to specific departments, projects, or teams." },
        { category: "FORECASTING", subtitle: "Predictive Analytics", desc: "Anticipate future cloud expenses and plan budgets proactively with AI-driven forecasting." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for Cloud Cost?",
      subtitle: "We combine FinOps best practices with deep cloud engineering expertise.",
      rows: [
        { img: showcasePie, title: "FinOps Experts", desc: "Optimize cloud and AI spending with certified FinOps practitioners who bridge the gap between engineering, finance, and leadership. We design transparent cost-allocation models, tag management standards, and cost accountability frameworks. Our team ensures your cloud investments are aligned with business priorities and budget targets.", badges: ["FinOps", "Experts"] },
        { img: showcaseBars, title: "Actionable Insights", desc: "Deliver concrete cost-optimization results through rightsizing compute resources, terminating idle assets, and structuring purchasing plans. We provide engineering teams with clear implementation guides and effort-to-savings estimates for every optimization task. This structured approach consistently reduces waste without impacting system performance.", badges: ["Insights", "Actionable"] },
        { img: solutionsDashboard, title: "Continuous Optimization", desc: "Establish cloud cost management as a continuous engineering discipline through automated anomaly checks and budget alerts. We configure monitoring pipelines that flag cost spikes in near-real-time to prevent unexpected billing surprises. This continuous optimization keeps cloud spend aligned with financial plans throughout the year.", badges: ["Optimization", "Continuous"] },
        { img: showcaseTable, title: "Holistic Cloud Strategy", desc: "Evaluate cost optimization decisions alongside workload performance, high availability, security, and growth plans. We ensure cost-reduction activities do not introduce operational risks, compatibility issues, or security compliance gaps. This integrated strategy delivers sustainable cloud savings that support long-term business goals.", badges: ["Strategy", "Holistic"] }
      ]
    },
    cta: {
      title: "Ready to Optimize Your Cloud Spend?",
      subtitle: "Stop paying for idle resources and start maximizing your cloud ROI today.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  },
  wiz_sensor: {
    hero: {
      badge: "RUNTIME PROTECTION",
      title1: "Wiz Sensor:",
      title2: "Runtime Protection",
      desc: "Protect every workload and AI application in real time. Secure your cloud workloads continuously, detect active threats, validate vulnerabilities, and stop attacks before they impact your business.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Secure Runtime"
    },
    insights: {
      title: "Real-Time Runtime Protection for Modern Cloud",
      subtitle: "Combine runtime monitoring with intelligent threat detection to protect VMs, containers, Kubernetes, serverless apps, and AI workloads.",
      cards: [
        { title: "Runtime Threat Detection", desc: "Continuously monitor workloads to identify suspicious behavior, malware, unauthorized access, and active cyber threats." },
        { title: "Vulnerability Validation", desc: "Verify which vulnerabilities are actively exploitable in runtime, enabling teams to focus on high-priority risks." },
        { title: "AI Workload Protection", desc: "Secure AI models, agents, and ML applications by detecting runtime anomalies and malicious activities." },
        { title: "Automated Threat Response", desc: "Automatically contain malicious processes, isolate compromised workloads, and reduce the impact of incidents." }
      ]
    },
    debt: {
      title1: "Detect and Block Threats",
      title2: "Before They Spread",
      desc: "Deploy lightweight runtime sensors with minimal performance impact across cloud and hybrid environments.",
      bullets: [
        "Gain complete visibility into workloads and AI applications",
        "Detect abnormal behavior, advanced threats, and emerging attacks",
        "Block malware, ransomware, and suspicious processes instantly"
      ],
      cards: [
        { category: "VISIBILITY", subtitle: "Continuous Runtime Visibility", desc: "Gain complete visibility into workloads, containers, Kubernetes clusters, VMs, and AI applications." },
        { category: "AI DETECTION", subtitle: "AI-Powered Threat Detection", desc: "Leverage intelligent analytics to detect abnormal behavior, advanced threats, and cyber attacks." },
        { category: "PREVENTION", subtitle: "Real-Time Attack Prevention", desc: "Detect and block malware, ransomware, suspicious processes, and unauthorized activities before they spread." },
        { category: "INTELLIGENCE", subtitle: "Unified Security Intelligence", desc: "Correlate runtime events with cloud infrastructure, identities, applications, and network activity." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for Runtime Security?",
      subtitle: "Secure your cloud workloads and AI applications with comprehensive runtime protection solutions.",
      rows: [
        { img: showcasePie, title: "Cloud Security Experts", desc: "Deploy runtime protection with security specialists experienced in low-level Linux telemetry, kernel instrumentation, and agent operations. We manage Wiz Sensor rollouts across large virtual machine fleets, container engines, and Kubernetes clusters. Our team ensures sensor configurations meet strict performance and security requirements.", badges: ["Experts", "Runtime"] },
        { img: showcaseBars, title: "Lightweight Deployment", desc: "Implement runtime visibility with minimal performance impact using lightweight, eBPF-based system monitoring. We baseline resource consumption and tune sensor configurations to prevent application latency or cpu-spikes. This ensures your production workloads remain fully protected without compromising operational performance.", badges: ["Lightweight", "Performance"] },
        { img: solutionsDashboard, title: "Threat Hunting & Forensics", desc: "Gather detailed process-execution, network-connection, and file-system event timelines to support proactive threat hunts and investigations. We reconstruct incident histories to determine threat actor access methods, lateral movement, and data exposure details. This forensic intelligence helps harden workloads and meets audit reporting requirements.", badges: ["Forensics", "Hunting"] },
        { img: showcaseTable, title: "Continuous Monitoring", desc: "Maintain runtime security visibility across all workloads with continuous health checks, automated sensor updates, and policy audits. We monitor sensor status to ensure comprehensive protection is maintained as resources scale up and down. This managed runtime protection ensures consistent risk visibility across your entire estate.", badges: ["Monitoring", "Continuous"] }
      ]
    },
    cta: {
      title: "Ready to Protect Your Workloads in Real-Time?",
      subtitle: "Deploy active runtime defenses to thwart attacks as they happen.",
      primary: "Contact Our Experts",
      secondary: "Request Consultation"
    }
  }

,
  soc2: {
    hero: {
      badge: "SECURITY STANDARD",
      title1: "SOC 2",
      title2: "Compliance Services",
      desc: "Build customer trust with automated SOC 2 compliance. We help businesses achieve and maintain SOC 2 certification through automated evidence collection, continuous monitoring, and audit-ready documentation.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Achieve SOC 2"
    },
    insights: {
      title: "Achieve SOC 2 Compliance with Confidence",
      subtitle: "Implement security controls, automate compliance processes, and prepare for successful audits while reducing manual effort.",
      cards: [
        { title: "SOC 2 Readiness Assessment", desc: "Evaluate your current security posture, identify compliance gaps, and build a roadmap for successful certification." },
        { title: "Automated Evidence Collection", desc: "Collect security evidence automatically from cloud platforms, identity providers, and business applications." },
        { title: "Continuous Control Monitoring", desc: "Monitor security controls in real time to ensure continuous compliance and quickly detect configuration changes." },
        { title: "Audit Preparation", desc: "Simplify SOC 2 audits by organizing documentation, mapping controls, and collaborating efficiently with auditors." }
      ]
    },
    debt: {
      title1: "Reduce Audit Preparation Time",
      title2: "and Automate Compliance",
      desc: "Manage controls, policies, evidence, risks, and audit status from one unified dashboard.",
      bullets: [
        "Build customer confidence and trust",
        "Strengthen data security and privacy",
        "Meet customer and regulatory requirements"
      ],
      cards: [
        { category: "MONITORING", subtitle: "Continuous Compliance Monitoring", desc: "Monitor security controls throughout the year instead of preparing only before audits." },
        { category: "DASHBOARD", subtitle: "Centralized Compliance Dashboard", desc: "Manage controls, policies, evidence, risks, and audit status from one unified dashboard." },
        { category: "COLLABORATION", subtitle: "Auditor Collaboration", desc: "Share evidence securely, track audit requests, and streamline communication with external auditors." },
        { category: "TRUST CENTER", subtitle: "Trust Center Integration", desc: "Showcase your security posture with a secure Trust Center where customers can access compliance documents." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for SOC 2?",
      subtitle: "Our experienced consultants help organizations successfully achieve and maintain SOC 2 compliance.",
      rows: [
        { img: showcasePie, title: "Compliance Experts", desc: "Partner with our certified compliance consultants who specialize in SOC 2 Trust Services Criteria design and implementation. We help you translate complex security requirements into clear, practical engineering policies that secure your customer data. Our team guides you through control mapping, audit readiness, and continuous compliance posture validation.", badges: ["Experts", "SOC 2"] },
        { img: showcaseBars, title: "Automated Compliance", desc: "Eliminate the manual evidence-gathering burden by deploying automated integrations that continuously monitor your cloud infrastructure and business systems. We establish automated collection pipelines that route auditor-ready evidence to a secure repository in real time. This keeps your compliance posture current and reduces audit preparation time significantly.", badges: ["Automation", "Compliance"] },
        { img: solutionsDashboard, title: "Ongoing Management", desc: "Maintain your SOC 2 Type II compliance standards throughout the year with continuous monitoring, regular control testing, and policy updates. We help you detect configuration drift and security exceptions before they become audit issues. Our ongoing advisory ensures your security posture remains resilient as your technology environment grows.", badges: ["Management", "Continuous"] },
        { img: showcaseTable, title: "End-to-End Support", desc: "Govern your SOC 2 compliance lifecycle from initial readiness assessment and policy definition to audit facilitation and ongoing management. We work alongside your security teams to implement necessary controls, collect evidence, and address gaps before your audit begins. This comprehensive guidance ensures a smooth audit experience and successful certification.", badges: ["Support", "End-to-End"] }
      ]
    },
    cta: {
      title: "Ready to Achieve SOC 2 Compliance?",
      subtitle: "Simplify compliance, automate security controls, and build lasting trust with your customers.",
      primary: "Contact Us Today",
      secondary: "Request Consultation"
    }
  },
  iso27001: {
    hero: {
      badge: "GLOBAL STANDARD",
      title1: "ISO 27001",
      title2: "Compliance Services",
      desc: "Build a secure and scalable Information Security Management System (ISMS). We help organizations design, implement, and maintain a secure ISMS that meets international security standards.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Achieve ISO 27001"
    },
    insights: {
      title: "Strengthen Your Information Security",
      subtitle: "Establish a risk-based security framework, automate compliance activities, and maintain continuous audit readiness.",
      cards: [
        { title: "ISMS Implementation", desc: "Design and implement a complete Information Security Management System aligned with ISO 27001 best practices." },
        { title: "Risk Assessment & Management", desc: "Identify, assess, and manage information security risks while linking controls directly to business objectives." },
        { title: "Automated Evidence Collection", desc: "Automatically collect compliance evidence from cloud platforms, identity providers, and security tools." },
        { title: "Audit Preparation", desc: "Prepare documentation, organize evidence, and support internal and external audits for certification." }
      ]
    },
    debt: {
      title1: "Reduce Cybersecurity and",
      title2: "Operational Risks",
      desc: "Keep your organization prepared for surveillance audits and recertification with real-time monitoring.",
      bullets: [
        "Protect sensitive business information",
        "Improve customer confidence and trust",
        "Strengthen enterprise security governance"
      ],
      cards: [
        { category: "MANAGEMENT", subtitle: "Centralized Control Management", desc: "Manage ISO 27001 controls, ownership, policies, and evidence from a single dashboard." },
        { category: "RISK", subtitle: "Enterprise Risk Management", desc: "Connect security risks directly to controls, policies, and corrective actions for better visibility." },
        { category: "VENDORS", subtitle: "Third-Party Risk Management", desc: "Assess suppliers and vendors through centralized risk evaluations and continuous monitoring." },
        { category: "POLICIES", subtitle: "Policy & Document Management", desc: "Create, review, approve, and maintain security policies with complete version control." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for ISO 27001?",
      subtitle: "Partner with us to build a secure, scalable ISMS that protects your business.",
      rows: [
        { img: showcasePie, title: "Certified Security Experts", desc: "Secure your information assets by partnering with certified ISO 27001 Lead Auditors and security management consultants. We design robust Information Security Management Systems (ISMS) tailored to your organization's business objectives and risk tolerance. Our experts ensure your controls meet international standards and satisfy stringent customer security demands.", badges: ["Certified", "Experts"] },
        { img: showcaseBars, title: "End-to-End Compliance", desc: "Manage your complete ISO 27001 implementation journey from initial gap analysis and risk assessment to certification audit support. We help you draft essential documentation, define control objectives, and train employees on security policies. Our comprehensive services minimize operational disruptions and ensure a successful certification outcome.", badges: ["End-to-End", "Compliance"] },
        { img: solutionsDashboard, title: "Intelligent Automation", desc: "Automate continuous compliance monitoring and evidence collection for your ISO 27001 Annex A controls across multi-cloud environments. We deploy intelligent dashboards that track control effectiveness and flag compliance deviations in near-real-time. This automated oversight reduces manual effort and provides constant visibility into your security posture.", badges: ["Automation", "Intelligent"] },
        { img: showcaseTable, title: "Continuous Improvement", desc: "Drive long-term security maturity by establishing structured internal audit cycles, management reviews, and corrective action workflows. We help you continuously refine your ISMS to adapt to new security threats, operational changes, and business expansions. This structured approach maintains your certification integrity and enhances overall security resilience.", badges: ["Improvement", "Monitoring"] }
      ]
    },
    cta: {
      title: "Ready to Achieve ISO 27001 Certification?",
      subtitle: "Strengthen customer trust and meet international security standards today.",
      primary: "Contact Us Today",
      secondary: "Request Consultation"
    }
  },
  hipaa: {
    hero: {
      badge: "HEALTHCARE COMPLIANCE",
      title1: "HIPAA",
      title2: "Compliance Services",
      desc: "Protect sensitive healthcare data and meet regulatory requirements. We help healthcare providers and SaaS companies achieve HIPAA compliance through automated monitoring and audit-ready documentation.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Ensure HIPAA Compliance"
    },
    insights: {
      title: "Secure Healthcare Information with Confidence",
      subtitle: "Implement compliant security controls, manage risks, and maintain continuous compliance while reducing manual effort.",
      cards: [
        { title: "HIPAA Readiness Assessment", desc: "Evaluate your current security posture, identify compliance gaps, and create a roadmap for HIPAA implementation." },
        { title: "Security & Privacy Program", desc: "Implement administrative, technical, and physical safeguards to protect Protected Health Information (PHI)." },
        { title: "Continuous Compliance Monitoring", desc: "Monitor HIPAA security controls continuously and receive alerts when compliance issues occur." },
        { title: "Audit & Assessment Support", desc: "Prepare documentation, organize evidence, and simplify HIPAA audits with expert guidance." }
      ]
    },
    debt: {
      title1: "Reduce Security and",
      title2: "Compliance Risks",
      desc: "Manage controls, policies, evidence, risks, and compliance activities from a single platform.",
      bullets: [
        "Protect sensitive patient and healthcare data",
        "Meet HIPAA Privacy and Security Rule requirements",
        "Build patient and customer trust"
      ],
      cards: [
        { category: "MONITORING", subtitle: "Continuous Compliance Monitoring", desc: "Track HIPAA security and privacy controls in real time to maintain continuous compliance." },
        { category: "RISK", subtitle: "PHI Risk Management", desc: "Monitor risks associated with Protected Health Information and strengthen healthcare data security." },
        { category: "DOCUMENTATION", subtitle: "Audit-Ready Documentation", desc: "Maintain organized evidence and compliance records for audits and regulatory reviews." },
        { category: "AUTOMATION", subtitle: "Automated Compliance Workflows", desc: "Reduce manual compliance tasks with intelligent automation and evidence collection." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for HIPAA?",
      subtitle: "We help healthcare organizations and technology providers successfully achieve HIPAA compliance.",
      rows: [
        { img: showcasePie, title: "Healthcare Compliance Experts", desc: "Protect patient health information (PHI) with compliance architects who specialize in HIPAA Security, Privacy, and Breach Notification Rules. We design secure data controls that safeguard electronic PHI across cloud databases, APIs, and clinical workflows. Our consultants ensure healthcare technologies meet federal standards without compromising operational efficiency.", badges: ["Healthcare", "Experts"] },
        { img: showcaseBars, title: "End-to-End Services", desc: "Govern your healthcare compliance program from initial risk analysis and policy development to business associate agreement (BAA) reviews and audit support. We help you implement administrative, physical, and technical safeguards that protect patient privacy across all operations. Our comprehensive support simplifies HIPAA complexity and protects your business from costly regulatory penalties.", badges: ["End-to-End", "Services"] },
        { img: solutionsDashboard, title: "Intelligent Automation", desc: "Automate HIPAA compliance monitoring and evidence collection across your cloud infrastructure, database systems, and access control platforms. We run continuous policy checks that verify data encryption, access logging, and privilege settings in real time. This automated oversight ensures your healthcare environment remains continuously secure and audit-ready.", badges: ["Automation", "Intelligent"] },
        { img: showcaseTable, title: "Ongoing Support", desc: "Maintain continuous compliance readiness with ongoing HIPAA risk assessments, staff training updates, and expert advisory support. We help you adapt security controls to new healthcare application integrations and changing cloud configurations throughout the year. This persistent partnership ensures patient data remains protected against emerging cybersecurity threats.", badges: ["Support", "Continuous"] }
      ]
    },
    cta: {
      title: "Ready to Achieve HIPAA Compliance?",
      subtitle: "Protect healthcare data and simplify compliance with our comprehensive services.",
      primary: "Contact Us Today",
      secondary: "Request Consultation"
    }
  },
  gdpr: {
    hero: {
      badge: "DATA PRIVACY",
      title1: "GDPR",
      title2: "Compliance Services",
      desc: "Strengthen data privacy and meet global regulatory requirements. We help organizations implement GDPR controls, automate processes, and maintain continuous visibility into privacy risks.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Ensure GDPR Compliance"
    },
    insights: {
      title: "Simplify GDPR Compliance",
      subtitle: "Build a comprehensive privacy program with automated monitoring, centralized documentation, and continuous management.",
      cards: [
        { title: "Data Privacy Program", desc: "Design and implement privacy policies, data protection controls, and governance processes aligned with GDPR." },
        { title: "Risk Assessment & Data Protection", desc: "Identify privacy risks, assess processing activities, and implement controls to protect sensitive info." },
        { title: "Automated Evidence Collection", desc: "Automatically collect compliance evidence from cloud services, apps, and identity platforms." },
        { title: "Continuous Compliance Monitoring", desc: "Monitor GDPR controls continuously to detect privacy risks and policy violations in real time." }
      ]
    },
    debt: {
      title1: "Improve Customer Trust",
      title2: "and Transparency",
      desc: "Manage policies, risks, controls, evidence, and compliance activities from one unified platform.",
      bullets: [
        "Protect personal and sensitive data",
        "Meet GDPR regulatory requirements",
        "Simplify compliance management and prepare for audits"
      ],
      cards: [
        { category: "PROTECTION", subtitle: "Personal Data Protection", desc: "Protect customer and employee data through strong privacy controls and security best practices." },
        { category: "MONITORING", subtitle: "Continuous Privacy Monitoring", desc: "Monitor compliance activities, privacy controls, and regulatory requirements throughout the year." },
        { category: "VENDORS", subtitle: "Third-Party Risk Management", desc: "Assess vendors and service providers to ensure they meet GDPR data protection requirements." },
        { category: "AUTOMATION", subtitle: "AI-Powered Compliance Automation", desc: "Reduce manual work through intelligent evidence collection and automated monitoring." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for GDPR?",
      subtitle: "Partner with us to protect personal data and strengthen privacy governance.",
      rows: [
        { img: showcasePie, title: "Privacy & Compliance Experts", desc: "Secure personal data assets by partnering with privacy consultants experienced in GDPR compliance and international data protection laws. We help you establish lawful data processing foundations, consent management systems, and robust data privacy impact assessments (DPIAs). Our experts ensure your privacy frameworks satisfy stringent regulatory expectations and protect user rights.", badges: ["Privacy", "Experts"] },
        { img: showcaseBars, title: "End-to-End Compliance", desc: "Govern your data privacy program from initial gap analysis and data mapping to data protection officer (DPO) support and breach response planning. We design practical privacy policies, cookie controls, and data transfer agreements that align with your business operations. Our comprehensive services simplify GDPR complexity and minimize data handling risks.", badges: ["End-to-End", "Compliance"] },
        { img: solutionsDashboard, title: "Intelligent Automation", desc: "Automate personal data discovery, data flow mapping, and privacy control verification across your database systems and cloud infrastructure. We establish automated workflows that monitor data encryption, retention periods, and access privileges to detect policy violations instantly. This automation ensures continuous compliance and simplifies regulatory reporting requirements.", badges: ["Automation", "Intelligent"] },
        { img: showcaseTable, title: "Continuous Support", desc: "Sustain GDPR compliance maturity with ongoing privacy audits, regular policy updates, and expert advisory support throughout the year. We help you adapt privacy controls to new product feature developments and changing third-party data processing relationships. This persistent oversight protects your business from data compliance gaps and regulatory penalties.", badges: ["Support", "Continuous"] }
      ]
    },
    cta: {
      title: "Ready to Achieve GDPR Compliance?",
      subtitle: "Protect personal data and simplify regulatory compliance with our comprehensive services.",
      primary: "Contact Us Today",
      secondary: "Request Consultation"
    }
  },
  fedramp: {
    hero: {
      badge: "FEDERAL SECURITY",
      title1: "FedRAMP",
      title2: "Compliance Services",
      desc: "Achieve federal-grade cloud security. We help cloud service providers implement FedRAMP controls, automate compliance activities, and maintain continuous monitoring for government markets.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Achieve FedRAMP"
    },
    insights: {
      title: "Secure Your Cloud for Federal Agencies",
      subtitle: "Implement NIST-based security controls, streamline authorization processes, and maintain continuous compliance.",
      cards: [
        { title: "FedRAMP Readiness Assessment", desc: "Assess your cloud environment, identify gaps, and develop a roadmap toward FedRAMP authorization." },
        { title: "Security Control Implementation", desc: "Implement NIST 800-53 security controls, policies, and technical safeguards." },
        { title: "Continuous Monitoring", desc: "Monitor cloud security controls and vulnerabilities continuously to maintain authorization readiness." },
        { title: "Audit & Authorization Support", desc: "Prepare documentation and support 3PAO assessments and authorization activities." }
      ]
    },
    debt: {
      title1: "Accelerate Authorization",
      title2: "Readiness",
      desc: "Manage controls, policies, evidence, risks, and remediation activities from a unified platform.",
      bullets: [
        "Meet U.S. federal cloud security requirements",
        "Build trust with government agencies",
        "Strengthen cloud security and resilience"
      ],
      cards: [
        { category: "NIST 800-53", subtitle: "NIST 800-53 Compliance", desc: "Implement and manage comprehensive security controls aligned with FedRAMP standards." },
        { category: "AUTOMATION", subtitle: "Automated Evidence Collection", desc: "Collect security evidence automatically from cloud infrastructure and security tools." },
        { category: "POA&M", subtitle: "Risk & POA&M Management", desc: "Track vulnerabilities, remediation activities, and Plans of Action & Milestones with visibility." },
        { category: "DOCUMENTATION", subtitle: "Audit-Ready Documentation", desc: "Maintain organized documentation and compliance records for federal assessments." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for FedRAMP?",
      subtitle: "Our specialists help organizations successfully implement and maintain FedRAMP requirements.",
      rows: [
        { img: showcasePie, title: "FedRAMP Security Experts", desc: "Accelerate your federal cloud authorization journey with certified security architects experienced in FedRAMP Joint Authorization Board (JAB) and agency frameworks. We help you design secure cloud architectures that meet the rigorous NIST SP 800-53 security controls. Our consultants ensure your cloud services are ready for federal agency deployment.", badges: ["FedRAMP", "Experts"] },
        { img: showcaseBars, title: "End-to-End Support", desc: "Govern your entire FedRAMP authorization lifecycle from readiness assessment and SSP writing through 3PAO audit coordination and continuous monitoring. We implement compliant boundary controls, log management systems, and incident response playbooks. This end-to-end guidance minimizes compliance friction and shortens authorization timelines.", badges: ["Support", "End-to-End"] },
        { img: solutionsDashboard, title: "Intelligent Automation", desc: "Automate evidence collection and continuous monitoring requirements across your federal cloud environment using advanced compliance tools. We run automated policy checks that track configuration integrity, vulnerability statuses, and access logs in near-real-time. This automation simplifies the compilation of monthly compliance reports for federal agencies.", badges: ["Automation", "Intelligent"] },
        { img: showcaseTable, title: "Ongoing Readiness", desc: "Sustain your FedRAMP Authorization to Operate (ATO) with continuous vulnerability scanning, annual assessment preparation, and expert advisory support. We help you manage system changes, update security documentation, and coordinate with federal agency sponsors. This ongoing support keeps your cloud service compliant and secure throughout the year.", badges: ["Readiness", "Continuous"] }
      ]
    },
    cta: {
      title: "Ready to Achieve FedRAMP Compliance?",
      subtitle: "Expand into government markets with confidence by achieving federal-grade cloud security.",
      primary: "Contact Us Today",
      secondary: "Request Consultation"
    }
  },
  cmmc: {
    hero: {
      badge: "DEFENSE CYBERSECURITY",
      title1: "CMMC",
      title2: "Compliance Services",
      desc: "Strengthen defense cybersecurity. Protect Controlled Unclassified Information (CUI) and meet U.S. Department of Defense cybersecurity requirements with Anshiya's CMMC Compliance Services.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Achieve CMMC"
    },
    insights: {
      title: "Secure Your Defense Supply Chain",
      subtitle: "Implement cybersecurity best practices, automate compliance, and maintain continuous readiness for CMMC assessments.",
      cards: [
        { title: "CMMC Readiness Assessment", desc: "Evaluate your cybersecurity posture, identify compliance gaps, and develop a roadmap toward certification." },
        { title: "Security Control Implementation", desc: "Implement CMMC controls aligned with NIST 800-171 and DoD cybersecurity requirements." },
        { title: "Continuous Compliance Monitoring", desc: "Monitor security controls continuously to quickly identify risks or configuration changes." },
        { title: "Assessment & Audit Support", desc: "Prepare documentation and support self-assessments and third-party CMMC certification reviews." }
      ]
    },
    debt: {
      title1: "Protect Federal Contract Information",
      title2: "and CUI",
      desc: "Manage policies, controls, risks, evidence, and remediation activities from one unified platform.",
      bullets: [
        "Meet Department of Defense cybersecurity requirements",
        "Improve assessment readiness and reduce compliance risks",
        "Increase trust with government agencies and defense partners"
      ],
      cards: [
        { category: "CONTROLS", subtitle: "CMMC Security Controls", desc: "Implement and manage cybersecurity controls required for CMMC certification." },
        { category: "AUTOMATION", subtitle: "Automated Evidence Collection", desc: "Automatically collect compliance evidence from cloud infrastructure and endpoints." },
        { category: "POA&M", subtitle: "POA&M Management", desc: "Track Plans of Action & Milestones and remediation progress with complete visibility." },
        { category: "DOCUMENTATION", subtitle: "Audit-Ready Documentation", desc: "Maintain organized documentation and compliance records for certification assessments." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for CMMC?",
      subtitle: "Our specialists help organizations successfully implement and maintain CMMC compliance.",
      rows: [
        { img: showcasePie, title: "Defense Compliance Experts", desc: "Secure your defense contracts by partnering with compliance specialists experienced in CMMC Level 1, 2, and 3 security requirements. We design security controls that protect Federal Contract Information (FCI) and Controlled Unclassified Information (CUI) across your systems. Our experts ensure your company meets Department of Defense cybersecurity standards.", badges: ["Defense", "Experts"] },
        { img: showcaseBars, title: "End-to-End Services", desc: "Govern your CMMC compliance lifecycle from initial gap analysis and SSP writing to first-cycle audit support. We implement required technical safeguards, establish incident response protocols, and build compliant access boundaries. Our comprehensive support simplifies compliance and protects your defense supply chain operations.", badges: ["End-to-End", "Services"] },
        { img: solutionsDashboard, title: "Intelligent Automation", desc: "Automate CMMC compliance monitoring and evidence collection across your networks, endpoints, and cloud services using integrated tools. We establish continuous policy checks that verify security configurations, patch levels, and access logging automatically. This automated oversight reduces audit preparation times and ensures persistent readiness.", badges: ["Automation", "Intelligent"] },
        { img: showcaseTable, title: "Ongoing Support", desc: "Maintain CMMC audit readiness with ongoing vulnerability scans, regular control reviews, and proactive guidance on defense regulatory changes. We help you manage system upgrades, coordinate employee security training, and update compliance documentation. This continuous advisory ensures your systems remain secure and compliant with DoD mandates.", badges: ["Support", "Ongoing"] }
      ]
    },
    cta: {
      title: "Ready to Achieve CMMC Compliance?",
      subtitle: "Strengthen your cybersecurity and protect sensitive defense information with confidence.",
      primary: "Contact Us Today",
      secondary: "Request Consultation"
    }
  },
  iso42001: {
    hero: {
      badge: "AI GOVERNANCE",
      title1: "ISO 42001 AI",
      title2: "Governance Services",
      desc: "Build responsible AI governance. We help organizations establish frameworks that ensure transparency, accountability, risk management, and regulatory compliance across the entire AI lifecycle.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Achieve ISO 42001"
    },
    insights: {
      title: "Build Trust in Artificial Intelligence",
      subtitle: "Implement responsible AI governance, manage AI risks, and establish policies for secure AI operations.",
      cards: [
        { title: "AIMS Implementation", desc: "Design and implement an Artificial Intelligence Management System aligned with ISO 42001." },
        { title: "AI Risk Management", desc: "Identify, assess, and mitigate risks related to security, privacy, fairness, bias, and transparency." },
        { title: "AI Policy & Governance", desc: "Develop operational procedures, ethical guidelines, and governance models for AI adoption." },
        { title: "Continuous Compliance Monitoring", desc: "Monitor AI governance controls and risk indicators to maintain continuous oversight." }
      ]
    },
    debt: {
      title1: "Enable Secure and",
      title2: "Scalable AI Innovation",
      desc: "Manage AI policies, controls, risks, evidence, and compliance activities from one unified dashboard.",
      bullets: [
        "Establish responsible AI governance",
        "Improve AI transparency and accountability",
        "Reduce AI security, privacy, and ethical risks"
      ],
      cards: [
        { category: "RESPONSIBILITY", subtitle: "Responsible AI Governance", desc: "Establish governance practices that promote ethical and transparent AI deployment." },
        { category: "AUTOMATION", subtitle: "Automated Evidence Collection", desc: "Collect governance evidence automatically from AI platforms and cloud infrastructure." },
        { category: "POLICIES", subtitle: "Policy & Documentation", desc: "Create, review, approve, and maintain AI governance policies with version control." },
        { category: "CONTINUOUS", subtitle: "Continuous AI Compliance", desc: "Maintain ongoing compliance through automated monitoring and continuous improvement." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for ISO 42001?",
      subtitle: "Partner with us to implement trusted AI governance and manage AI risks.",
      rows: [
        { img: showcasePie, title: "AI Governance Experts", desc: "Establish trust in artificial intelligence by partnering with certified ISO 42001 consultants and AI risk management specialists. We design robust Artificial Intelligence Management Systems (AIMS) that ensure ethical, safe, and transparent AI deployments. Our experts guide your organization through AI policy design, algorithmic bias evaluations, and governance audits.", badges: ["AI Governance", "Experts"] },
        { img: showcaseBars, title: "End-to-End Services", desc: "Govern your complete AI compliance lifecycle from initial readiness assessment and AIMS design to algorithmic audit support and certification. We implement practical AI risk controls, define system accountability metrics, and draft essential compliance documentation. Our structured guidance ensures your AI innovations remain responsible, secure, and compliant.", badges: ["End-to-End", "Services"] },
        { img: solutionsDashboard, title: "Intelligent Automation", desc: "Automate AI system inventory tracking, algorithm risk monitoring, and model performance auditing across your cloud platforms. We deploy intelligent compliance tools that track data privacy safeguards, access privileges, and model drift in real time. This automated oversight reduces governance overhead and simplifies evidence collection for audits.", badges: ["Automation", "Intelligent"] },
        { img: showcaseTable, title: "Continuous Support", desc: "Maintain AI governance program effectiveness with continuous AI risk assessments, model monitoring updates, and expert advisory support throughout the year. We help you adapt controls to new machine learning deployments and changing global AI regulations. This persistent partnership protects your AI projects from governance gaps and compliance failures.", badges: ["Support", "Continuous"] }
      ]
    },
    cta: {
      title: "Ready to Build Responsible AI Governance?",
      subtitle: "Implement trusted AI governance and achieve ISO 42001 compliance with confidence.",
      primary: "Contact Us Today",
      secondary: "Request Consultation"
    }
  }

,
  pci_dss: {
    hero: {
      badge: "PAYMENT SECURITY",
      title1: "PCI DSS",
      title2: "Compliance Services",
      desc: "Protect payment data with PCI DSS compliance. We help businesses implement PCI DSS security controls, automate compliance processes, and maintain continuous monitoring to reduce payment security risks.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Achieve PCI DSS"
    },
    insights: {
      title: "Secure Every Payment Transaction",
      subtitle: "Strengthen payment security, minimize compliance risks, and simplify annual PCI DSS assessments.",
      cards: [
        { title: "PCI DSS Readiness Assessment", desc: "Evaluate your payment environment, identify compliance gaps, and create a roadmap for successful implementation." },
        { title: "Security Control Implementation", desc: "Deploy PCI DSS security controls to protect cardholder data, payment systems, and network infrastructure." },
        { title: "Vulnerability & Risk Management", desc: "Identify, assess, and remediate payment security vulnerabilities while reducing cyber risks." },
        { title: "Audit & Assessment Support", desc: "Prepare documentation, organize compliance evidence, and support QSA reviews and annual validations." }
      ]
    },
    debt: {
      title1: "Reduce Payment Fraud and",
      title2: "Cybersecurity Risks",
      desc: "Manage policies, risks, controls, evidence, remediation activities, and compliance reports from one platform.",
      bullets: [
        "Protect cardholder and payment data",
        "Simplify annual compliance assessments",
        "Improve payment infrastructure security"
      ],
      cards: [
        { category: "PROTECTION", subtitle: "Cardholder Data Protection", desc: "Secure payment information using industry-standard security controls, encryption, and access management." },
        { category: "MONITORING", subtitle: "Continuous Security Monitoring", desc: "Track PCI DSS controls, vulnerabilities, and compliance status through real-time monitoring." },
        { category: "AUTOMATION", subtitle: "Automated Evidence Collection", desc: "Automatically collect compliance evidence from payment systems, networks, and security tools." },
        { category: "DOCUMENTATION", subtitle: "Audit-Ready Documentation", desc: "Maintain organized documentation and evidence for internal audits and regulatory reviews." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for PCI DSS?",
      subtitle: "Partner with us to secure your payment environment and protect cardholder data.",
      rows: [
        { img: showcasePie, title: "PCI DSS Compliance Experts", desc: "Protect cardholder data and secure your payment flows by partnering with payment security specialists experienced in PCI DSS v4.0. We design robust cardholder data environments (CDE) that isolate transaction databases and secure merchant processing channels. Our experts ensure your payment systems satisfy card brand security mandates.", badges: ["PCI DSS", "Experts"] },
        { img: showcaseBars, title: "End-to-End Compliance", desc: "Govern your transaction security program from initial scoping and gap assessment through control implementation and final ROC or SAQ validation. We implement compliant network segmentation, database encryption, and access controls to secure payment interfaces. Our comprehensive support simplifies PCI DSS complexity and reduces operational overhead.", badges: ["End-to-End", "Compliance"] },
        { img: solutionsDashboard, title: "Intelligent Automation", desc: "Automate PCI DSS continuous monitoring, configuration checks, and evidence collection across your CDE and database systems. We run automated policy checks that track firewall integrity, log management, and system patch status to flag deviations instantly. This automation keeps your payment environment continuously secure and audit-ready.", badges: ["Automation", "Intelligent"] },
        { img: showcaseTable, title: "Continuous Security Support", desc: "Maintain payment security compliance throughout the year with ongoing vulnerability scans, penetration testing reviews, and expert advisory support. We help you adapt payment controls to new point-of-sale integrations and changing merchant services. This persistent support protects your transactions against emerging payment fraud threats.", badges: ["Support", "Continuous"] }
      ]
    },
    cta: {
      title: "Ready to Achieve PCI DSS Compliance?",
      subtitle: "Secure your payment environment and achieve compliance with our comprehensive services.",
      primary: "Contact Us Today",
      secondary: "Request Consultation"
    }
  },
  hitrust: {
    hero: {
      badge: "HEALTHCARE SECURITY",
      title1: "HITRUST",
      title2: "Compliance Services",
      desc: "Strengthen healthcare security with HITRUST compliance. We help organizations implement controls, automate processes, and maintain continuous monitoring to simplify assessments and build trust.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Achieve HITRUST"
    },
    insights: {
      title: "Simplify HITRUST Compliance",
      subtitle: "Implement security controls, centralize compliance activities, and maintain continuous readiness for HITRUST assessments.",
      cards: [
        { title: "HITRUST Readiness Assessment", desc: "Assess your current security posture, identify compliance gaps, and develop a roadmap for certification." },
        { title: "Security Framework Implementation", desc: "Implement HITRUST controls and security policies to protect sensitive healthcare information." },
        { title: "Continuous Compliance Monitoring", desc: "Monitor HITRUST controls continuously to detect security issues and policy violations in real time." },
        { title: "Audit & Assessment Support", desc: "Prepare documentation, organize evidence, and support HITRUST assessments with audit-ready records." }
      ]
    },
    debt: {
      title1: "Reduce Audit Preparation Time",
      title2: "and Simplify Compliance",
      desc: "Manage controls, policies, evidence, risks, and remediation activities from a unified platform.",
      bullets: [
        "Protect sensitive healthcare and business data",
        "Improve third-party and customer trust",
        "Support continuous regulatory compliance"
      ],
      cards: [
        { category: "DASHBOARD", subtitle: "Centralized Compliance Dashboard", desc: "Manage controls, policies, evidence, risks, and remediation activities from a unified platform." },
        { category: "AUTOMATION", subtitle: "Automated Evidence Collection", desc: "Collect compliance evidence automatically from cloud platforms and security systems." },
        { category: "POLICIES", subtitle: "Policy & Documentation", desc: "Create, maintain, review, and manage security policies with approval workflows." },
        { category: "RISK", subtitle: "Risk & Control Management", desc: "Link risks directly to security controls and monitor remediation progress." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for HITRUST?",
      subtitle: "We help organizations successfully implement and maintain HITRUST compliance.",
      rows: [
        { img: showcasePie, title: "HITRUST Compliance Experts", desc: "Strengthen your healthcare security posture by partnering with compliance architects experienced in the HITRUST CSF framework. We map your security controls to HIPAA, ISO, and NIST standards simultaneously to create a unified security foundation. Our experts ensure your systems satisfy healthcare payer and provider risk requirements.", badges: ["HITRUST", "Experts"] },
        { img: showcaseBars, title: "End-to-End Services", desc: "Govern your HITRUST certification journey from initial scoping and readiness assessment through MyCSF tool management and final validated assessment support. We implement required security controls, draft policy documentation, and coordinate with HITRUST authorized assessors. This end-to-end guidance ensures a successful and efficient certification outcome.", badges: ["End-to-End", "Services"] },
        { img: solutionsDashboard, title: "Intelligent Automation", desc: "Automate control testing and evidence collection across your healthcare database systems, cloud infrastructure, and security platforms. We deploy compliance tracking tools that monitor control effectiveness and flag compliance gaps in near-real-time. This automation significantly reduces the time and cost associated with HITRUST audits.", badges: ["Automation", "Intelligent"] },
        { img: showcaseTable, title: "Ongoing Security Support", desc: "Maintain your HITRUST certification with ongoing CSF model updates, annual interim assessment preparation, and expert advisory support. We help you manage system changes, address newly identified security risks, and coordinate employee security reviews. This continuous support ensures your health systems remain secure and compliant.", badges: ["Support", "Ongoing"] }
      ]
    },
    cta: {
      title: "Ready to Achieve HITRUST Compliance?",
      subtitle: "Strengthen healthcare security, simplify compliance, and achieve HITRUST certification.",
      primary: "Contact Us Today",
      secondary: "Request Consultation"
    }
  },
  nist_ai_rmf: {
    hero: {
      badge: "AI RISK MANAGEMENT",
      title1: "NIST AI RMF",
      title2: "Compliance Services",
      desc: "Build responsible AI with the NIST AI Risk Management Framework. Develop secure, transparent, and trustworthy AI systems that align with the NIST AI RMF.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Govern AI Confidently"
    },
    insights: {
      title: "Govern AI with Confidence",
      subtitle: "Establish AI governance, improve transparency, and ensure responsible AI adoption while reducing compliance complexity.",
      cards: [
        { title: "AI Governance Assessment", desc: "Evaluate your AI environment, identify governance gaps, and develop a roadmap aligned with the NIST AI RMF." },
        { title: "AI Risk Management", desc: "Identify, assess, prioritize, and mitigate AI-related risks, including security, privacy, and bias." },
        { title: "Continuous AI Monitoring", desc: "Monitor AI systems continuously to identify governance issues and operational risks." },
        { title: "Third-Party AI Risk Assessment", desc: "Evaluate AI vendors, cloud providers, and external AI services to reduce supply chain risks." }
      ]
    },
    debt: {
      title1: "Build Trustworthy and",
      title2: "Responsible AI Systems",
      desc: "Track AI risks, governance controls, mitigation plans, and compliance activities from a centralized platform.",
      bullets: [
        "Strengthen AI governance and accountability",
        "Reduce AI security and operational risks",
        "Improve transparency and regulatory readiness"
      ],
      cards: [
        { category: "GOVERNANCE", subtitle: "Responsible AI Governance", desc: "Establish governance processes that promote ethical, secure, and accountable AI operations." },
        { category: "MONITORING", subtitle: "Continuous Risk Monitoring", desc: "Track AI performance, governance controls, and operational risks with real-time alerts." },
        { category: "DOCUMENTATION", subtitle: "Policy & Documentation", desc: "Create, review, approve, and maintain AI governance policies with automated workflows." },
        { category: "AUTOMATION", subtitle: "Intelligent Compliance Automation", desc: "Reduce manual work through automated evidence collection and AI governance reporting." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for NIST AI RMF?",
      subtitle: "Partner with us to implement trusted AI governance and build secure AI solutions.",
      rows: [
        { img: showcasePie, title: "AI Governance Specialists", desc: "Govern your artificial intelligence systems with specialists experienced in the NIST AI Risk Management Framework (AI RMF). We help you map, measure, manage, and govern AI risks to build trustworthy machine learning applications. Our consultants ensure your AI security protocols align with federal guidelines and responsible AI standards.", badges: ["AI", "Specialists"] },
        { img: showcaseBars, title: "End-to-End Management", desc: "Manage your complete AI risk lifecycle from initial framework mapping and system impact analysis to algorithmic control implementation. We design AI inventory catalogs, define risk tolerance metrics, and establish algorithmic accountability standards. This end-to-end support ensures your AI innovations are secure, fair, and transparent.", badges: ["Management", "End-to-End"] },
        { img: solutionsDashboard, title: "Intelligent Automation", desc: "Automate AI risk monitoring, dataset compliance checks, and model performance audits using advanced governance tools. We set up continuous tracking of data privacy safeguards, algorithm inputs, and output bias markers in near-real-time. This automation simplifies AI compliance reporting and maintains high operational standards.", badges: ["Automation", "Intelligent"] },
        { img: showcaseTable, title: "Continuous AI Support", desc: "Sustain your NIST AI RMF program effectiveness with continuous risk profile reviews, model performance checks, and expert advisory support. We help you adapt AI controls to new model releases and evolving international AI regulations throughout the year. This ongoing support ensures your AI applications remain safe and responsible.", badges: ["Support", "Continuous"] }
      ]
    },
    cta: {
      title: "Ready to Build Responsible AI?",
      subtitle: "Strengthen AI governance, reduce AI risks, and build trusted AI solutions for your organization.",
      primary: "Contact Us Today",
      secondary: "Request Consultation"
    }
  },
  dora: {
    hero: {
      badge: "OPERATIONAL RESILIENCE",
      title1: "DORA",
      title2: "Compliance Services",
      desc: "Strengthen digital operational resilience with DORA Compliance. We help financial institutions manage ICT risks, enhance cyber resilience, and achieve compliance with the EU's Digital Operational Resilience Act.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Achieve DORA"
    },
    insights: {
      title: "Strengthen Your Digital Operational Resilience",
      subtitle: "Manage ICT risks, improve cyber resilience, enhance incident response, and strengthen third-party risk management.",
      cards: [
        { title: "DORA Readiness Assessment", desc: "Evaluate your current ICT security posture, identify compliance gaps, and develop a roadmap." },
        { title: "ICT Risk Management", desc: "Identify, assess, monitor, and manage ICT risks across infrastructure, apps, and digital operations." },
        { title: "ICT Incident Management", desc: "Develop incident detection, response, reporting, and recovery processes to minimize disruptions." },
        { title: "Third-Party Risk Management", desc: "Assess, monitor, and manage third-party service providers to ensure DORA compliance." }
      ]
    },
    debt: {
      title1: "Reduce Operational Disruptions",
      title2: "and Enhance Resilience",
      desc: "Manage controls, risks, evidence, audits, incidents, and compliance reporting from a single platform.",
      bullets: [
        "Strengthen digital operational resilience and ICT risk management",
        "Enhance incident response, recovery, and third-party oversight",
        "Maintain continuous regulatory compliance and build trust"
      ],
      cards: [
        { category: "GOVERNANCE", subtitle: "ICT Risk Governance", desc: "Establish governance structures, security policies, and controls for effective ICT risk management." },
        { category: "MONITORING", subtitle: "Continuous Control Monitoring", desc: "Monitor DORA-aligned controls in real time to quickly identify failures and vulnerabilities." },
        { category: "INCIDENTS", subtitle: "Incident Response & Reporting", desc: "Automate incident detection, response workflows, regulatory reporting, and recovery processes." },
        { category: "AUTOMATION", subtitle: "Automated Compliance Workflows", desc: "Streamline evidence collection, risk assessments, and remediation tasks with automation." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for DORA?",
      subtitle: "We help financial organizations implement DORA using industry-leading security practices.",
      rows: [
        { img: showcasePie, title: "DORA Compliance Experts", desc: "Strengthen your financial entity's digital operational resilience by partnering with certified DORA compliance experts. We analyze ICT risk profiles, critical business functions, and third-party dependencies to design compliant resilience frameworks. Our consultants ensure your systems meet European financial sector operational standards.", badges: ["DORA", "Experts"] },
        { img: showcaseBars, title: "End-to-End Services", desc: "Govern your DORA implementation lifecycle from initial readiness assessments and ICT risk framework design to audit support and registrar reporting. We implement operational resilience testing, ICT incident classification workflows, and third-party provider registers. This comprehensive support simplifies compliance and protects financial operations.", badges: ["End-to-End", "Services"] },
        { img: solutionsDashboard, title: "Intelligent Automation", desc: "Automate operational resilience testing, ICT incident tracking, and third-party ICT service provider registers via integrated compliance tools. We run continuous policy checks that monitor ICT network performance, backup recovery times, and service provider dependencies. This automated tracking ensures persistent DORA audit readiness.", badges: ["Automation", "Intelligent"] },
        { img: showcaseTable, title: "Ongoing Compliance Support", desc: "Sustain DORA compliance with ongoing ICT risk reviews, operational resilience exercises, and third-party risk audit coordination. We help you adapt IT controls to new banking software deployments and changing financial guidelines. This continuous advisory protects your digital financial systems from outages and penalties.", badges: ["Support", "Ongoing"] }
      ]
    },
    cta: {
      title: "Ready to Achieve DORA Compliance?",
      subtitle: "Manage ICT risks, ensure regulatory compliance, and build a secure, resilient digital infrastructure.",
      primary: "Contact Us Today",
      secondary: "Request Consultation"
    }
  },
  custom_frameworks: {
    hero: {
      badge: "CUSTOM COMPLIANCE",
      title1: "Custom Compliance",
      title2: "Frameworks",
      desc: "Build compliance around your business. Create and manage custom compliance frameworks tailored to your organization's unique security, regulatory, and customer requirements.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Build Your Framework"
    },
    insights: {
      title: "Flexible Compliance for Every Business",
      subtitle: "Build, manage, and automate compliance programs beyond standard frameworks like SOC 2, ISO 27001, or GDPR.",
      cards: [
        { title: "Custom Framework Design", desc: "Develop compliance frameworks aligned with your business goals and specific industry requirements." },
        { title: "Control Mapping", desc: "Map custom controls to existing security and compliance standards to maximize efficiency." },
        { title: "Risk & Policy Management", desc: "Manage risks, policies, and governance from one centralized platform tailored to your needs." },
        { title: "Continuous Monitoring", desc: "Monitor bespoke compliance controls and identify issues in real time across your infrastructure." }
      ]
    },
    debt: {
      title1: "Stay Continuously Audit-Ready",
      title2: "with Custom Automation",
      desc: "Centralize controls, automate evidence collection, monitor compliance continuously, and simplify governance.",
      bullets: [
        "Build unlimited custom frameworks",
        "Reuse controls across multiple standards",
        "Simplify audits, reporting, and governance"
      ],
      cards: [
        { category: "FLEXIBILITY", subtitle: "Tailored Compliance Solutions", desc: "Custom-built solutions that map exactly to the specific requirements of your unique enterprise." },
        { category: "AUTOMATION", subtitle: "Automated Evidence Collection", desc: "Automatically collect and organize audit evidence regardless of the framework structure." },
        { category: "MONITORING", subtitle: "Continuous Monitoring", desc: "Keep an eye on custom controls with 24/7 automated checks to prevent drift." },
        { category: "REPORTING", subtitle: "Compliance Reporting", desc: "Generate custom reports and dashboards for audits, customers, and stakeholders." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for Custom Frameworks?",
      subtitle: "Build a flexible compliance program that scales and grows with your business.",
      rows: [
        { img: showcasePie, title: "Compliance Experts", desc: "Build customized compliance frameworks with specialists experienced in bespoke regulatory control mapping and security governance design. We consolidate multiple compliance obligations into a single, unified control registry that eliminates redundant audits. Our consultants design security controls tailored to your unique infrastructure.", badges: ["Experts", "Custom"] },
        { img: showcaseBars, title: "Scalable Solutions", desc: "Implement flexible, scalable compliance structures that adapt to your business size, technology stack, and market expansion plans. We design custom frameworks that grow alongside your product developments, enabling quick mapping of new regulations. This scalable architecture minimizes compliance costs and simplifies business operations.", badges: ["Scalable", "Adaptive"] },
        { img: solutionsDashboard, title: "Centralized Governance", desc: "Manage all custom compliance workflows, control ownerships, and evidence files from a single centralized management dashboard. We establish automated notification pipelines that track control check-ins, evidence updates, and exception logs in real time. This centralized oversight keeps business owners, developers, and auditors aligned.", badges: ["Governance", "Centralized"] },
        { img: showcaseTable, title: "Expert Consulting", desc: "Navigate complex compliance mapping challenges with ongoing strategic advisory, control calibration, and framework maturity reviews. We help you integrate compliance checks into your software engineering pipelines and operational workflows seamlessly. This persistent guidance keeps your custom program aligned with industry best practices.", badges: ["Consulting", "Strategic"] }
      ]
    },
    cta: {
      title: "Ready to Build Your Custom Framework?",
      subtitle: "Create a flexible compliance program tailored exactly to your business.",
      primary: "Contact Us Today",
      secondary: "Request Consultation"
    }
  },
  audit_services: {
    hero: {
      badge: "SECURITY AUDITS",
      title1: "Security & Compliance",
      title2: "Audit Services",
      desc: "Simplify security and compliance audits. Prepare for audits with confidence through expert assessment, automated evidence collection, and continuous compliance monitoring.",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Get Audit-Ready"
    },
    insights: {
      title: "Stay Audit-Ready Always",
      subtitle: "Evaluate security controls, identify compliance gaps, and streamline audit preparation for industry standards.",
      cards: [
        { title: "Internal Security Audits", desc: "Evaluate your security controls and identify risks before external assessments." },
        { title: "Compliance Audits", desc: "Support audits for SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR, and other frameworks." },
        { title: "Risk Assessments", desc: "Identify vulnerabilities and prioritize remediation to strengthen security." },
        { title: "Policy & Control Reviews", desc: "Review security policies, procedures, and control effectiveness with expert auditors." }
      ]
    },
    debt: {
      title1: "Faster Audit Preparation",
      title2: "and Reduced Risks",
      desc: "Monitor compliance continuously and stay prepared for future audits with organized, automated documentation.",
      bullets: [
        "Reduce compliance risks and audit stress",
        "Automate documentation and evidence management",
        "Improve regulatory compliance and customer trust"
      ],
      cards: [
        { category: "PREPARATION", subtitle: "Faster Audit Preparation", desc: "Streamline the audit process with expert guidance and pre-audit readiness checks." },
        { category: "EVIDENCE", subtitle: "Evidence Collection", desc: "Automate documentation and organize audit evidence efficiently in one central repository." },
        { category: "MONITORING", subtitle: "Continuous Control Monitoring", desc: "Monitor compliance continuously and stay prepared for future audits without the last-minute scramble." },
        { category: "SUPPORT", subtitle: "End-to-End Audit Support", desc: "From gap analysis to the final report, our team supports you through the entire audit lifecycle." }
      ]
    },
    showcase: {
      title: "Why Choose Anshiya for Audit Services?",
      subtitle: "Strengthen your security posture, simplify audits, and achieve compliance with confidence.",
      rows: [
        { img: showcasePie, title: "Experienced Security Auditors", desc: "Simplify security audits with certified internal auditors experienced in SOC 2, ISO 27001, PCI DSS, HIPAA, and federal frameworks. We perform rigorous compliance reviews, security control assessments, and operational risk evaluations. Our audit teams ensure your company is fully prepared for formal external assessments.", badges: ["Auditors", "Experienced"] },
        { img: showcaseBars, title: "Industry-Standard Expertise", desc: "Evaluate your infrastructure against industry-standard security frameworks to identify vulnerabilities, control gaps, and configuration risks. We provide detailed, objective findings that outline exactly what is required to pass your next formal certification audit. Our expertise ensures your audits are credible and deliver business value.", badges: ["Expertise", "Standards"] },
        { img: solutionsDashboard, title: "Automated Workflows", desc: "Streamline audit evidence management by automated extraction of security configurations, user access rosters, and logs. We configure compliance pipelines that organize evidence files into structured, audit-mapped digital binders automatically. This automated workflow reduces pre-audit manual effort from weeks to hours.", badges: ["Automation", "Workflows"] },
        { img: showcaseTable, title: "Scalable Solutions", desc: "Deploy audit readiness programs that scale efficiently from startup reviews to enterprise-wide multi-framework compliance audits. We customize audit scopes and evidence sampling methods to match your specific technology stack and operational size. This scalable approach provides cost-effective validation of your security controls.", badges: ["Scalable", "Flexible"] }
      ]
    },
    cta: {
      title: "Ready to Get Audit-Ready?",
      subtitle: "Simplify audits, strengthen your security posture, and achieve compliance with confidence.",
      primary: "Contact Us Today",
      secondary: "Request Consultation"
    }
  }

};