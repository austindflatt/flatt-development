import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactGA from 'react-ga';
AOS.init()

const TRACKING_ID = "UA-260531539-1";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);