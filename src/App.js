import React from 'react';
import './App.css';

import Gallery from './gallery/Gallery.js';
import './gallery/Gallery.css';
import Details from './details/Details.js';

import { BrowserRouter as Router, Route } from "react-router-dom";



export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        
        <Router>
          <div>
            <Route exact path="/" component={Gallery} />
            <Route path="/:zoltan" component={Details} />
          </div>
        </Router>

      </div>
    );
  }
}
