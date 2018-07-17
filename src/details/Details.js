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
        if (this.state.drawing) {
            return (
                <div className='details' >
                    <div class='details_left'>
                        <h1 class='details_message'>
                            {this.state.message}
                        </h1>
                        <h1 class='details_title'>
                            {this.state.drawing.title}
                        </h1>
                        <h1 class='details_synopsis'>
                            {this.state.drawing.synopsis}
                        </h1>
                        <Link to={'/'}>
                            <h1 className='home_button'>
                                back
                            </h1>
                        </Link>
                    </div>
                    <div class='details_right'>
                        <div class='details_image'>
                            <img src={this.state.drawing.image} />
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
