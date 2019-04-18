const DEFAULT_STATE = {
    auth: false,
    username: '',
};

const exampleAction = {
    type:'LOG_USER_IN',
    username: 'JimBob'
}

function userReducer(state = DEFAULT_STATE, action){
    switch(action.type){
        case 'SIGN_IN':
            return {...state, auth: true};
        // case 'LOG_USER_IN':
        //     return {...state, auth: true, username: action.username};
        default: 
            return state;
    }
}

export default userReducer;