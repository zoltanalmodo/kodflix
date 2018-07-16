import React from 'react';
import './Details.css';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../gallery/getGallery';

export default class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            message: 'Hello, more details...',
            drawing: {}

        }
    }

    componentDidMount() {
        setTimeout(() => { this.changeMessage() }, 3000);
        this.setState({
            drawing: getGallery().find(item => this.props.match.params.handle === item.id)
        });
    };




    changeMessage() {
        this.setState({
            message: 'coming soon! :)',
        });
    }

    render() {




        if (this.state.drawing === undefined) {
            return <Redirect to='/NotFound' />
        }
        else {

            return (
                <div className='Details' >
                    <h1>
                        {this.state.message}
                    </h1>
                    <h1>
                        {this.state.drawing.title}
                    </h1>
                    <Link to={'/'}>
                        <h1 className='home_button'>
                            back
                        </h1>
                    </Link>
                </div>
            )
        }
    }
}
