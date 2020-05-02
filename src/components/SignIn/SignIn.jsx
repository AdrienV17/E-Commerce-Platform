import React, { Component } from 'react';
import './SignIn.scss';

import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import { signInWithGoogle } from '../../firebase/firebase.utils'; 

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({ email:'', password:'' })
    }

    handleChange = event =>{
        const {value,name} = event

        this.setState({ [name]: value })
    }
    render(){
        return(
            <div className="signin">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} action="">
                    <FormInput 
                        type="email" 
                        name='Email' 
                        value={this.state.email} 
                        handleChange = {this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput 
                        type="password"
                        name='password' 
                        value={this.state.email} 
                        handleChange = {this.handleChange}
                        label='password'
                        required
                    />
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignIn;