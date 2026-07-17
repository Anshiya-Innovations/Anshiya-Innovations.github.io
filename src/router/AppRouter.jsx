import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

// Lazy load route pages for chunk-splitting and CSS optimization
import Home from '../pages/Home/Home';
const Contact = React.lazy(() => import('../pages/Contact/Contact'));
const Solutions = React.lazy(() => import('../pages/Solutions/Solutions'));
const SapService = React.lazy(() => import('../pages/SapService/SapService'));
const Industries = React.lazy(() => import('../pages/Industries/Industries'));
const AboutUs = React.lazy(() => import('../pages/AboutUs/AboutUs'));
const Career = React.lazy(() => import('../pages/Career/Career'));
const ServiceDetails = React.lazy(() => import('../pages/ServiceDetails/ServiceDetails'));
const BlogDetails = React.lazy(() => import('../pages/BlogDetails/BlogDetails'));
const NotFound = React.lazy(() => import('../pages/NotFound/NotFound'));

const AppRouter = () => {
  return (
    <Router>
      <React.Suspense fallback={<div style={{ background: '#ffffff', minHeight: '100vh' }}></div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="solutions/:type" element={<Solutions />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="services/:category/:type" element={<Solutions />} />
            <Route path="services/:type" element={<Solutions />} />
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
      </React.Suspense>
    </Router>
  );
};

export default AppRouter;
