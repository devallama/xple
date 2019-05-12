import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import firebaseReducer from './firebase-reducer';
import locationReducer from './location-reducer';
import milestoneReducer from './milestone-reducer';
import projectReducer from './project-reducer';
import referenceReducer from './reference-reducer';
import userReducer from './user-reducer';

export default combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    location: locationReducer,
    milestone: milestoneReducer,
    project: projectReducer,
    reference: referenceReducer,
    user: userReducer
});