import {RECEIVE_CURRENT_USER} from "../actions/auth_actions"
import {RECEIVE_QUESTION} from "../actions/question_actions";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, {[action.user.id]: action.user})
        case RECEIVE_QUESTION:
            return Object.assign({}, oldState, action.payload.users)
        default:
            return oldState;
    }
}

export default usersReducer;