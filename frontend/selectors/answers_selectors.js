

export const selectAnswers = (state, questionId) => {
    // debugger
    let answers = []
    if (state.entities.questions[questionId] && state.entities.questions[questionId].answers)
        answers = state.entities.questions[questionId].answers;
    return answers.map(answerId => selectAnswer(state, answerId));
} 

export const selectAnswer = (state, answerId) => {
    return state.entities.answers[answerId];
}