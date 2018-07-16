import React from 'react';
import './Details.css';
import { Link } from 'react-router-dom';
import getGallery from '../gallery/getGallery';

export default class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            message: '(Hello, this will be the details page for each Movie & TV show :)',
            display: {}
        }
    }

    componentDidMount() {
        setTimeout(() => { this.changeUserName() }, 3000);
        this.setState({
            display: getGallery().find(item => this.props.match.params.handle === item.id)
        });
    };
        

    changeUserName() {
        this.setState({
            message: 'Coming soon! :)',
        });
    }

    render() {
        return(
            <div className = 'Details' >
                <h1>
                    {this.state.message}
                </h1>
                <h1>
                    title: {this.state.display.title}
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
