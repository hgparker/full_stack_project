import {combineReducers} from 'redux';
import questionsReducer from './questions_reducer';
import questionErrorsReducer from './question_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  question: questionErrorsReducer
});