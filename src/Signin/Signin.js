import React, { Component } from 'react';


class Signin extends Component{

	constructor(props){
		super(props);
		this.state = {
			signinName: '',
			signinPassword: ''
		}
	}

	onSubmitSignIn = () => {
		console.log(this.state.signInPassword);
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.signinName,
				password: this.state.signinPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user.id){
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
	}

	onNameChange = (event) => {
		this.setState({signinName: event.target.value});
	}
	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}

	render(){
		return(
			<span className="sign-in">
				<div className="sign-in">
				      <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
				      <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
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
			</span>
		);
	}
}

export default Signin;