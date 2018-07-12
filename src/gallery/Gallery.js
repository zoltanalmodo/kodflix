import React from 'react';
import './Gallery.css';

import Cover from '../cover/Cover.js';

import getGallery from './getGallery.js';

export default class Gallery extends React.Component {

    render() {
        return (
            <div className='gallery'>
                {
                    getGallery().map(cover => {
                        return (
                            <Cover
                                image={cover.image}
                                key={cover.id}
                                id={cover.id}
                                title={cover.title}
                                alt={cover.alt}
                                movie_url_db={cover.movie_url_db}
                            />
                        )
                    })



                }
            </div>
        )        
    }   
}
            
            
