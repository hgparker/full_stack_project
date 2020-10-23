export const selectEquivalentVotes = (state, newVote) => {
    return Object.values(state.entities.votes)
        .filter(vote => vote.votable_id == newVote.votable_id &&
                        vote.votable_type == newVote.votable_type &&
                        vote.user_id == newVote.user_id)
}

export const selectTotalVotesQuestion = (state, question) => {
    return Object.values(state.entities.votes)
        .filter(vote => vote.votable_id == question.id &&
                        vote.votable_type == "Question")
        .reduce((vote1, vote2) => vote1.vote_direction + vote2.vote_direction, {vote_direction: 0});
}

export const selectVoteHashQuestions = (state) => {    
    debugger
    let voteHash = {};
    Object.values(state.entities.votes)
        .filter((vote) => vote.votable_type == "Question")
        .forEach((vote) => {
            voteHash[vote.votable_id] = (voteHash[vote.votable_id] || 0) + vote.vote_direction
        })
    return voteHash;
}

export const selectVoteHashAnswers = (state) => {    
    debugger
    let voteHash = {};
    Object.values(state.entities.votes)
        .filter((vote) => vote.votable_type == "Answer")
        .forEach((vote) => {
            voteHash[vote.votable_id] = (voteHash[vote.votable_id] || 0) + vote.vote_direction
        })
    return voteHash;
}