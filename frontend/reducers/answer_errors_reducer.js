import {RECEIVE_ANSWER_ERRORS, RECEIVE_ANSWER} from "../actions/answer_actions";

const answerErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ANSWER_ERRORS:
            return action.errors
        case RECEIVE_ANSWER:
            return [];
        default:
            return oldState;
    }
}

export default answerErrorsReducer;