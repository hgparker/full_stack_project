export const selectAnswers = (state, questionId, voteHash) => {
    return Object.values(state.entities.answers)
        .filter(answer => answer.question_id == questionId)
        .sort((a, b) => (voteHash[b.id] || 0) - (voteHash[a.id] || 0) );
}

export const selectAnswer = (state, answerId) => {
    return state.entities.answers[answerId];
}

export const hasAnswered = (state, questionId, currentUserId) => {
    return Object.values(state.entities.answers)
        .filter(answer => answer.question_id == questionId && answer.author_id == currentUserId)
        .length != 0
}