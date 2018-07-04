import React, { Component } from 'react';
import './App.css';
import Cover from './cover/Cover.js';

import black_mirror from './cover/images/black_mirror.jpg';
import breaking_bad from './cover/images/breaking_bad.jpg';
import death_note from './cover/images/death_note.jpg';
import game_of_thrones from './cover/images/game_of_thrones.jpg';
import the_walking_dead from './cover/images/the_walking_dead.jpg'
import the_wire from './cover/images/the_wire.jpg';




class App extends Component {
  render() {
    return (

      <div className='App'>
        <div className='image_cover_row'>
          <Cover image={black_mirror} title='Black Mirror' alt='black mirror'/>
          <Cover image={breaking_bad} title='Breaking Bad' alt='breaking bad'/>
          <Cover image={death_note} title='Death Note' alt='death note'/>
        </div>

        {/* THIS IS A COMMENT */}
        
        <div className='image_cover_row'>
          <Cover image={game_of_thrones} title='Game of Thrones' alt='game of thrones'/>
          <Cover image={the_walking_dead} title='The Walking Dead' alt='the walking dead'/>
          <Cover image={the_wire} title='The Wire' alt='the wire'/>
        </div>
      </div>

    );
  }
}

export default App;
