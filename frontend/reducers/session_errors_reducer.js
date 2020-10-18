import {RECEIVE_AUTH_ERRORS, RECEIVE_CURRENT_USER} from "../actions/auth_actions";


const sessionErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_AUTH_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;