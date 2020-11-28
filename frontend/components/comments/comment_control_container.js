import CommentControl from "./comment_control"
import {connect} from 'react-redux';
import { currentUser, loggedIn } from '../../selectors/auth_selectors';
import {selectUsername} from "../../selectors/user_selectors";
import {deleteComment, enterCommentEditMode} from "../../actions/comment_actions";

const mSTP = (state, ownProps) => {
    let commentAuthorId = ownProps.commentAuthorId;
    return {   
      currentUserId: currentUser(state),
      commentAuthorId: commentAuthorId,
      commentId: ownProps.commentId,
      loggedIn: loggedIn(state),
      answerId: ownProps.answerId,
      commentUsername: selectUsername(state, commentAuthorId)
    };
}

const mDTP = (dispatch) => {
    return {
      deleteComment: (commentId) => dispatch(deleteComment(commentId)),
      editComment: (commentId, answerId) => dispatch(enterCommentEditMode(commentId, answerId))
    }
}

export default connect(mSTP, mDTP)(CommentControl);