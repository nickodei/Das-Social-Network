import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Overview from './overviewSite/Overview';
import reportWebVitals from './reportWebVitals';
import NavbarComp from './overviewSite/components/NavbarComp';
import Impressum from './overviewSite/Impressum';
import About from './overviewSite/About';
import Restaurants from './overviewSite/Restaurants';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComp />
    <Overview />
    <Restaurants />
    <About />
    <Impressum />
  </React.StrictMode>
);

reportWebVitals();
