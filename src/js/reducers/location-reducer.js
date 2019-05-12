import { LOCATION_SET_PROJECTID } from 'Actions/types';

const initialState = {
    projectId: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOCATION_SET_PROJECTID:
            return {
                ...state,
                projectId: action.data
            };
        default:
            return state;
    }
}