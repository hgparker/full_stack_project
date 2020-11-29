import React from 'react';
import {conditionalDelete, conditionalButton} from '../conditional_buttons';

class CommentControl extends React.Component {
  render() {
    let {currentUserId, comment} = this.props;
    let {deleteComment, editComment} = this.props;
    return (
      <div className="CommentControl">
        {conditionalDelete(comment.author_id == currentUserId, () => deleteComment(comment.id))}
        {conditionalButton(comment.author_id == currentUserId,
          () => editComment(comment.id, comment.answer_id), "ButtonStyle1", "Edit your comment")}
      </div>
    );
  }
}

export default CommentControl;