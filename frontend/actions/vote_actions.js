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

// this won't work
// new plan : fetch equivalent vote as part map state to props
// dispatch -> remove equivalent and add new
export const postVote = (vote) => {
    return (dispatch) => {
        selectEquivalentVotes(vote).forEach(
            eVote => dispatch(removeVote(eVote.id)));
        return VoteUtil.postVote(vote)
            .then(newVote => dispatch(receiveVote(newVote)))
            .fail(errors => dispatch(receiveVoteErrors(errors.responseJSON)));
    }
}