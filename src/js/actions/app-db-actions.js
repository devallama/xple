import { APP_DB_FETCH } from './types';

export const appDBFetch = app => (dispatch, getState) => {
    const db = getState().firebase.instance.firestore();

    const collection = db.collection('apps-storage').doc(app);

    dispatch({
        type: APP_DB_FETCH,
        data: collection
    });
}