import React, { Component } from 'react';
import './App.css';
import cover_001 from './cover_001.jpg';
import black_mirror from './black_mirror.jpg';
import breaking_bad from './breaking_bad.jpg';
import death_note from './death_note.jpg';
import game_of_thrones from './game_of_thrones.jpg';
import the_walking_dead from './the_walking_dead.jpg'
import the_wire from './the_wire.jpg';


class App extends Component {
  render() {
    return (

      <div className="App">

        <div className="container_image_cover_row">
          <div className="container_image_cover_row_item">
            <img src={black_mirror} alt="black_mirror"/>
            <div className='container_image_cover_row_item_overlay'>
              <h1>Black Mirror</h1>
            </div>
          </div>
          <div className="container_image_cover_row_item">
            <img src={breaking_bad} alt="breaking_bad"/>
            <div className='container_image_cover_row_item_overlay'>
              <h1>Breaking Bad</h1>
            </div>
          </div>
          <div className="container_image_cover_row_item">
            <img src={death_note} alt="death_note"/>
            <div className='container_image_cover_row_item_overlay'>
              <h1>Death Note</h1>
            </div>
          </div>
        </div>
        
{/* THIS IS A COMMENT */}

        <div className="container_image_cover_row">
          <div className="container_image_cover_row_item">
            <img src={game_of_thrones} alt="game_of_thrones"/>
            <div className='container_image_cover_row_item_overlay'>
              <h1>Game of Thrones</h1>
            </div>
          </div>
          <div className="container_image_cover_row_item">
          <img src={the_walking_dead} alt="the_walking_dead"/>
          <div className='container_image_cover_row_item_overlay'>
            <h1>The Walking Dead</h1>
          </div>
          </div>
          <div className="container_image_cover_row_item">
          <img src={the_wire} alt="the_wire"/>
          <div className='container_image_cover_row_item_overlay'>
            <h1>The Wire</h1>
          </div>
          </div>
        </div>

        <img src={cover_001} className="image-cover" alt="cover_001"/>

      </div>

    );
  }
}

export default App;
