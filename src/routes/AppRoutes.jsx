import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx/index';
import Profile from '../pages/Profile';
import Qrpage from '../pages/QR/index';
import History from '../pages/History.jsx/historyTable';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/qr" element={<Qrpage />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default AppRoutes;
