import {combineReducers} from 'redux';
import questionErrorsReducer from './question_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import answerErrorsReducer from './answer_errors_reducer';
import voteErrorsReducer from './vote_errors_reducer';
import commentErrorsReducer from "./comment_errors_reducer";

export default combineReducers({
  session: sessionErrorsReducer,
  question: questionErrorsReducer,
  answer: answerErrorsReducer,
  vote: voteErrorsReducer,
  comment: commentErrorsReducer
});