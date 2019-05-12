import { LEARNING_APPS_FETCH } from 'Actions/types';

const initialState = {
    apps: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LEARNING_APPS_FETCH:
            return {
                ...state,
                apps: action.data
            };
        default:
            return state;
    }
}