import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="layout-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
