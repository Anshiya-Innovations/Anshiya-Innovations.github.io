import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Clients from '../../components/Clients/Clients';
import Services from '../../components/Services/Services';
import About from '../../components/About/About';
import Services2 from '../../components/Services2/Services2';
import Appointment from '../../components/Appointment/Appointment';
import Projects from '../../components/Projects/Projects';
import ClientReviews from '../../components/ClientReviews/ClientReviews';
import Technologies from '../../components/Technologies/Technologies';
import Blog from '../../components/Blog/Blog';
import CTA from '../../components/CTA/CTA';
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
      <Clients />
      <Services />
      <About />
      <Services2 />
      <Appointment />
      <Projects />
      <ClientReviews />
      <Technologies />
      <Blog />
      <CTA onCtaClick={handleScrollToSection} />
    </div>
  );
};

export default Home;
