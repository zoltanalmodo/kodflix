import React from 'react';
import './Gallery.css';
import Cover from '../cover/Cover';
import getGallery from './getGallery';

export default class Gallery extends React.Component {

    componentDidMount() {
        fetch('/rest/shows')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
            });
    }

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
                            />
                        )
                    })
                }
            </div>
        )
    }
}


