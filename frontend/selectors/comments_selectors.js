
export const selectComment = (state, commentId) => {
  return state.entities.comments[commentId];
}

export const selectUserComments = (state, currentUserId) => {
  let userCommentHash = {}
  if (currentUserId == null)
    return userCommentHash;
  Object.values(state.entities.comments)
    .filter(comment => comment.author_id == currentUserId)
    .forEach(comment => userCommentHash[comment.answer_id] = comment.id);
  return userCommentHash
}

export const selectSessionComment = (state) => {
  return state.session.comment
}

export const selectCommentHashAnswers = (state) => {    
    let commentHash = {};
    Object.values(state.entities.comments)
        .forEach((comment) => {
            if (commentHash[comment.answer_id])
              commentHash[comment.answer_id].push(comment)
            else
              commentHash[comment.answer_id] = [comment]
        })
    return commentHash;
}