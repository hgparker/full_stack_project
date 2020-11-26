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
      answerId: ownProps.answerId
    };
}

const mDTP = (dispatch) => {
    return {
      deleteComment: (commentId) => dispatch(deleteComment(commentId)),
      editComment: (commentId, answerId) => dispatch(enterCommentEditMode(commentId, answerId))
    }
}

export default connect(mSTP, mDTP)(CommentControl);