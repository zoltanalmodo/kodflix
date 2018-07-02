import React, { Component } from 'react';
import './App.css';
import cover_001 from './cover_001.jpg';


class App extends Component {
  render() {
    return (

      <div className="App">

        <div className="container_image_cover_row">
          <div className="container_image_cover_row_item">
            <h1>Black Mirror</h1>
          </div>
          <div className="container_image_cover_row_item">
            <h1>Breaking Bad</h1>
          </div>
          <div className="container_image_cover_row_item">
            <h1>Death Note</h1>
          </div>
        </div>

        <div className="container_image_cover_row">
          <div className="container_image_cover_row_item">
            <h1>Game of Thrones</h1>
          </div>
          <div className="container_image_cover_row_item">
          <h1>The Walking Dead</h1>
          </div>
          <div className="container_image_cover_row_item">
          <h1>The Wire</h1>
          </div>
        </div>
        
        <img src={cover_001} className="image-cover" alt="cover_001"/>

      </div>

    );
  }
}

export default App;
