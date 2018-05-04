import React, { Component } from 'react';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            firstNumber: '',
            operator: '',
            secondNumber: ''
        }
    }
    render() {
        return (
            <h1 className="text-center">Home</h1>
        )
    }
}

export default Home;