import usersReducer from "./users_reducer";
import {combineReducers} from 'redux';
import questionsReducer from "./questions_reducer";
import answersReducer from "./answers_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    answers: answersReducer
});


export default entitiesReducer;