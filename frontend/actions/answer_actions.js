import * as AnswerUtil from "../util/answers_api_util";

export const RECEIVE_ANSWERS = "RECEIVE_ANSWERS";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const REMOVE_ANSWER = "REMOVE_ANSWER";
export const RECEIVE_ANSWER_ERRORS = "RECEIVE_ANSWER_ERRORS";

export const receiveAnswers = (answers) => {
    return {
        type: RECEIVE_ANSWERS,
        answers: answers
    }
}

export const receiveAnswer = (answer) => {
    return {
        type: RECEIVE_ANSWER,
        answer: answer
    };
};

export const removeAnswer = (answerId) => {
    return {
        type: REMOVE_ANSWER,
        answerId: answerId
    }
}

const receiveAnswerErrors = (errors) => {
    return {
        type: RECEIVE_ANSWER_ERRORS,
        errors: errors
    };
};

export const clearAnswerErrors = () => {
    return receiveAnswerErrors([]);
}

export const postAnswer = (answer) => {
    return (dispatch) => {
        return AnswerUtil.postAnswer(answer)
            .then((newAnswer) => dispatch(receiveAnswer(newAnswer)))
            .fail((errors) => dispatch(receiveAnswerErrors(errors.responseJSON)));
    };
}

export const updateAnswer = (answer) => {
    return (dispatch) => {
        return AnswerUtil.updateAnswer(answer)
            .then((updatedAnswer) => dispatch(receiveAnswer(updatedAnswer)))
            .fail((errors) => dispatch(receiveAnswerErrors(errors.responseJSON)));
    };
}

export const deleteAnswer = (answerId) => {
    return (dispatch) => {
        return AnswerUtil.deleteAnswer(answerId)
            .then(() => dispatch(removeAnswer(answerId)))
            .fail((errors) => dispatch(receiveAnswerErrors(errors.responseJSON)));
    };
}