import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../../actions';
import './sign_out.scss';

class SignOut extends Component {
    componentDidMount(){

        this.props.signOut();
    }
    render (){
        return(
            <div className="sign-out">
                <div className="sign-out-header center">
                    <h1 className="center">Thank you for Visiting Our Site</h1>
                    <h2 className="center">You have been signed out</h2>
                </div>
            </div>
        )
    }
}

export default connect(null, {
    signOut
})(SignOut);