import React from 'react';
import './Cover.less';
import { Link } from 'react-router-dom';

export default class Cover extends React.Component {

    render() {
        let {id, title} = this.props;
        return (
            <Link to={`/${id}`} className='cover'>
                <img
                    src={require(`../common/images/${id}.png`)}
                    alt={title}
                />
                <div className='cover-overlay'><h1>{title}</h1></div>
            </Link>
        )
    }
}
