import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Overview from './Overview';
import reportWebVitals from './reportWebVitals';
import NavbarComp from './components/NavbarComp';
import RestaurantListComp from './components/RestaurantListComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComp />
    <Overview />
    

    
    
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
