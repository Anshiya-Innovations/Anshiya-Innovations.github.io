import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

// Import blog images
import blog1 from '../../assets/blog-1.png';
import blog2 from '../../assets/blog-2.png';
import blog3 from '../../assets/blog-3.png';

const Blog = () => {
  const posts = [
    {
      slug: "scale-it-infrastructure",
      image: blog1,
      date: "July 2, 2026",
      category: "IT Infrastructure",
      title: "How to scale your IT infrastructure for rapid growth",
      description: "A comprehensive roadmap for expanding databases, managing cloud instances, and ensuring zero downtime during scaling phases."
    },
    {
      slug: "future-cloud-computing",
      image: blog2,
      date: "June 28, 2026",
      category: "Cloud Computing",
      title: "The future of Cloud Computing in modern business",
      description: "Exploring hybrid cloud strategies, serverless container architectures, and tools designed for high accessibility workloads."
    },
    {
      slug: "cybersecurity-digital-trust",
      image: blog3,
      date: "June 15, 2026",
      category: "Cybersecurity",
      title: "Why cyber security is the foundation of digital trust",
      description: "Deep dive into network audits, automated threat detection APIs, and best practices for securing enterprise database integrity."
    }
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Latest Blogs</span>
          <h2 className="section-title">Latest News Post and Articles</h2>
        </div>

        <div className="grid-3 blog-grid">
          {posts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-image-container">
                <img src={post.image} alt={post.title} className="blog-post-img" />
              </div>
              
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-meta-dot">|</span>
                  <span className="blog-category">{post.category}</span>
                </div>
                
                <h3 className="blog-card-title">{post.title}</h3>
                
                <Link to={`/blog/${post.slug}`} className="blog-card-link">
                  Read More <span className="arrow-icon">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
