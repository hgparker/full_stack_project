

export const selectQuestions = (state, voteHash) => Object.values(state.entities.questions)
    .sort((a, b) => (voteHash[b.id] || 0) - (voteHash[a.id] || 0))

export const selectQuestion = (state, questionId) => state.entities.questions[questionId]

export const selectQuestionNumber = (state) => Object.values(state.entities.questions).length