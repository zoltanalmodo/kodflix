import React, { Component } from 'react';
import './App.css';

import Gallery from './gallery/Gallery.js'
import './gallery/Gallery.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Gallery />
      </div>
    );
  }
}
