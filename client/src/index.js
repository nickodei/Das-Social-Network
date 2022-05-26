import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Overview from './Overview';
import reportWebVitals from './reportWebVitals';
import NavbarComp from './components/NavbarComp';
import Impressum from './Impressum';
import About from './About';
import Restaurants from './Restaurants';

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
