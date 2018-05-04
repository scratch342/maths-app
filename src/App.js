import React, { Component } from 'react';
import Signin from './Signin/Signin.js';
import Register from './Register/Register';
import Home from './Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
