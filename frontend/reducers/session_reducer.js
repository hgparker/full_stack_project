import {combineReducers} from 'redux';
import sessionUserReducer from './session_user_reducer';

export default combineReducers({
  user: sessionUserReducer
});