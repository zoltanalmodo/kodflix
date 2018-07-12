import React from 'react';
import './App.css';

import Gallery from './gallery/Gallery';
import './gallery/Gallery.css';
import Details from './details/Details';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Test from './gallery/Test';
// hello norbi
export default class App extends React.Component {

  render () {
    return (
    <Test />
    )
  }

  
  xrender() {
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
// test !!!