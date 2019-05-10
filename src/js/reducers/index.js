import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import firebaseReducer from './firebase-reducer';
import userReducer from './user-reducer';

export default combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    user: userReducer
});