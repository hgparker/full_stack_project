import {RECEIVE_SESSION_ANSWER, ANSWER_EDIT_MODE, ANSWER_POST_MODE, ANSWER_LOGIN_MODE, and} from "../actions/answer_actions";

const sessionAnswerReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ANSWER:
      return Object.assign({}, action.sessionAnswer);
    default:
      return oldState;
  }
}

export default sessionAnswerReducer;