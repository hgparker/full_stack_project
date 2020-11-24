import * as AnswerUtil from "../util/answers_api_util";

export const RECEIVE_ANSWERS = "RECEIVE_ANSWERS";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const REMOVE_ANSWER = "REMOVE_ANSWER";
export const RECEIVE_ANSWER_ERRORS = "RECEIVE_ANSWER_ERRORS";


export const ANSWER_LOGIN_MODE = "ANSWER_LOGIN_MODE";
export const RECEIVE_SESSION_ANSWER = "RECEIVE_SESSION_ANSWER";
export const ANSWER_VIEW_MODE = "ANSWER_VIEW_MODE";
export const ANSWER_POST_MODE = "ANSWER_POST_MODE";
export const ANSWER_EDIT_MODE = "ANSWER_EDIT_MODE";

const receiveSessionAnswer = (sessionAnswer) => {
    return {
        type: RECEIVE_SESSION_ANSWER,
        sessionAnswer
    }
}

export const enterAnswerLoginMode = () => receiveSessionAnswer({currentAnswerId: null, currentAnswerMode: ANSWER_LOGIN_MODE});
export const enterAnswerViewMode = (answerId) => receiveSessionAnswer({currentAnswerId: answerId, currentAnswerMode: ANSWER_VIEW_MODE});
export const enterAnswerPostMode = () => receiveSessionAnswer({currentAnswerId: null, currentAnswerMode: ANSWER_POST_MODE});
export const enterAnswerEditMode = (answerId) => receiveSessionAnswer({currentAnswerId: answerId, currentAnswerMode: ANSWER_EDIT_MODE});

export const receiveAnswers = (payload) => {
    return {
        type: RECEIVE_ANSWERS,
        payload
    }
}

export const receiveAnswer = (payload) => {
    return {
        type: RECEIVE_ANSWER,
        payload
    };
};

export const removeAnswer = (payload) => {
    return {
        type: REMOVE_ANSWER,
        payload
    }
}

const receiveAnswerErrors = (errors) => {
    return {
        type: RECEIVE_ANSWER_ERRORS,
        errors
    };
};

export const clearAnswerErrors = () => {
    return receiveAnswerErrors([]);
}

export const postAnswer = (answer) => {
    return (dispatch) => {
        return AnswerUtil.postAnswer(answer)
            .then((newAnswer) => dispatch(receiveAnswer(newAnswer)))
            .then((receivedAnswer) => dispatch(enterAnswerViewMode(receivedAnswer.id)))
            .fail((errors) => dispatch(receiveAnswerErrors(errors.responseJSON)));
    };
}

export const updateAnswer = (answer) => {
    return (dispatch) => {
        return AnswerUtil.updateAnswer(answer)
            .then((updatedAnswer) => dispatch(receiveAnswer(updatedAnswer)))
            .then((receivedAnswer) => dispatch(enterAnswerViewMode(receivedAnswer.id)))
            .fail((errors) => dispatch(receiveAnswerErrors(errors.responseJSON)));
    };
}

export const deleteAnswer = (answerId) => {
    return (dispatch) => {
        return AnswerUtil.deleteAnswer(answerId)
            .then((deletedAnswer) => dispatch(removeAnswer(deletedAnswer)))
            .then(() => dispatch(enterAnswerPostMode()))
            .fail((errors) => dispatch(receiveAnswerErrors(errors.responseJSON)));
    };
}