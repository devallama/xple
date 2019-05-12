import { FIREBASE_FETCH_INSTANCE } from './types';

import firebase from 'firebase';
import firebaseConfig from '../firebase.confid';

firebase.initializeApp(firebaseConfig);

firebase.firestore().enablePersistence()
    .catch(function (err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });

export const firebaseFetchInstance = () => dispatch => {
    dispatch({
        type: FIREBASE_FETCH_INSTANCE,
        data: {
            instance: firebase
        }
    });
};