import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';

// Detect mobile device
const isMobile = window.matchMedia('(max-width: 768px)').matches || /Mobi|Android|iP(hone|od|ad)/i.test(navigator.userAgent);

let Clients, Services2, Commitment, About, Appointment, Projects, ClientReviews, Technologies, Blog, CTA;

if (isMobile) {
  // Trigger dynamic imports in parallel on mobile to bypass the Suspense rendering waterfall
  const ClientsPromise = import('../../components/Clients/Clients');
  const Services2Promise = import('../../components/Services2/Services2');
  const CommitmentPromise = import('../../components/Commitment/Commitment');
  const AboutPromise = import('../../components/About/About');
  const AppointmentPromise = import('../../components/Appointment/Appointment');
  const ProjectsPromise = import('../../components/Projects/Projects');
  const ClientReviewsPromise = import('../../components/ClientReviews/ClientReviews');
  const TechnologiesPromise = import('../../components/Technologies/Technologies');
  const BlogPromise = import('../../components/Blog/Blog');
  const CTAPromise = import('../../components/CTA/CTA');

  Clients = React.lazy(() => ClientsPromise);
  Services2 = React.lazy(() => Services2Promise);
  Commitment = React.lazy(() => CommitmentPromise);
  About = React.lazy(() => AboutPromise);
  Appointment = React.lazy(() => AppointmentPromise);
  Projects = React.lazy(() => ProjectsPromise);
  ClientReviews = React.lazy(() => ClientReviewsPromise);
  Technologies = React.lazy(() => TechnologiesPromise);
  Blog = React.lazy(() => BlogPromise);
  CTA = React.lazy(() => CTAPromise);
} else {
  // Keep original lazy loading behavior on desktop
  Clients = React.lazy(() => import('../../components/Clients/Clients'));
  Services2 = React.lazy(() => import('../../components/Services2/Services2'));
  Commitment = React.lazy(() => import('../../components/Commitment/Commitment'));
  About = React.lazy(() => import('../../components/About/About'));
  Appointment = React.lazy(() => import('../../components/Appointment/Appointment'));
  Projects = React.lazy(() => import('../../components/Projects/Projects'));
  ClientReviews = React.lazy(() => import('../../components/ClientReviews/ClientReviews'));
  Technologies = React.lazy(() => import('../../components/Technologies/Technologies'));
  Blog = React.lazy(() => import('../../components/Blog/Blog'));
  CTA = React.lazy(() => import('../../components/CTA/CTA'));
}

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
