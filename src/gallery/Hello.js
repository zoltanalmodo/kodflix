import React from 'react';

export default class Hello extends React.Component {

    constructor() {
        super();
        this.state = {
            message: '(Hello, this will be the details page for each Movie & TV show :)',
        }
    }

    componentDidMount() {
        setTimeout(() => {this.changeUserName()}, 3000);
    }

    

        
    

    changeUserName() {
        this.setState({
            message: 'Coming soon! :)',
        });
    }

    render() {
        return (
            <h1>
                
                {this.state.message}
                
            </h1>
        )
    }
}
