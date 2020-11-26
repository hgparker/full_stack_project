import {combineReducers} from 'redux';
import sessionUserReducer from './session_user_reducer';
import sessionAnswerReducer from './session_answer_reducer';
import sessionCommentReducer from "./session_comment_reducer";

export default combineReducers({
  user: sessionUserReducer,
  answer: sessionAnswerReducer,
  comment: sessionCommentReducer
});