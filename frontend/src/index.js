import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './index.css';

import App from './App';
import Footer from './Footer';
import Header from './Header';

ReactDOM.render(
  <div>
    <Router basename={'/cupid'}>
        <Header />
        <App />
        <Footer />
    </Router>  
  </div>, 
  document.getElementById('root')
  );

