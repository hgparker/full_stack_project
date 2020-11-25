import React from 'react';

const CommentItem = (props) => {
    let {comment} = props;
    return (
      <div>
        {comment.body}
        by 
        {comment.author_id}
      </div>
    );
}

export default CommentItem;