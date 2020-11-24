import {combineReducers} from 'redux';
import sessionUserReducer from './session_user_reducer';
import sessionAnswerReducer from './session_answer_reducer';

export default combineReducers({
  user: sessionUserReducer,
  answer: sessionAnswerReducer
});