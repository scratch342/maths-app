import React, { Component } from 'react';
import Signin from './Signin/Signin.js';
import Register from './Register/Register';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        questionsAnswered: ''
      }
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState({isSignedIn : false});
    } else if(route === 'home'){
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      questionsAnswered: data.questionsAnswered
    }})
    console.log(this.state.user);
  }

  render() {
    const { route, isSignedIn } = this.state; //Remember this.state not this.props in this case!
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {console.log(route)}
        {
          route === 'home' ? 
          <Home />
          : (
            route === 'signin' ?
            <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            :
            <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;
