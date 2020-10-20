

export const selectAnswers = (state, questionId) => {
    let answers = state.entities.questions[questionId];
    return answers.map((answerId) => selectAnswer(state, answerId));
} 

export const selectAnswer = (state, answerId) => {
    return state.entities.answers[answerId];
}