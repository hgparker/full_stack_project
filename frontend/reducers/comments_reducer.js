import {RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT} from "../actions/comment_actions";
import {RECEIVE_QUESTION} from "../actions/question_actions";

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.payload.comments
        case RECEIVE_COMMENT:
            return Object.assign({}, oldState, action.payload.comments)
        case REMOVE_COMMENT:
            let nextState = Object.assign({}, oldState);
            Object.keys(action.payload.comments).map((commentId) => delete nextState[commentId])
            return nextState;
        case RECEIVE_QUESTION:
            return Object.assign({}, oldState, action.payload.comments)
        default:
            return oldState;
    }
}

export default commentsReducer;