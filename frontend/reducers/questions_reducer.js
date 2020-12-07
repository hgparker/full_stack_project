import {RECEIVE_QUESTION, RECEIVE_QUESTIONS, REMOVE_QUESTION} from "../actions/question_actions";

const questionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return Object.assign({}, action.payload.questions)
        case RECEIVE_QUESTION:
            return Object.assign({}, oldState, action.payload.questions)
        case REMOVE_QUESTION:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.questionId]
            return nextState;
        default:
            return oldState;
    }
}

export default questionsReducer;