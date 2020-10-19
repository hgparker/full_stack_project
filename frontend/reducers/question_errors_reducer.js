import { RECEIVE_CURRENT_USER } from "../actions/auth_actions";
import {RECEIVE_QUESTION_ERRORS, RECEIVE_QUESTION} from "../actions/question_actions";

const questionErrorsReducer =(oldState =[], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_QUESTION_ERRORS:
            return action.errors
        case RECEIVE_QUESTION:
            return [];
        default:
            return oldState;
    }
}

export default questionErrorsReducer;