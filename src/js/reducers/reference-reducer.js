import { REFERENCES_FETCH, REFERENCE_CREATE, REFERENCE_EDIT, REFERENCE_DELETE } from 'Actions/types';

const initialState = {
    references: [],
    response: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REFERENCES_FETCH:
            return {
                ...state,
                references: action.data
            };
        case REFERENCE_CREATE:
        case REFERENCE_EDIT:
        case REFERENCE_DELETE:
            return {
                ...state,
                response: action.data
            };
        default:
            return state;
    }
}