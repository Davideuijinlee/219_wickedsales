import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from '../../general/input';

const SignInForm = props => {
    console.log('Sign in Form Props', props);
    const{handleSubmit, signIn} = props;
    return(
        <form onSubmit={handleSubmit(signIn)}>
                <Field id="email" name="email" component={Input} label="Email"/>

                <Field id="password" name="password" component={Input} type="password" label="password"/>
            <div className="row">
                <div className="col s12 right-align">
                    <button className="btn blue lighten-1">Sign In</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'sign-in-form' //setting the name of the form. name just made up
})(SignInForm); //essentially returns a new and improved component