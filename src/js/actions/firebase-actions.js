import { FIREBASE_FETCH_INSTANCE } from './types';

import firebase from 'firebase';
import firebaseConfig from '../firebase.confid';

firebase.initializeApp(firebaseConfig);

firebase.firestore().enablePersistence()
    .catch(function (err) {
        if (err.code == 'failed-precondition') { } else if (err.code == 'unimplemented') { }
    });

export const firebaseFetchInstance = () => dispatch => {
    dispatch({
        type: FIREBASE_FETCH_INSTANCE,
        data: {
            instance: firebase
        }
    });
};