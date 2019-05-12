import { PROJECT_FETCH, PROJECTS_FETCH, PROJECT_CREATE, PROJECT_EDIT, PROJECT_DELETE } from './types';

export const projectFetch = (id) => (dispatch, getState) => {
    const db = getState().firebase.instance.firestore();

    db.collection("projects").doc(id)
        .onSnapshot((doc) => {
            doc = { id: doc.id, ...doc.data() };

            dispatch({
                type: PROJECT_FETCH,
                data: doc
            });
        });
};

export const projectsFetch = () => (dispatch, getState) => {
    const db = getState().firebase.instance.firestore();
    const user = getState().user.user;

    db.collection("projects").where("uid", "==", user.uid)
        .onSnapshot((querySnapshot) => {
            const data = querySnapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } });

            dispatch({
                type: PROJECTS_FETCH,
                data: data
            });
        });
};

export const projectCreate = (projectData) => (dispatch, getState) => {
    const db = getState().firebase.instance.firestore();
    const uid = getState().user.user.uid;

    db.collection("projects").add({ ...projectData, uid: uid })
        .then(docRef => {
            dispatch({
                type: PROJECT_CREATE,
                data: {
                    docRef: docRef,
                    status: 'db/success'
                }
            });
        })
        .catch(err => {
            dispatch({
                type: PROJECT_CREATE,
                data: {
                    error: err,
                    status: 'db/error'
                }
            });
        });
}

export const projectEdit = (projectData) => (dispatch, getState) => {
    const db = getState().firebase.instance.firestore();
    const projectId = projectData.id;

    delete (projectData.id);

    db.collection("projects").doc(projectId).set(projectData, { merge: true })
        .then(() => {
            dispatch({
                type: PROJECT_EDIT,
                data: {
                    status: 'db/success'
                }
            });
        })
        .catch(err => {
            dispatch({
                type: PROJECT_EDIT,
                data: {
                    error: err,
                    status: 'db/error'
                }
            });
        });
}

export const projectDelete = (projectId) => (dispatch, getState) => {
    const db = getState().firebase.instance.firestore();

    db.collection("projects").doc(projectId).delete()
        .then(() => {
            dispatch({
                type: PROJECT_DELETE,
                data: {
                    status: 'db/success'
                }
            });
        })
        .catch(err => {
            dispatch({
                type: PROJECT_DELETE,
                data: {
                    error: err,
                    status: 'db/error'
                }
            });
        });
}