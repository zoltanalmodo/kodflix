import React from 'react';
import './App.css';
import Gallery from './gallery/Gallery';
import './gallery/Gallery.css';
import Details from './details/Details';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Test from './gallery/Test';

export default class App extends React.Component {

  // xrender () {
  //   return (
  //   <Test />
  //   )
  // }
    
  render() {
    return (
      <div className='App'>

        <Router>
          <div>
            <Route exact path="/" component={Gallery} />
            <Route path="/:handle" component={Details} />
          </div>
        </Router>

      </div>
    );
  }
}