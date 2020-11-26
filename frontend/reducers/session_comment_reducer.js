import {RECEIVE_SESSION_COMMENT, COMMENT_LOGIN_MODE} from "../actions/comment_actions";

const _nullComment = {
  currentCommentId: null,
  currentCommentMode: COMMENT_LOGIN_MODE
}

const sessionCommentReducer = (oldState = _nullComment, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_COMMENT:
      return Object.assign({}, action.sessionComment);
    default:
      return oldState;
  }
}

export default sessionCommentReducer;