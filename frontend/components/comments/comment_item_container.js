import {connect} from 'react-redux';
import CommentItem from "./comment_item";

import {selectSessionComment} from "../../selectors/comments_selectors";
import {selectUsername} from "../../selectors/user_selectors"

const mSTP = (state, ownProps) => {
  return {
    comment: ownProps.comment,
    sessionComment: selectSessionComment(state),
    userCommentId: ownProps.userCommentId,
    commentUsername: selectUsername(state, ownProps.comment.author_id)
  }
}


export default connect(mSTP, null)(CommentItem);