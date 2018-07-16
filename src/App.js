import React from 'react';
import './App.css';
import Gallery from './gallery/Gallery';
import './gallery/Gallery.css';
import Details from './details/Details';
import NotFound from './not_found/NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
            <Switch>
              <Route exact path="/" component={Gallery} />
              <Route path="/NotFound" component={NotFound} />
              <Route path="/:handle" component={Details} />
            </Switch>
        </Router>

      </div>
    );
  }
}