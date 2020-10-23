import {RECEIVE_VOTE, REMOVE_VOTE} from "../actions/vote_actions";
import {RECEIVE_QUESTION, RECEIVE_QUESTIONS} from "../actions/question_actions";

const votesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_VOTE:
            return Object.assign({}, oldState, action.payload.votes);
        case REMOVE_VOTE:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.voteId];
            return nextState;
        case RECEIVE_QUESTION:
            return Object.assign({}, oldState, action.payload.votes);
        case RECEIVE_QUESTIONS:
                return Object.assign({}, oldState, action.payload.votes);
        default:
            return oldState;
    }
}

export default votesReducer;