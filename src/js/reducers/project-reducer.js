import { PROJECT_FETCH, PROJECTS_FETCH, PROJECT_CREATE, PROJECT_EDIT, PROJECT_DELETE } from 'Actions/types';

const initialState = {
    project: {},
    projects: [],
    response: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PROJECT_FETCH:
            return {
                ...state,
                project: action.data
            };
        case PROJECTS_FETCH:
            return {
                ...state,
                projects: action.data
            };
        case PROJECT_CREATE:
        case PROJECT_EDIT:
        case PROJECT_DELETE:
            return {
                ...state,
                response: action.data
            };
        default:
            return state;
    }
}