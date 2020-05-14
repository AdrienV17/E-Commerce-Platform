import React from 'react';
import './SignInAndSignUpPage.scss'
import SignIn from '../../SignIn/SignIn';
import SignUp from '../../SignUp/SignUp';

const SignInAndSignUpPage = () =>(
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignUpPage;
