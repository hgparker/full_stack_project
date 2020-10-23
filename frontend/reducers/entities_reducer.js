import usersReducer from "./users_reducer";
import {combineReducers} from 'redux';
import questionsReducer from "./questions_reducer";
import answersReducer from "./answers_reducer";
import votesReducer from './votes_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    answers: answersReducer,
    votes: votesReducer
});


export default entitiesReducer;