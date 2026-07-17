import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import './MainLayout.css';

const Footer = React.lazy(() => import('./Footer/Footer'));

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="layout-content">
        <Outlet />
      </main>
      <Suspense fallback={<div style={{ minHeight: '300px' }}></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default MainLayout;
