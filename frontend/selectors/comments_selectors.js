
// in case need for comments
// export const selectAnswer = (state, answerId) => {
//   return state.entities.answers[answerId];
// }
// future hasCommented
// export const hasAnswered = (state, questionId, currentUserId) => {
//   return Object.values(state.entities.answers)
//       .filter(answer => answer.question_id == questionId && answer.author_id == currentUserId)
//       .length != 0
// }
// sessionComment
// export const selectSessionAnswer = (state) => {
//   return state.session.answer
// }

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