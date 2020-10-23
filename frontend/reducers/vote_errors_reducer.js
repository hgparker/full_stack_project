import {RECEIVE_VOTE_ERRORS, RECEIVE_VOTE} from "../actions/vote_actions";

const voteErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_VOTE_ERRORS:
            return action.errors
        case RECEIVE_VOTE:
            return [];
        default:
            return oldState;
    }
}

export default voteErrorsReducer;