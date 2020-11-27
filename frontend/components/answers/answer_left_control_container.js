import {connect} from 'react-redux';
import AnswerLeftControl from "./answer_left_control";
import { currentUser } from '../../selectors/auth_selectors';
import {isUpvote, isDownvote} from "../../selectors/votes_selectors";
import {upvote, downvote} from '../../actions/vote_actions'


const mSTP = (state, ownProps) => {
    return {   
        voteTotal: ownProps.voteTotal,
        voteId: ownProps.voteId,
        upVoted: isUpvote(state, ownProps.voteId),
        downVoted: isDownvote(state, ownProps.voteId),
        votableId: ownProps.votableId,
        currentUserId: currentUser(state)
    };
}

const mDTP = (dispatch) => {
    return {
        upvote: (voteId, votableId, currentUserId) => dispatch(upvote(voteId, votableId, "Answer", currentUserId)),
        downvote: (voteId, votableId, currentUserId) => dispatch(downvote(voteId, votableId, "Answer", currentUserId))
    }
}

export default connect(mSTP, mDTP)(AnswerLeftControl);