import React, { Component } from 'react';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            firstNumber: '',
            operator: '',
            secondNumber: '',
            answer: ''
        }
    }

    onAnswerChange = (event) => {
        this.setState({ answer : event.target.value });
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Hello John</h1>
                <div className="qa">
                    <h1 className="text-center maths-question">2 + 2</h1>
                    <input
                    type="text"
                    id="maths-answer"
                    className="form-control"
                    autoFocus
                    onChange={this.onAnswerChange}
                    /> 
                </div>
                <h3 className="text-center score">Questions answered: 21</h3>
            </div>
        )
    }
}

export default Home;