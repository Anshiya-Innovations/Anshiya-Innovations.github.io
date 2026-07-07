import React, { useState, useEffect, useRef } from 'react';
import reviewsMain from '../../assets/reviews-main.png';
import reviewsBadgeThumbs from '../../assets/reviews-badge-thumbs.png';
import emilyWatsonAvatar from '../../assets/emily-watson.png';
import './ClientReviews.css';

const ClientReviews = () => {
  const reviews = [
    {
      stars: 5,
      text: "Anshiya Innovations delivered our project with exceptional quality and professionalism. Their technical expertise and communication made our digital transformation seamless. Highly recommended for any complex enterprise project.",
      name: "Emily Watson",
      role: "Product Manager, TechFlow",
      avatar: emilyWatsonAvatar
    },
    {
      stars: 5,
      text: "The automation systems built by Anshiya Innovations reduced our processing times by 40%. Their team was responsive, proactive, and completed the integration ahead of schedule. Truly a premium consulting partner!",
      name: "Sarah Jenkins",
      role: "Operations Director, InnovateTech",
      avatar: null
    },
    {
      stars: 5,
      text: "Anshiya Innovations team proved to be exceptional SAP BTP experts. They helped us migrate our legacy modules to the cloud flawlessly, ensuring zero downtime. Their attention to security compliance is top-tier.",
      name: "Michael Chen",
      role: "CTO, CloudScale Solutions",
      avatar: null
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Setup automatic sliding loop (3 seconds)
  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        handleNext();
      }
    }, 3000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, idx) => (
      <span key={idx} className="star-symbol">
        {idx < count ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="container grid-2 reviews-container">
        {/* Left Column: Office Team Image and Satisfied Badge overlay */}
        <div className="reviews-image-wrapper">
          <img 
            src={reviewsMain} 
            alt="Client Success Team" 
            className="reviews-main-img"
          />
          <div className="reviews-satisfied-badge">
            <img 
              src={reviewsBadgeThumbs} 
              alt="Satisfied user group" 
              className="reviews-badge-thumbs-img"
            />
            <span className="reviews-badge-text">5k+ Satisfied</span>
          </div>
        </div>

        {/* Right Column: Review Details & Auto-slider Controls */}
        <div className="reviews-content-wrapper">
          <span className="section-subtitle-left">CLIENT REVIEW</span>
          <h2 className="reviews-title">What our clients say about our services</h2>

          {/* Interactive Slide Viewport */}
          <div 
            className="reviews-viewport"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="reviews-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="reviews-slide-card">
                  <div className="reviews-card-header">
                    <div className="reviews-stars">
                      {renderStars(review.stars)}
                    </div>
                    <span className="quote-mark-icon">”</span>
                  </div>
                  
                  <p className="reviews-card-text">
                    "{review.text}"
                  </p>

                  <div className="reviews-card-author">
                    <div className="author-avatar-box">
                      {review.avatar ? (
                        <img src={review.avatar} alt={review.name} className="author-avatar-img" />
                      ) : (
                        <div className="author-avatar-initials">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{review.name}</h4>
                      <p className="author-role">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Arrow Navigation Buttons */}
          <div className="reviews-slider-nav">
            <button 
              className="reviews-nav-btn reviews-btn-prev" 
              onClick={handlePrev}
              aria-label="Previous Review"
            >
              &lsaquo;
            </button>
            <button 
              className="reviews-nav-btn reviews-btn-next" 
              onClick={handleNext}
              aria-label="Next Review"
            >
              &rsaquo;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
