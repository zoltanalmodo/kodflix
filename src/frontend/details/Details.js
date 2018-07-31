import React from 'react';
import './Details.css';
import { Link, Redirect } from 'react-router-dom';

export default class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            message: 'More details...',
            show: {}
        }
    }

    componentDidMount() {
        setTimeout(() => { this.changeMessage() }, 3000);
        fetch('/rest/shows')
            .then(response => response.json())
            .then(shows => {
                let showId = this.props.match.params.showId;
                let show = shows.find(show => show.id === showId);
                this.setState({ show });
            });
    }

    changeMessage() {
        this.setState({
            message: 'coming soon! :)',
        });
    }

    render() {
        let show = this.state.show;
        let message = this.state.message;
        if (show) {
            return show.id
                ?
                <DetailsContent message={message} show={show} />
                :
                <div />;
        }
        else {
            return <Redirect to='/NotFound' />;
        }
    }
}

function DetailsContent({ message, show }) {
    
    return (
        <div className='details'>
            <div className='details-left'>
                <h1 className='details-left details-message'>
                   {message}
                </h1>
                <h1 className='details-title'>
                    {show.title}
                </h1>
                <h3 className='details-content-synopsis'>
                    {show.synopsis}
                </h3>
                <Link to={'/'}>
                    <h1 className='home-button'>
                        back
                    </h1>
                </Link>
            </div>
            <div className='details-content-cover'>
                <div className='details-image'>
                    <img
                        src={require(`../common/images/${show.id}.png`)}
                        alt={show.title}
                    />
                </div>
            </div>
        </div>
    )
}
