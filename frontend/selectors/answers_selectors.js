// look through entire state
// use Object.values(state.entities.answers).filter((answer) => answer.question_id === questionId)

export const selectAnswers = (state, questionId) => {
    return Object.values(state.entities.answers)
        .filter((answer) => answer.question_id !== questionId);
} 