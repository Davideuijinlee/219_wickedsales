import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from '../../general/input';

const SignInForm = props => {
    console.log('Sign in Form Props', props);
    const{handleSubmit, signIn} = props;
    return(
        <form onSubmit={handleSubmit(signIn)}>
        <div className="row">
            <Field col="s12" id="email" name="email" component={Input} label="Email"/>
        </div>
        <div className="row">
            <Field col="s12" id="password" name="password" component={Input} type="password" label="password"/>
        </div>
            <div className="row">
                <div className="col s12 right-align">
                    <button className="btn blue lighten-1">Sign In</button>
                </div>
            </div>
            
        </form>
    )
}

function validate({email, password}){

    const errors = {};

    if(!email){
        errors.email = 'Please enter your email';
    }

    if(!password){
        errors.password = 'Please enter your password';
    }

    return errors;
}

export default reduxForm({
    form: 'sign-in-form', //setting the name of the form. name just made up
    validate: validate
})(SignInForm); //essentially returns a new and improved component