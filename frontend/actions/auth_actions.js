import * as AuthApiUtil from "../util/auth_api_util";
import {enterAnswerLoginMode} from "./answer_actions";
import {enterCommentLoginMode} from "./comment_actions";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_AUTH_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user: user
    };
};

const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER,
    };
};

const receiveAuthErrors = (errors) => {
    return {
        type: RECEIVE_AUTH_ERRORS,
        errors: errors
    };
};

export const clearAuthErrors = () => {
    return receiveAuthErrors([]);
}

export const login = (user) => {
    return (dispatch) => {
        return AuthApiUtil.login(user)
            .then((loginUser) => dispatch(receiveCurrentUser(loginUser)))
            .fail((errors) => dispatch(receiveAuthErrors(errors.responseJSON)));
    };
};

export const logout = () => {
    return (dispatch) => {
        return AuthApiUtil.logout()
            .then(() => dispatch(removeCurrentUser()))
            .then(() => dispatch(enterAnswerLoginMode()))
            .then(() => dispatch(enterCommentLoginMode()))
            .fail((errors) => dispatch(receiveAuthErrors(errors.responseJSON)));
    };
};

export const signup = (user) => {
    return (dispatch) => {
        return AuthApiUtil.signup(user)
            .then((newUser) => dispatch(receiveCurrentUser(newUser)))
            .fail((errors) => dispatch(receiveAuthErrors(errors.responseJSON)));
    };
};