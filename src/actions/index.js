import types from './types';

export function signIn(user){
    console.log('Sign In Action Creator, user data:', user);

    return {
        type:types.SIGN_IN,
        email: user.email
    }
}

export function signOut(){
    return {
        type: types.SIGN_OUT
    }
}
