import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import blog1 from '../../assets/blog-1.png';
import blog2 from '../../assets/blog-2.png';
import blog3 from '../../assets/blog-3.png';
import './BlogDetails.css';

const blogPostsData = {
  "scale-it-infrastructure": {
    title: "How to scale your IT infrastructure for rapid growth",
    category: "IT Infrastructure",
    date: "July 2, 2026",
    readTime: "6 min read",
    author: "Anshiya Architecture Team",
    image: blog1,
    intro: "As organizations experience rapid scaling, IT infrastructure often becomes the primary bottleneck. Balancing speed, stability, security, and cost requires a structured approach to systems engineering. At Anshiya Innovations, we help businesses build resilient digital foundations designed to scale seamlessly.",
    sections: [
      {
        heading: "1. The Clean Core Infrastructure Strategy",
        content: "Scaling doesn't mean just adding more virtual servers or expanding database clusters arbitrarily. Standardizing configurations and keeping a 'Clean Core' ensures updates are seamless and integration debt remains low. Minimizing custom extensions directly on your database layers avoids critical upgrades from breaking operational workflows."
      },
      {
        heading: "2. Database Scaling and Performance Tuning",
        content: "Databases are usually the first systems to experience performance degradation under heavy load. To prevent bottlenecks, implement read-replicas for query-heavy operations, optimize indexing, and configure connection pooling. For high-growth transactional systems, database sharding or migrating to memory-optimized platforms like SAP HANA can provide the throughput required to sustain operations."
      },
      {
        heading: "3. Containerization and Orchestration",
        content: "Modern scaling relies heavily on containerization. Deploying services in Docker containers managed by Kubernetes allows for auto-scaling based on CPU utilization and memory thresholds. This ensures that when user demand spikes, new nodes are dynamically provisioned to handle the load and terminated when traffic decreases, optimizing infrastructure cost."
      },
      {
        heading: "4. Load Balancing and Content Delivery Networks (CDNs)",
        content: "Distributing user traffic evenly across servers is critical to maintaining zero-downtime operations. Deploy high-performance load balancers (like NGINX or cloud-native solutions) to manage traffic spikes. Additionally, leverage global Content Delivery Networks (CDNs) to cache static assets close to end-users, reducing latency and offloading server strain."
      }
    ],
    conclusion: "Scaling IT infrastructure requires foresight, architecture standards, and rigorous security. By planning for scalability today, you build a resilient platform capable of supporting the business workloads of tomorrow."
  },
  "future-cloud-computing": {
    title: "The future of Cloud Computing in modern business",
    category: "Cloud Computing",
    date: "June 28, 2026",
    readTime: "5 min read",
    author: "Anshiya Cloud Operations",
    image: blog2,
    intro: "Cloud computing has evolved from a simple storage and hosting alternative to the primary engine of corporate innovation. Exploring hybrid cloud strategies, serverless container architectures, and tools designed for high accessibility workloads is now essential for modern enterprise operations.",
    sections: [
      {
        heading: "1. Hybrid and Multi-Cloud Environments",
        content: "Organizations are moving away from single-cloud dependency to minimize vendor lock-in and enhance disaster recovery capabilities. A hybrid or multi-cloud approach allows businesses to keep sensitive core workloads in secure private systems while leveraging the massive scalability and advanced AI services of public cloud hyperscalers."
      },
      {
        heading: "2. Rise of Serverless Computing",
        content: "Serverless architectures (like AWS Lambda, Google Cloud Functions, or Azure Functions) enable developers to focus solely on writing code without managing the underlying servers. This model shifts operations from provisioning server capacity to executing micro-services dynamically, resulting in substantial cost savings and instant auto-scaling."
      },
      {
        heading: "3. Cloud Compliance and Security Posture",
        content: "With the multi-cloud expansion comes the complexity of governance and audit compliance. Modern businesses adopt Cloud Security Posture Management (CSPM) to continuously scan configurations, manage IAM entitlements, and monitor compliance benchmarks (like SOC 2, HIPAA, and GDPR) in real time."
      },
      {
        heading: "4. FinOps: Cloud Cost Optimization",
        content: "Uncontrolled cloud spending is one of the biggest challenges for enterprises today. Implementing a robust FinOps framework helps track cloud resource usage, identify idle resources, right-size instances, and implement automated budget alerts to maximize the return on cloud investments."
      }
    ],
    conclusion: "The cloud is no longer just a technology destination; it is an operating model. Businesses that leverage advanced cloud architectures, automated optimization, and strong security governance will lead their industries in agility and innovation."
  },
  "cybersecurity-digital-trust": {
    title: "Why cyber security is the foundation of digital trust",
    category: "Cybersecurity",
    date: "June 15, 2026",
    readTime: "7 min read",
    author: "Anshiya SecOps Group",
    image: blog3,
    intro: "In a digital-first economy, security is not just an IT metric; it is the cornerstone of brand reputation and digital trust. Guarding enterprise assets requires continuous network audits, automated threat detection APIs, and best practices for securing database integrity.",
    sections: [
      {
        heading: "1. The Zero-Trust Security Framework",
        content: "The traditional network perimeter model is dead. Zero-Trust operates on the principle of 'never trust, always verify'. Every access request, regardless of its origin (internal or external), must be fully authenticated, authorized, and encrypted before access is granted to critical applications and databases."
      },
      {
        heading: "2. Proactive Exposure and Vulnerability Management",
        content: "Reactive scanning is no longer sufficient to stop modern threat actors. Organizations need automated, continuous threat modeling and exposure management. Regularly auditing your cloud attack surface, container registries, and application code dependencies helps find and remediate vulnerabilities before they can be exploited."
      },
      {
        heading: "3. Protecting Data Integrity and Privacy",
        content: "Customer data protection is a primary regulatory mandate. Restricting unauthorized data flows, implementing end-to-end data encryption (both in transit and at rest), and setting up robust Data Security Posture Management (DSPM) ensure sensitive PII remains confidential and tamper-proof."
      },
      {
        heading: "4. Integrating AI in Threat Detection",
        content: "Cyberattacks are moving at machine speed, requiring defense systems to be equally fast. Leveraging AI-driven security operations enables automated threat hunting, near-instant incident triage, and intelligent log analysis to detect anomalies and secure databases before a breach occurs."
      }
    ],
    conclusion: "Digital trust takes years to build but seconds to lose in a security breach. Enforcing a zero-trust model, automating compliance audits, and maintaining a proactive defense architecture are critical for securing the future of your enterprise."
  }
};

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPostsData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="blog-details-not-found container">
        <h2>Blog Post Not Found</h2>
        <p>The article you are looking for does not exist or has been moved.</p>
        <Link to="/" className="btn-primary">Back to Homepage</Link>
      </div>
    );
  }

  // Define sidebar posts (excluding current post)
  const recentPosts = Object.keys(blogPostsData)
    .filter(key => key !== id)
    .map(key => ({
      slug: key,
      ...blogPostsData[key]
    }));

  return (
    <div className="blog-details-page">
      {/* Blog Hero Section */}
      <section className="blog-details-hero">
        <div className="container blog-hero-container">
          <span className="blog-details-badge">{post.category}</span>
          <h1 className="blog-details-title">{post.title}</h1>
          <div className="blog-details-meta">
            <span className="meta-item">By {post.author}</span>
            <span className="meta-divider">|</span>
            <span className="meta-item">{post.date}</span>
            <span className="meta-divider">|</span>
            <span className="meta-item">{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="blog-details-content-section">
        <div className="container grid-sidebar blog-content-grid">
          {/* Left Column: Post Content */}
          <article className="blog-main-content">
            <div className="blog-main-image-wrapper">
              <img src={post.image} alt={post.title} className="blog-main-image" />
            </div>
            
            <p className="blog-lead-paragraph">
              {post.intro}
            </p>

            <div className="blog-body-text">
              {post.sections.map((section, idx) => (
                <div key={idx} className="blog-body-section">
                  <h2 className="blog-section-heading">{section.heading}</h2>
                  <p className="blog-section-paragraph">{section.content}</p>
                </div>
              ))}
            </div>

            <div className="blog-conclusion-box">
              <h3 className="conclusion-title">Key Takeaway</h3>
              <p className="conclusion-text">{post.conclusion}</p>
            </div>
          </article>

          {/* Right Column: Sidebar */}
          <aside className="blog-sidebar">
            {/* Sidebar CTA Box */}
            <div className="sidebar-cta-card">
              <h3>Need Expert IT Assistance?</h3>
              <p>Schedule a 30-minute deep-dive consultation with our principal technology consultants to map your modernization roadmap.</p>
              <a 
                href="https://calendly.com/anshiyainnovations/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sidebar-cta-btn"
              >
                Get Free Consultation
              </a>
            </div>

            {/* Recent Posts Section */}
            <div className="sidebar-recent-posts">
              <h4 className="sidebar-title">Recent Articles</h4>
              <div className="recent-posts-list">
                {recentPosts.map((rPost, idx) => (
                  <Link key={idx} to={`/blog/${rPost.slug}`} className="recent-post-item">
                    <span className="recent-post-category">{rPost.category}</span>
                    <h5 className="recent-post-title">{rPost.title}</h5>
                    <span className="recent-post-date">{rPost.date}</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
