import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Details.css';

export default class Details extends React.Component {

    render() {
        return (
            <div className='details'>
                <h1>some details about some content</h1>
                <Link to='/'>
                    <h1>Home</h1>
                </Link>
            </div>
            
        )
    }
}