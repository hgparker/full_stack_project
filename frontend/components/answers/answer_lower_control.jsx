import React from 'react';
import {conditionalDelete, conditionalButton} from '../conditional_buttons';
import {COMMENT_VIEW_MODE, COMMENT_LOGIN_MODE, COMMENT_EDIT_MODE, COMMENT_POST_MODE} from "../../actions/comment_actions";
import ReactTimeAgo from "react-time-ago";

// answer: ownProps.answer,
// currentUserId: currentUser(state),
// sessionComment: selectSessionComment(state),
// hasCommented: !!ownProps.userCommentId,
// answerUsername: selectUsername(state, answerAuthorId)


class AnswerLowerControl extends React.Component {
    render() {
        let {answer, currentUserId, deleteAnswer, sessionComment, hasCommented, answerUsername} = this.props;
        let {editAnswer, addComment} = this.props
        return (
            <div className="AnswerLowerControl">
                <div className="ALC-ControlElements">
                    {conditionalDelete(answer.author_id == currentUserId, () => deleteAnswer(answerId))}
                    {conditionalButton(answer.author_id == currentUserId,
                        () => editAnswer(answer.id), "ButtonStyle1", "Edit your answer"
                    )}
                    {conditionalButton(
                        ((sessionComment.currentCommentMode == COMMENT_EDIT_MODE
                            && sessionComment.currentAnswerId != answer.id)
                        || (sessionComment.currentCommentMode == COMMENT_POST_MODE
                            && sessionComment.currentAnswerId != answer.id)
                        || sessionComment.currentCommentMode == COMMENT_VIEW_MODE)
                        && !hasCommented,
                        () => addComment(answer.id), "ButtonStyle1", "Add a comment"    
                    )}
                </div>
                <div className="ALC-UserInfo">
                    <ReactTimeAgo date={answer.created_at} locale="en-US"/> &nbsp;by {answerUsername}
                </div>
            </div>
        );
    }
}




export default AnswerLowerControl;