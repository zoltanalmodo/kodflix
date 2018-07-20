import React from 'react';
import './Details.css';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../gallery/getGallery';

export default class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            message: 'Hi, more details...',
            drawing: {}
        }
    }

    componentDidMount() {
        setTimeout(() => { this.changeMessage() }, 3000);
        this.setState({
            drawing: getGallery()
                .find(item => this.props.match.params.handle === item.id)
        });
    };

    changeMessage() {
        this.setState({
            message: 'coming soon! :)',
        });
    }

    render() {
        let drawing = this.state.drawing;
        if (this.state.drawing) {
            return (
                <div className='details' >
                    <div className='details_left'>
                        <h1 className='details_message'>
                            {this.state.message}
                        </h1>
                        <h1 className='details_title'>
                            {drawing.title}
                        </h1>
                        <h1 className='details_synopsis'>
                            {drawing.synopsis}
                        </h1>
                        <Link to={'/'}>
                            <h1 className='home_button'>
                                back
                            </h1>
                        </Link>
                    </div>
                    <div className='details_right'>
                        <div className='details_image'>
                            <img
                                src={drawing.image}
                                alt={drawing.title}
                            />
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return <Redirect to='/NotFound' />
        }
    }
}
