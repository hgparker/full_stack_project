import {RECEIVE_CURRENT_USER} from "../actions/auth_actions"


const usersReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, {[action.user.id]: action.user})
        default:
            return oldState;
    }
}

export default usersReducer;