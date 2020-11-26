import * as CommentUtil from "../util/comments_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

export const COMMENT_LOGIN_MODE = "COMMENT_LOGIN_MODE";
export const RECEIVE_SESSION_COMMENT = "RECEIVE_SESSION_COMMENT";
export const COMMENT_VIEW_MODE = "COMMENT_VIEW_MODE";
export const COMMENT_POST_MODE = "COMMENT_POST_MODE";
export const COMMENT_EDIT_MODE = "COMMENT_EDIT_MODE";

const receiveSessionComment = (sessionComment) => {
    return {
        type: RECEIVE_SESSION_Comment,
        sessionComment
    }
}

export const enterCommentLoginMode = () => receiveSessionComment({currentCommentId: null, currentCommentMode: COMMENT_LOGIN_MODE});
export const enterCommentViewMode = () => receiveSessionComment({currentCommentId: null, currentCommentMode: COMMENT_VIEW_MODE});
export const enterCommentPostMode = () => receiveSessionComment({currentCommentId: null, currentCommentMode: COMMENT_POST_MODE});
export const enterCommentEditMode = (commentId) => receiveSessionComment({currentCommentId: commentId, currentCommentMode: COMMENT_EDIT_MODE});

export const receiveComments = (payload) => {
  return {
    type: RECEIVE_COMMENTS,
    payload
  }
}

export const receiveComment = (payload) => {
  return {
    type: RECEIVE_COMMENT,
    payload
  }
}

export const removeComment = (payload) => {
  return {
    type: REMOVE_COMMENT,
    payload
  }
}

export const receiveCommentErrors = (errors) => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  }
}

export const clearCommentErrors = () => {
    return receiveCommentErrors([]);
}

export const postComment = (comment) => {
    return (dispatch) => {
        return CommentUtil.postComment(comment)
            .then((newComment) => dispatch(receiveComment(newComment)))
            .then(() => dispatch(enterCommentViewMode()))
            .fail((errors) => dispatch(receiveCommentErrors(errors.responseJSON)));
    };
}

export const updateComment = (comment) => {
    return (dispatch) => {
        return CommentUtil.updateComment(comment)
            .then((updatedComment) => dispatch(receiveComment(updatedComment)))
            .then(() => dispatch(enterCommentViewMode()))
            .fail((errors) => dispatch(receiveCommentErrors(errors.responseJSON)));
    };
}

export const deleteComment = (commentId) => {
    return (dispatch) => {
        return CommentUtil.deleteComment(commentId)
            .then((deletedComment) => dispatch(removeComment(deletedComment)))
            .then(() => dispatch(enterCommentViewMode()))
            .fail((errors) => dispatch(receiveCommentErrors(errors.responseJSON)));
    };
}