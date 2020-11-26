import React from 'react';
import CommentControlContainer from "./comment_control_container";

const CommentItem = (props) => {
    let {comment} = props;
    return (
      <div>
        {comment.body}
        by 
        {comment.author_id}
          <CommentControlContainer
            commentAuthorId={comment.author_id}
            commentId={comment.id}
          />
      </div>
    );
}

export default CommentItem;