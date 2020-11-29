import CommentControl from "./comment_control"
import {connect} from 'react-redux';
import { currentUser, loggedIn } from '../../selectors/auth_selectors';
import {deleteComment, enterCommentEditMode} from "../../actions/comment_actions";

const mSTP = (state, ownProps) => {
    return {   
      currentUserId: currentUser(state),
      comment: ownProps.comment,
      loggedIn: loggedIn(state),
    };
}

const mDTP = (dispatch) => {
    return {
      deleteComment: (commentId) => dispatch(deleteComment(commentId)),
      editComment: (commentId, answerId) => dispatch(enterCommentEditMode(commentId, answerId))
    }
}

export default connect(mSTP, mDTP)(CommentControl);