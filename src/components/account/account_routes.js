import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NotFound from '../404';
import SignIn from './sign_in';
import SignOut from './sign_out';
import SignUp from './sign_up/sign_up';

export default props =>{
    const {match} = props;

    console.log(props);

    return (
        <Switch>
            <Route path={`${match.path}/sign-in`} component={SignIn}/>
            
            <Route path={`${match.path}/sign-up`} component={SignUp}/>
            <Route path={`${match.path}/sign-out`} component={SignOut}/>
            <Route component={NotFound}/>
        </Switch>
    );
}