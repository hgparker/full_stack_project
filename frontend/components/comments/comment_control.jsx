import React from 'react';
import {conditionalDelete, conditionalButton} from '../conditional_buttons';

class CommentControl extends React.Component {
  render() {
    let {currentUserId, commentAuthorId, commentId} = this.props;
    let {deleteComment, editComment} = this.props;
    return (
      <div>
        This is comment control
        {conditionalDelete(commentAuthorId == currentUserId, () => deleteComment(commentId))}
        {conditionalButton(commentAuthorId == currentUserId,
          () => editComment(commendId), "ButtonStyle1", "Edit your comment")}
      </div>
    );
  }
}

export default CommentControl;