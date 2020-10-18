export default questionsReducer;

import {RECEIVE_QUESTION, RECEIVE_QUESTIONS, REMOVE_QUESTION} from "../actions/question_actions";

const questionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return action.questions;
        case RECEIVE_QUESTION:
            return Object.assign({}, oldState, {[action.question.id]: action.question})
        case REMOVE_QUESTION:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.questionId]
            return nextState;
        default:
            return oldState;
    }
}