import { combineReducers } from 'redux';

import appDBReducer from './app-db-reducer';
import authReducer from './auth-reducer';
import firebaseReducer from './firebase-reducer';
import learningAppsReducer from './learning-apps-reducer';
import locationReducer from './location-reducer';
import milestoneReducer from './milestone-reducer';
import projectReducer from './project-reducer';
import referenceReducer from './reference-reducer';
import userReducer from './user-reducer';

export default combineReducers({
    appDB: appDBReducer,
    auth: authReducer,
    firebase: firebaseReducer,
    learningApp: learningAppsReducer,
    location: locationReducer,
    milestone: milestoneReducer,
    project: projectReducer,
    reference: referenceReducer,
    user: userReducer
});