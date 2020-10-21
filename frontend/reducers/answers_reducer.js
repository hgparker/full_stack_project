import {RECEIVE_ANSWERS, RECEIVE_ANSWER, REMOVE_ANSWER} from "../actions/answer_actions";
import {RECEIVE_QUESTION} from "../actions/question_actions";

const answersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ANSWERS:
            return action.payload.answers
        case RECEIVE_ANSWER:
            return Object.assign({}, oldState, action.payload.answers)
        case REMOVE_ANSWER:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.answerId]
            return nextState;
        case RECEIVE_QUESTION:
            return Object.assign({}, oldState, action.payload.answers)
        default:
            return oldState;
    }
}

export default answersReducer;