import { APP_DB_FETCH } from 'Actions/types';

const initialState = {
    db: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case APP_DB_FETCH:
            return {
                ...state,
                db: action.data
            };
        default:
            return state;
    }
}