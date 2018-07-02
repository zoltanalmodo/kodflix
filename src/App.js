import React, { Component } from 'react';
import './App.css';
import cover_001 from './cover_001.jpg';
import cover_002 from './cover_002.jpg';
import cover_003 from './cover_003.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">

          <img src={cover_001} className="image-cover" alt="cover_001"/>
          <img src={cover_002} className="image-cover" alt="cover_002"/>
          <img src={cover_003} className="image-cover" alt="cover_003"/>

      </div>
    );
  }
}

export default App;
