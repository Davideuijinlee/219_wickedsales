import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {
    state = {
        message: 'checking Auth...'
    }
    componentDidMount(){
        this.checkAuth();
    }

    async checkAuth(){
        const resp = await axios.get('/api/test/check_auth.php');
        console.log('Check Auth Resp:', resp.data);
        this.setState({
            message: resp.data.auth ? 'giggity' : 'ungiggity'
        });
    }
    signIn = async ()=>{
        const resp = await axios.get('/api/test/sign_in.php');

        console.log('Sign in', resp);
        this.checkAuth();
    }

    signOut = async() => {
        await axios.get('/api/test/sign_out.php');
        this.checkAuth();
    }

    render(){
        return (
            <div>
                <h1 className="center">Test Stuff</h1>
                <h2 className="center">{this.state.message}</h2>
                <button onClick={this.signIn} className="btn btn-large">Sign in</button>
                <button onClick={this.signOut} className="red btn btn-large">Sign out</button>

            </div>
        )
    }
}
export default Test;