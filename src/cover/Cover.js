import React from 'react';
import './Cover.css';
import { Link } from 'react-router-dom';

export default class Cover extends React.Component {

    render() {
        return (
            <Link to={this.props.movie_url_db}>
                <div className='cover'>

                    <img src={this.props.image} alt={this.props.alt} />
                    <div className='cover-overlay'>
                        <h1>{this.props.title}</h1>
                    </div>

                </div>
            </Link>
        )
    }
}