import React from 'react';
import {reduxForm} from 'redux-form';

const SignInForm = props => {
    return(
        <form>
            <h1>Form Goes Here</h1>
        </form>
    )
}

export default reduxForm({
    form: 'sign-in-form' //setting the name of the form. name just made up
})(SignInForm); //essentially returns a new and improved component