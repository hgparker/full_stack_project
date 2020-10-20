import * as QuestionUtil from "../util/questions_api_util";
import {RECEIVE_ANSWERS, receiveAnswers} from "./answer_actions";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const RECEIVE_QUESTION_ERRORS = "RECEIVE_QUESTION_ERRORS";

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions: questions
    }
}

export const receiveQuestion = (question) => {
    return {
        type: RECEIVE_QUESTION,
        question: {
            id: question.id,
            title: question.title,
            body: question.body,
            answers: Object.keys(question.answers)
        }
    };
};

export const removeQuestion = (questionId) => {
    return {
        type: REMOVE_QUESTION,
        questionId: questionId
    }
}

const receiveQuestionErrors = (errors) => {
    return {
        type: RECEIVE_QUESTION_ERRORS,
        errors: errors
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
            .then((question) => {
                dispatch(receiveAnswers(question.answers))
                return dispatch(receiveQuestion(question))
            }).fail((errors) => dispatch(receiveQuestionErrors(errors.responseJSON)));
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