import React from 'react';
import CommentControlContainer from "./comment_control_container";

const CommentItem = (props) => {
    let {comment} = props;
    return (
      <div>
        {comment.body}
        by 
        {comment.author_id}
          <CommentControlContainer/>
      </div>
    );
}

export default CommentItem;