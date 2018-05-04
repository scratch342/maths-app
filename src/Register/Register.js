import React, { Component } from 'react';

class Register extends Component {
    
    constructor(){
        super();
        this.state = {
            name: '',
            password: ''
        }
    }
    
    onSubmitRegister = () => {
        
    }
    
    onNameChange = (event) => {
        this.state({ name: event.target.value });
    }
    
    onPasswordChange = (event) => {
        this.state({ password: event.target.value });
    }
    
    
    render() {
        return (
			<div className="sign-in">
			      <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
			      <h1 className="h3 mb-3 font-weight-normal text-center">Register</h1>
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
			       onClick={this.onSubmitRegister}>Register</button>
			</div>            
        )
    }
}

export default Register;