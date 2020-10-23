import QuestionControl from "./question_control";
import {connect} from 'react-redux';
import {upvote, downvote} from '../../actions/vote_actions'
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
        upvote: (voteId, votableId, currentUserId) => dispatch(upvote(voteId, votableId, "Question", currentUserId)),
        downvote: (voteId, votableId, currentUserId) => dispatch(downvote(voteId, votableId, "Question", currentUserId))
    }
}



export default connect(mSTP, mDTP)(QuestionControl);