import {RECEIVE_SESSION_ANSWER, ANSWER_LOGIN_MODE} from "../actions/answer_actions";

const _nullAnswer = {
  currentAnswerId: null,
  currentAnswerMode: ANSWER_LOGIN_MODE
}

const sessionAnswerReducer = (oldState = _nullAnswer, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ANSWER:
      return Object.assign({}, action.sessionAnswer);
    default:
      return oldState;
  }
}

export default sessionAnswerReducer;