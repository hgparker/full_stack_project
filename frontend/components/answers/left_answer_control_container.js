import LeftAnswerControl from "./left_answer_control";
import {upvote, downvote} from '../../actions/vote_actions'
import {connect} from 'react-redux';
import { currentUser } from '../../selectors/auth_selectors';

const mSTP = (state, ownProps) => {
    return {   
        voteTotal: ownProps.voteTotal,
        voteId: ownProps.voteId,
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

export default connect(mSTP, mDTP)(LeftAnswerControl);