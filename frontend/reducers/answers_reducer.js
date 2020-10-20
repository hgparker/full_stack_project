import {RECEIVE_ANSWERS, RECEIVE_ANSWER, REMOVE_ANSWER} from "../actions/answer_actions";

const answersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ANSWERS:
            return action.answers
        case RECEIVE_ANSWER:
            return Object.assign({}, oldState, {[action.answer.id]: action.answer})
        case REMOVE_ANSWER:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.answerId]
            return nextState;
        default:
            return oldState;
    }
}

export default answersReducer;