import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';

// Lazy load below-the-fold components to reduce initial JS payload
const Clients = React.lazy(() => import('../../components/Clients/Clients'));
const Services2 = React.lazy(() => import('../../components/Services2/Services2'));
const Commitment = React.lazy(() => import('../../components/Commitment/Commitment'));
const About = React.lazy(() => import('../../components/About/About'));
const Appointment = React.lazy(() => import('../../components/Appointment/Appointment'));
const Projects = React.lazy(() => import('../../components/Projects/Projects'));
const ClientReviews = React.lazy(() => import('../../components/ClientReviews/ClientReviews'));
const Technologies = React.lazy(() => import('../../components/Technologies/Technologies'));
const Blog = React.lazy(() => import('../../components/Blog/Blog'));
const CTA = React.lazy(() => import('../../components/CTA/CTA'));

import './Home.css';

const Home = () => {
  const location = useLocation();

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Scroll to section if redirected with a scrollTo state
    if (location.state && location.state.scrollTo) {
      handleScrollToSection(location.state.scrollTo);
    }
  }, [location]);

  return (
    <div className="homepage">
      <Hero onCtaClick={handleScrollToSection} />
      <React.Suspense fallback={<div style={{ minHeight: '100px' }}></div>}>
        <Clients />
        <Services2 />
        <Commitment />
        <About />
        <Appointment />
        <Projects />
        <ClientReviews />
        <Technologies />
        <Blog />
        <CTA onCtaClick={handleScrollToSection} />
      </React.Suspense>
    </div>
  );
};

export default Home;
