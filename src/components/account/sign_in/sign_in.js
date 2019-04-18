import React, {Component} from 'react';
import {connect} from 'react-redux';
import SignInForm from './sign_in_form';
import {signIn} from '../../../actions';


class SignIn extends Component {
    handleSignIn=(value)=>{
        console.log('Form Values', value);

        this.props.signIn(value);        
    }

    render(){
        return (
            <div>
                <h1 className="center">Sign In</h1>
                <SignInForm signIn={this.handleSignIn}/>
            </div>
        );
    }
}

export default connect(null, {
    signIn
})(SignIn);