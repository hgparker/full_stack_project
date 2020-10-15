import * as AuthApiUtil from "../util/auth_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

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

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors: errors
    };
};

export const login = (user) => {
    return (dispatch) => {
        return AuthApiUtil.login(user)
            .then((loginUser) => dispatch(receiveCurrentUser(loginUser)))
            .fail((error) => dispatch(receiveErrors([error])));
    };
};

export const logout = () => {
    return (dispatch) => {
        return AuthApiUtil.logout()
            .then(() => dispatch(removeCurrentUser()))
            .fail((error) => dispatch(receiveErrors([error])));
    };
};

export const signup = (user) => {
    return (dispatch) => {
        return AuthApiUtil.signup(user)
            .then((newUser) => dispatch(receiveCurrentUser(newUser)))
            .fail((error) => dispatch(receiveErrors([error])));
    };
};