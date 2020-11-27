import React from 'react';
import {conditionalDelete, conditionalButton} from '../conditional_buttons';

class CommentControl extends React.Component {
  render() {
    let {currentUserId, commentAuthorId, commentId, answerId} = this.props;
    let {deleteComment, editComment} = this.props;
    return (
      <div>
        {conditionalDelete(commentAuthorId == currentUserId, () => deleteComment(commentId))}
        {conditionalButton(commentAuthorId == currentUserId,
          () => editComment(commentId, answerId), "ButtonStyle1", "Edit your comment")}
      </div>
    );
  }
}

export default CommentControl;