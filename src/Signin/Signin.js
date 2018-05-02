import React, { Component } from 'react';
import './Signin.css';

class Signin extends Component{

	constructor(){
		super();
		this.state = {
			signinName: '',
			signinPassword: ''
		}
	}

	onSubmitSignIn = () => { //For submitting sign in credentials
		console.log(this.state.signinName);
	}

	onNameChange = (event) => {
		this.setState({signinName: event.target.value});
	}
	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}

	render(){
		return(
			<div className="sign-in">
			      <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
			      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
			      <label htmlFor="inputName" className="sr-only">Name</label>
			      
			      <input
			       type="text"
			       id="inputName" 
			       className="form-control" 
			       placeholder="Name" 
			       autoFocus 
			       onChange={this.onNameChange}/>

			      <label htmlFor="inputPassword" className="sr-only">Password</label>

			      <input 
			      type="password" 
			      id="inputPassword" 
			      className="form-control" 
			      placeholder="Password" 
			      onChange={this.onPasswordChange}/>

			      <button className="btn btn-lg btn-primary btn-block"
			       type="submit"
			       onClick={this.onSubmitSignIn}>Sign in</button>
			</div>
		);
	}
}

export default Signin;