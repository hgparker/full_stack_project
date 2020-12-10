import React from 'react';
import CommentControlContainer from "./comment_control_container";
import {COMMENT_EDIT_MODE} from "../../actions/comment_actions";
import ReactTimeAgo from "react-time-ago";

const CommentItem = (props) => {
    let {comment, userCommentId, sessionComment, commentUsername} = props;

    if (sessionComment.currentCommentId == comment.id 
      && sessionComment.currentCommentMode == COMMENT_EDIT_MODE)
      return null;

    return (
      <div className="CommentItem">
        {comment.body} - <span className="CommentItem-UserInfo">
          {commentUsername} <ReactTimeAgo date={comment.created_at} locale="en-US"/>
        </span>
          <CommentControlContainer
            comment={comment}
            userCommentId={userCommentId}
          />
      </div>
    );
}

export default CommentItem;