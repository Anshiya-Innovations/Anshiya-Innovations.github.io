import React, { useState, useEffect, useRef } from 'react';
import reviewsMain from '../../assets/reviews-main.jpg';
import reviewsMainMobile from '../../assets/reviews-main-mobile.webp';
import reviewsBadgeThumbs from '../../assets/reviews-badge-thumbs.png';
import reviewsBadgeThumbsMobile from '../../assets/reviews-badge-thumbs-mobile.webp';
import emilyWatsonAvatar from '../../assets/emily-watson.png';
import './ClientReviews.css';

const ClientReviews = () => {
  const reviews = [
    {
      stars: 5,
      text: "We came to Anshiya for a SAP integration and left with a partner. What used to take our old vendor months, their team delivered in weeks, without cutting corners on security. That's rare.",
      name: "Co-Founder",
      role: "Forte Innovations",
      avatar: null
    },
    {
      stars: 5,
      text: "Anshiya didn't just build our systems, they trained our entire team on the AI tools behind them. Our employees went from watching automation happen to actually running it themselves. That knowledge transfer is worth more than the software itself.",
      name: "CEO",
      role: "Novus IT Solutions",
      avatar: null
    },
    {
      stars: 5,
      text: "Cybersecurity was always the afterthought with our previous vendors. With Anshiya, it was built in from day one. Their team doesn't just build technology, they build it responsibly.",
      name: "Founder",
      role: "RVIT Solution",
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
          <picture>
            <source media="(max-width: 768px)" srcSet={reviewsMainMobile} type="image/webp" />
            <img 
              src={reviewsMain} 
              alt="Client Success Team" 
              width="1024"
              height="682"
              className="reviews-main-img"
            />
          </picture>
          <div className="reviews-satisfied-badge">
            <picture>
              <source media="(max-width: 768px)" srcSet={reviewsBadgeThumbsMobile} type="image/webp" />
              <img 
                src={reviewsBadgeThumbs} 
                alt="Satisfied user group" 
                width="60"
                height="60"
                className="reviews-badge-thumbs-img"
              />
            </picture>
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
                      <h3 className="author-name">{review.name}</h3>
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
