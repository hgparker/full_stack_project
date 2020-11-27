import {connect} from 'react-redux';
import QuestionLeftControl from "./question_left_control";
import {upvote, downvote} from '../../actions/vote_actions'
import { currentUser } from '../../selectors/auth_selectors';
import {isUpvote, isDownvote} from "../../selectors/votes_selectors";

const mSTP = (state, ownProps) => {
    let voteId = ownProps.voteId
    return {   
        voteTotal: ownProps.voteTotal,
        voteId: voteId,
        votableId: ownProps.votableId,
        upVoted: isUpvote(state, voteId),
        downVoted: isDownvote(state, voteId),
        currentUserId: currentUser(state)
    };
}

const mDTP = (dispatch) => {
    return {
        upvote: (voteId, votableId, currentUserId) => dispatch(upvote(voteId, votableId, "Question", currentUserId)),
        downvote: (voteId, votableId, currentUserId) => dispatch(downvote(voteId, votableId, "Question", currentUserId))
    }
}



export default connect(mSTP, mDTP)(QuestionLeftControl);