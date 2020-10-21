import * as QuestionUtil from "../util/questions_api_util";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const RECEIVE_QUESTION_ERRORS = "RECEIVE_QUESTION_ERRORS";

export const receiveQuestions = (payload) => {
    return {
        type: RECEIVE_QUESTIONS,
        payload
    }
}

export const receiveQuestion = (payload) => {
    return {
        type: RECEIVE_QUESTION,
        payload
    };
};

export const removeQuestion = (questionId) => {
    return {
        type: REMOVE_QUESTION,
        questionId
    }
}

const receiveQuestionErrors = (errors) => {
    return {
        type: RECEIVE_QUESTION_ERRORS,
        errors
    };
};

export const clearQuestionErrors = () => {
    return receiveQuestionErrors([]);
}

export const fetchQuestions = () => {
    return (dispatch) => {
        return QuestionUtil.fetchQuestions()
            .then((questions) => dispatch(receiveQuestions(questions)))
    };
}

export const fetchQuestion = (questionId) => {
    return (dispatch) => {
        return QuestionUtil.fetchQuestion(questionId)
            .then((question) => dispatch(receiveQuestion(question)))
            .fail((errors) => dispatch(receiveQuestionErrors(errors.responseJSON)));
    };
}

export const postQuestion = (question) => {
    return (dispatch) => {
        return QuestionUtil.postQuestion(question)
            .then((newQuestion) => dispatch(receiveQuestion(newQuestion)))
            .fail((errors) => dispatch(receiveQuestionErrors(errors.responseJSON)));
    };
}

export const updateQuestion = (question) => {
    return (dispatch) => {
        return QuestionUtil.updateQuestion(question)
            .then((updatedQuestion) => dispatch(receiveQuestion(updatedQuestion)))
            .fail((errors) => dispatch(receiveQuestionErrors(errors.responseJSON)));
    };
}

export const deleteQuestion = (questionId) => {
    return (dispatch) => {
        return QuestionUtil.deleteQuestion(questionId)
            .then(() => dispatch(removeQuestion(questionId)))
            .fail((errors) => dispatch(receiveQuestionErrors(errors.responseJSON)));
    };
}