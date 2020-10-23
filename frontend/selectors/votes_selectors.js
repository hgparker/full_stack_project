export const selectEquivalentVotes = (state, newVote) => {
    return Object.values(state.entities.votes)
        .filter(vote => vote.votable_id == newVote.votable_id &&
                        vote.votable_type == newVote.votable_type &&
                        vote.user_id == newVote.user_id)
}

export const selectTotalVotesQuestion = (state, questionId) => {
    return Object.values(state.entities.votes)
        .filter(vote => vote.votable_id == questionId &&
                        vote.votable_type == "Question")
        .map((vote) => vote.vote_direction)
        .reduce((a, b) => a + b, 0);
}

export const selectVoteHashQuestions = (state) => {    
    let voteHash = {};
    Object.values(state.entities.votes)
        .filter((vote) => vote.votable_type == "Question")
        .forEach((vote) => {
            voteHash[vote.votable_id] = (voteHash[vote.votable_id] || 0) + vote.vote_direction
        })
    return voteHash;
}

export const selectVoteHashAnswers = (state) => {    
    let voteHash = {};
    Object.values(state.entities.votes)
        .filter((vote) => vote.votable_type == "Answer")
        .forEach((vote) => {
            voteHash[vote.votable_id] = (voteHash[vote.votable_id] || 0) + vote.vote_direction
        })
    return voteHash;
}