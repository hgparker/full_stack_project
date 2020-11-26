import CommentControl from "./comment_control"
import {connect} from 'react-redux';
import { currentUser, loggedIn } from '../../selectors/auth_selectors';
import {deleteComment, enterCommentEditMode} from "../../actions/comment_actions";

const mSTP = (state, ownProps) => {
    return {   
      currentUserId: currentUser(state),
      commentAuthorId: ownProps.commentAuthorId,
      commentId: ownProps.commentId,
      loggedIn: loggedIn(state),
    };
}

const mDTP = (dispatch) => {
    return {
      deleteComment: (commentId) => dispatch(deleteComment(commentId)),
      editComment: (commentId) => dispatch(enterCommentEditMode(commentId))
    }
}

export default connect(mSTP, mDTP)(CommentControl);