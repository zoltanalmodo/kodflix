import React from 'react';
import './Gallery.css';

import Cover from '../cover/Cover.js';

import black_mirror from '../cover/images/black_mirror.jpg';
import breaking_bad from '../cover/images/breaking_bad.jpg';
import death_note from '../cover/images/death_note.jpg';
import game_of_thrones from '../cover/images/game_of_thrones.jpg';
import the_walking_dead from '../cover/images/the_walking_dead.jpg'
import the_wire from '../cover/images/the_wire.jpg';


export default class Gallery extends React.Component {

    render() {
        return (
            <div className='gallery'>

                    <Cover image={black_mirror} title='Black Mirror' alt='black mirror' movie_url_db='black_mirror' />
                    <Cover image={breaking_bad} title='Breaking Bad' alt='breaking bad' movie_url_db='breaking_bad' />
                    <Cover image={death_note} title='Death Note' alt='death note' movie_url_db='death_note'/>
                    <Cover image={game_of_thrones} title='Game of Thrones' alt='game of thrones' movie_url_db='game_of_thrones' />
                    <Cover image={the_walking_dead} title='The Walking Dead' alt='the walking dead' movie_url_db='the_walking_dead' />
                    <Cover image={the_wire} title='The Wire' alt='the wire' movie_url_db='the_wire' />

            </div>  

        )        
    }
            
}
            
            
