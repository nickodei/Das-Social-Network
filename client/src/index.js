import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import NavigationBar from './components/navbar/NavigationBar';
import NavigationBarDetailedPage from './components/navbar/NavigationBarDetailedPage';

import OverviewPage from './pages/overview/OverviewPage';
import RestaurantDetailedPage from './pages/restaurant-detailed/RestaurantDetailedPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='skip-navbar app-header'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><NavigationBar/><OverviewPage /></>}></Route>
          <Route path="/overview" element={<><NavigationBar/><OverviewPage /></>}></Route>
          <Route path="/restaurant/detail/:id" element={<><NavigationBarDetailedPage /><RestaurantDetailedPage /></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

reportWebVitals();
