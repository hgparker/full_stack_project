import {RECEIVE_COMMENT_ERRORS, RECEIVE_COMMENT} from "../actions/comment_actions";

const commentErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return action.errors
        case RECEIVE_COMMENT:
            return [];
        default:
            return oldState;
    }
}

export default commentErrorsReducer;