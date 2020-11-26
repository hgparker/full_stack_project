import React from 'react';
import CommentControlContainer from "./comment_control_container";
import {COMMENT_EDIT_MODE} from "../../actions/comment_actions";

const CommentItem = (props) => {
    let {comment, userComment, sessionComment} = props;

    if (sessionComment.currentCommentId == comment.id 
      && sessionComment.currentCommentMode == COMMENT_EDIT_MODE)
      return null;

    return (
      <div>
        {comment.body}
        by 
        {comment.author_id}
          <CommentControlContainer
            commentAuthorId={comment.author_id}
            commentId={comment.id}
            userComment={userComment}
          />
      </div>
    );
}

export default CommentItem;