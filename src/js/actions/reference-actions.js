import { REFERENCES_FETCH, REFERENCE_CREATE, REFERENCE_EDIT, REFERENCE_DELETE } from './types';

export const referencesFetch = (projectId) => (dispatch, getState) => {
    const db = getState().firebase.instance.firestore();

    db.collection("references").where("projectId", "==", projectId).orderBy('author').orderBy('name')
        .onSnapshot((querySnapshot) => {
            const data = querySnapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } });

            dispatch({
                type: REFERENCES_FETCH,
                data: data
            });
        });
};

export const referenceCreate = (referenceData) => (dispatch, getState) => {
    const db = getState().firebase.instance.firestore();
    const uid = getState().user.user.uid;

    db.collection("references").add({ ...referenceData, uid: uid })
        .then(docRef => {
            dispatch({
                type: REFERENCE_CREATE,
                data: {
                    docRef: docRef,
                    status: 'db/success'
                }
            });
        })
        .catch(err => {
            dispatch({
                type: REFERENCE_CREATE,
                data: {
                    error: err,
                    status: 'db/error'
                }
            });
        });
}

export const referenceDelete = (referenceId) => (dispatch, getState) => {
    const db = getState().firebase.instance.firestore();

    db.collection("references").doc(referenceId).delete()
        .then(() => {
            dispatch({
                type: REFERENCE_DELETE,
                data: {
                    status: 'db/success'
                }
            });
        })
        .catch(err => {
            dispatch({
                type: REFERENCE_DELETE,
                data: {
                    error: err,
                    status: 'db/error'
                }
            });
        });
}