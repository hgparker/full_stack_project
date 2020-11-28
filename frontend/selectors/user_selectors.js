import {selectQuestion} from "./questions_selectors";
import {selectAnswer} from "./answers_selectors";
import {selectComment} from "./comments_selectors";

export const selectQuestionUsername = (state, questionId) => {
  let question = selectQuestion(state, questionId);
  if (question && question.author_id && state.entities.users[question.author_id])
    return state.entities.users[question.author_id].username;
}

export const selectUsername = (state, userId) => {
  return state.entities.users[userId].username;
}

// export const selectAnswerUsername = (state, answerId) => {
//   let answer = selectAnswer(state, answerId);
//   return state.entities.users[answer.author_id].username;
  // if (question && question.author_id && state.entities.users[question.author_id])
  //   return state.entities.users[question.author_id].username;
// }

// export const selectQuestionUsername = (state, questionId) => {
//   let question = selectQuestion(state, questionId);
//   if (question && question.author_id && state.entities.users[question.author_id])
//     return state.entities.users[question.author_id].username;
// }