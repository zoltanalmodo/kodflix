import React from 'react';
import './App.css';
import Gallery from './gallery/Gallery';
import './gallery/Gallery.css';
import Details from './details/Details';
import NotFound from './not_found/NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path="/" componenet={Gallery} />
            <Route path="/NotFound" componenet={NotFound} />
            <Route path="/:showId" componenet={Details} />
          </Switch>
        </Router>
      </div>
    );
  }
}