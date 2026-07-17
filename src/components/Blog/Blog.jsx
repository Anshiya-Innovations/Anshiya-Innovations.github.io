import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

// Import blog images
import blog1 from '../../assets/blog-1.jpg';
import blog1Mobile from '../../assets/blog-1-mobile.webp';
import blog2 from '../../assets/blog-2.jpg';
import blog2Mobile from '../../assets/blog-2-mobile.webp';
import blog3 from '../../assets/blog-3.png';
import blog3Mobile from '../../assets/blog-3-mobile.webp';

const Blog = () => {
  const posts = [
    {
      slug: "scale-it-infrastructure",
      image: blog1,
      imageMobile: blog1Mobile,
      date: "July 2, 2026",
      category: "IT Infrastructure",
      title: "How to scale your IT infrastructure for rapid growth",
      description: "A comprehensive roadmap for expanding databases, managing cloud instances, and ensuring zero downtime during scaling phases."
    },
    {
      slug: "future-cloud-computing",
      image: blog2,
      imageMobile: blog2Mobile,
      date: "June 28, 2026",
      category: "Cloud Computing",
      title: "The future of Cloud Computing in modern business",
      description: "Exploring hybrid cloud strategies, serverless container architectures, and tools designed for high accessibility workloads."
    },
    {
      slug: "cybersecurity-digital-trust",
      image: blog3,
      imageMobile: blog3Mobile,
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
                <picture>
                  <source media="(max-width: 768px)" srcSet={post.imageMobile} type="image/webp" />
                  <img src={post.image} alt={post.title} width="640" height="427" className="blog-post-img" />
                </picture>
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
