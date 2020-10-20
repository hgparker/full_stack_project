import {RECEIVE_QUESTION, RECEIVE_QUESTIONS, REMOVE_QUESTION} from "../actions/question_actions";
import {REMOVE_ANSWER} from "../actions/answer_actions";

const questionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    var nextState;
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return action.questions;
        case RECEIVE_QUESTION:
            return Object.assign({}, oldState, {[action.question.id]: action.question})
        case REMOVE_QUESTION:
            nextState = Object.assign({}, oldState);
            delete nextState[action.questionId]
            return nextState;
        case REMOVE_ANSWER:
            nextState2 = Object.assign({}, oldState);
            let index = nextState[action.questionId].indexOf(action.answerId);
            nextState[action.questionId].splice(index); 
            return nextState2;
        default:
            return oldState;
    }
}

export default questionsReducer;