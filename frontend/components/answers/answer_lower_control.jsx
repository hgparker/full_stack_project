import React from 'react';
import {conditionalDelete, conditionalButton} from '../conditional_buttons';
import {COMMENT_VIEW_MODE, COMMENT_LOGIN_MODE, COMMENT_EDIT_MODE, COMMENT_POST_MODE} from "../../actions/comment_actions";

class AnswerLowerControl extends React.Component {
    render() {
        let {answerId, answerAuthorId, currentUserId, deleteAnswer, sessionComment, hasCommented, answerUsername} = this.props;
        let {editAnswer, addComment} = this.props
        return (
            <div className="AnswerLowerControl">
                <div className="ALC-ControlElements">
                {conditionalDelete(answerAuthorId == currentUserId, () => deleteAnswer(answerId))}
                {conditionalButton(answerAuthorId == currentUserId,
                    () => editAnswer(answerId), "ButtonStyle1", "Edit your answer"
                )}
                {conditionalButton(
                    ((sessionComment.currentCommentMode == COMMENT_EDIT_MODE
                        && sessionComment.currentAnswerId != answerId)
                    || (sessionComment.currentCommentMode == COMMENT_POST_MODE
                        && sessionComment.currentAnswerId != answerId)
                    || sessionComment.currentCommentMode == COMMENT_VIEW_MODE)
                    && !hasCommented,
                    () => addComment(answerId), "ButtonStyle1", "Add a comment"    
                )}
                </div>
                <div className="ALC-UserInfo">
                    {answerUsername}
                </div>
            </div>
        );
    }
}

export default AnswerLowerControl;