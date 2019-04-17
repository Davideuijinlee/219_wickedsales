// const state = {
//     user: {
//         auth: false,
//         username: 'Stevee'
//     },
//     products: {
//         list: [],
//         productDetails: {}
//     },
//     cart: {
//         totalItems: 4,
//         totalCost: 8900,
//         items: []
//     },
// }

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer
});

export default rootReducer;

