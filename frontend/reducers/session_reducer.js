import {RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER} from "../actions/auth_actions"

const _nullUser = {
    currentUserId: null
};

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    switch(action.type) {
      case RECEIVE_CURRENT_USER:
        return Object.assign({}, {currentUserId: action.user.id});
      case REMOVE_CURRENT_USER:
        return Object.assign({}, _nullUser);
      default:
        return oldState;
    }
  };

export default sessionReducer;