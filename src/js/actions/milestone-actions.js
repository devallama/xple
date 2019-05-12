import { MILESTONES_FETCH, MILESTONE_CREATE, MILESTONE_EDIT, MILESTONE_DELETE } from './types';

export const milestonesFetch = (projectId = null) => (dispatch, getState) => {
    const db = getState().firebase.instance.firestore();
    const uid = getState().user.user.uid;

    if (projectId) {
        db.collection("milestones").where("uid", "==", uid).where("projectId", "==", projectId).orderBy("date")
            .onSnapshot((querySnapshot) => {
                const data = querySnapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } });

                dispatch({
                    type: MILESTONES_FETCH,
                    data: data
                });
            });
    } else {
        db.collection("milestones").where("uid", "==", uid).orderBy("date")
            .onSnapshot((querySnapshot) => {
                const data = querySnapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } });

                dispatch({
                    type: MILESTONES_FETCH,
                    data: data
                });
            });
    }
};

export const milestoneCreate = (milestoneData) => (dispatch, getState) => {
    const db = getState().firebase.instance.firestore();
    const uid = getState().user.user.uid;

    console.log(milestoneData);

    db.collection("milestones").add({ ...milestoneData, uid: uid })
        .then(docRef => {
            dispatch({
                type: MILESTONE_CREATE,
                data: {
                    docRef: docRef,
                    status: 'db/success'
                }
            });
        })
        .catch(err => {
            dispatch({
                type: MILESTONE_CREATE,
                data: {
                    error: err,
                    status: 'db/error'
                }
            });
        });
}

export const milestoneDelete = (milestoneId) => (dispatch, getState) => {
    const db = getState().firebase.instance.firestore();

    db.collection("milestones").doc(milestoneId).delete()
        .then(() => {
            dispatch({
                type: MILESTONE_DELETE,
                data: {
                    status: 'db/success'
                }
            });
        })
        .catch(err => {
            dispatch({
                type: MILESTONE_DELETE,
                data: {
                    error: err,
                    status: 'db/error'
                }
            });
        });
}