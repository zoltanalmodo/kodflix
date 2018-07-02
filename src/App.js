import React, { Component } from 'react';
import './App.css';
import cover_001 from './cover_001.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">

          <img src={cover_001} className="image-cover" alt="cover_001"/>

      </div>
    );
  }
}

export default App;
