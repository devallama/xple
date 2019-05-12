import { MILESTONES_FETCH, MILESTONE_CREATE, MILESTONE_EDIT, MILESTONE_DELETE } from 'Actions/types';

const initialState = {
    milestones: [],
    response: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MILESTONES_FETCH:
            return {
                ...state,
                milestones: action.data
            };
        case MILESTONE_CREATE:
        case MILESTONE_EDIT:
        case MILESTONE_DELETE:
            return {
                ...state,
                response: action.data
            };
        default:
            return state;
    }
}