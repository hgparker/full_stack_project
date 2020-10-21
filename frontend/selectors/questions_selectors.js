

export const selectQuestions = (state) => Object.values(state.entities.questions)

export const selectQuestion = (state, questionId) => state.entities.questions[questionId]