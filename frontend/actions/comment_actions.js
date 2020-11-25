import * as CommentUtil from "../util/comments_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

// if you decide to implement this functionality later .... here are corresponding answer uses
// export const ANSWER_LOGIN_MODE = "ANSWER_LOGIN_MODE";
// export const RECEIVE_SESSION_ANSWER = "RECEIVE_SESSION_ANSWER";
// export const ANSWER_VIEW_MODE = "ANSWER_VIEW_MODE";
// export const ANSWER_POST_MODE = "ANSWER_POST_MODE";
// export const ANSWER_EDIT_MODE = "ANSWER_EDIT_MODE";

// const receiveSessionAnswer = (sessionAnswer) => {
//     return {
//         type: RECEIVE_SESSION_ANSWER,
//         sessionAnswer
//     }
// }

// export const enterAnswerLoginMode = () => receiveSessionAnswer({currentAnswerId: null, currentAnswerMode: ANSWER_LOGIN_MODE});
// export const enterAnswerViewMode = (answerId) => receiveSessionAnswer({currentAnswerId: answerId, currentAnswerMode: ANSWER_VIEW_MODE});
// export const enterAnswerPostMode = () => receiveSessionAnswer({currentAnswerId: null, currentAnswerMode: ANSWER_POST_MODE});
// export const enterAnswerEditMode = (answerId) => receiveSessionAnswer({currentAnswerId: answerId, currentAnswerMode: ANSWER_EDIT_MODE});

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
            // .then((receivedAnswer) => dispatch(enterAnswerViewMode(receivedAnswer.id)))
            .fail((errors) => dispatch(receiveCommentErrors(errors.responseJSON)));
    };
}

export const updateComment = (comment) => {
    return (dispatch) => {
        return CommentUtil.updateComment(comment)
            .then((updatedComment) => dispatch(receiveComment(updatedComment)))
            // .then((receivedAnswer) => dispatch(enterAnswerViewMode(receivedAnswer.id)))
            .fail((errors) => dispatch(receiveCommentErrors(errors.responseJSON)));
    };
}

export const deleteComment = (answerId) => {
    return (dispatch) => {
        return CommentUtil.deleteComment(commentId)
            .then((deletedComment) => dispatch(removeComment(deletedComment)))
            // .then(() => dispatch(enterAnswerPostMode()))
            .fail((errors) => dispatch(receiveCommentErrors(errors.responseJSON)));
    };
}