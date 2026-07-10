import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import Solutions from '../pages/Solutions/Solutions';
import SapService from '../pages/SapService/SapService';
import Industries from '../pages/Industries/Industries';
import AboutUs from '../pages/AboutUs/AboutUs';
import Career from '../pages/Career/Career';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import BlogDetails from '../pages/BlogDetails/BlogDetails';
import NotFound from '../pages/NotFound/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="solutions/:type" element={<Solutions />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="sap-service" element={<SapService />} />
          <Route path="industries" element={<Industries />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="career" element={<Career />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="service-details/:type" element={<ServiceDetails />} />
          <Route path="service-details" element={<ServiceDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
