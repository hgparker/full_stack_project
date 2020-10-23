import { currentUser } from "./auth_selectors";

export const selectEquivalentVoteHash = (state, currentUserId) => {
    let voteHash = {};
    if (currentUserId == null)
        return voteHash;
    Object.values(state.entities.votes)
        .filter(vote => vote.user_id == currentUserId)
        .forEach((vote) => {
            voteHash[vote.votable_id] = vote.id
        });
    return voteHash;
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