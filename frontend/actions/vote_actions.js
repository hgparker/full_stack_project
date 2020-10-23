import * as VoteUtil from "../util/vote_api_util";
import {selectEquivalentVotes} from "../selectors/votes_selectors";

export const RECEIVE_VOTE = "RECEIVE_VOTE";
export const REMOVE_VOTE = "REMOVE_VOTE";
export const RECEIVE_VOTE_ERRORS = "RECEIVE_VOTE_ERRORS";

export const receiveVote = (payload) => {
    return {
        type: RECEIVE_VOTE,
        payload
    }
}

export const removeVote = (voteId) => {
    return {
        type: REMOVE_VOTE,
        voteId
    };
}

export const receiveVoteErrors = (errors) => {
    return {
        type: RECEIVE_VOTE_ERRORS,
        errors
    };
}

export const clearVoteErrors = () => {
    return receiveVoteErrors([]);
}

export const postVote = (voteId, vote) => {
    return (dispatch) => {
        if (voteId)
            dispatch(removeVote(voteId));
        return VoteUtil.postVote(vote)
            .then(newVote => dispatch(receiveVote(newVote)))
            .fail(errors => dispatch(receiveVoteErrors(errors.responseJSON)));
    }
}

export const upvote = (voteId, votableId, votableType, userId) => {
    return postVote(voteId, {
        votable_id: votableId,
        votable_type: votableType,
        user_id: userId,
        vote_direction: 1    
    });
}

export const downvote = (voteId, votableId, votableType, userId) => {
    return postVote(voteId, {
        votable_id: votableId,
        votable_type: votableType,
        user_id: userId,
        vote_direction: -1    
    });
}