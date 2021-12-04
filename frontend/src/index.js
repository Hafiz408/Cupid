import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './index.css';

import Start from "./Start";
import Cupid from "./Cupid";

function App() {
  return (
    <div>
      <Router>
        <div> 
          <Routes>
            <Route exact path="/" element={ <Start /> } />
            <Route path="/cupid" element={ <Cupid /> } />
          </Routes>
        </div>
      </Router>  
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

