import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';


export default class Details extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className='details'>
                <h1>details about this content</h1>
                
                <h1>{this.props.match.params.zoltan}</h1>
                
                <Link to='/'>
                    <h1>Home</h1>
                </Link>
            </div>
            
        )
    }
}