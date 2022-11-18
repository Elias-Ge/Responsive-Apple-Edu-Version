import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';


import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CommonResource/css/bootstrap.css';
import './CommonResource/css/styles.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Router>
        <App />
    </Router>
    // </React.StrictMode>
);


