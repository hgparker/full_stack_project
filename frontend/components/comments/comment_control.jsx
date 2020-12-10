import React from 'react';
import {conditionalDelete, conditionalButton, conditionalClickableDiv} from '../conditional_buttons';

class CommentControl extends React.Component {
  render() {
    let {currentUserId, comment} = this.props;
    let {deleteComment, editComment} = this.props;
    return (
      <div className="CommentControl">
        {conditionalClickableDiv(comment.author_id == currentUserId, () => deleteComment(comment.id), "", "delete" )}
        {/* {conditionalDelete(comment.author_id == currentUserId, () => deleteComment(comment.id))} */}
        {conditionalClickableDiv(comment.author_id == currentUserId,
          () => editComment(comment.id, comment.answer_id), "", "edit your comment")}
        {/* {conditionalButton(comment.author_id == currentUserId,
          () => editComment(comment.id, comment.answer_id), "ButtonStyle1", "Edit your comment")} */}
      </div>
    );
  }
}

export default CommentControl;