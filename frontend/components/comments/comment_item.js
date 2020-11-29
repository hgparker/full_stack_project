import React from 'react';
import CommentControlContainer from "./comment_control_container";
import {COMMENT_EDIT_MODE} from "../../actions/comment_actions";

const CommentItem = (props) => {
    let {comment, userCommentId, sessionComment, commentUsername} = props;

    if (sessionComment.currentCommentId == comment.id 
      && sessionComment.currentCommentMode == COMMENT_EDIT_MODE)
      return null;

    return (
      <div>
        {comment.body} - <span className="CommentItem-UserInfo">
          {commentUsername}
        </span>
          <CommentControlContainer
            comment={comment}
            userCommentId={userCommentId}
          />
      </div>
    );
}

export default CommentItem;