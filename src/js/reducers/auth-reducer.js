import { AUTH_LOGIN, AUTH_REGISTER, AUTH_LOGOUT } from 'Actions/types';

const initialState = {
    response: {
        status: null,
        message: ''
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
        case AUTH_REGISTER:
        case AUTH_LOGOUT:
            return {
                ...state,
                response: action.data.response
            };
        default:
            return state;
    }
}