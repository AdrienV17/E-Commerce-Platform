import React, { Component } from 'react';
import './SignIn.scss';

import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'; 

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit =async event =>{
        event.preventDefault();

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);

            this.setState({ email:'', password:'' })
        }catch(error){
            console.log(error);
        }
    }

    handleChange = event =>{
        const {value,name} = event.target;

        this.setState({ [name]: value })
    }
    render(){

        const { email, password } = this.state
        return(
            <div className="signin">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} action="">
                    <FormInput 
                        type="email" 
                        name='email' 
                        value={email} 
                        handleChange = {this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        type="password"
                        name='password' 
                        value={password} 
                        handleChange = {this.handleChange}
                        label='Password'
                        required
                    />
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>

                </form>
            </div>
        )
    }
}

export default SignIn;