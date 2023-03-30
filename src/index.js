import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from "./Appprovider";









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>


);


reportWebVitals();
