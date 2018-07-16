import React from 'react';
import { Link } from 'react-router-dom';


export default function NotFound() {
    return (
        <div>
            <h1>"Ooops, it looks like this page doesn't exist :("</h1>
            <Link to={'/'}>
                <h1 className='home_button'>
                    back
                </h1>
            </Link>
        </div>
    )
}




