import React from 'react';
import {conditionalDelete, conditionalButton} from '../conditional_buttons';
import {COMMENT_VIEW_MODE} from "../../actions/comment_actions";

class LowerAnswerControl extends React.Component {
    render() {
        let {answerId, answerAuthorId, currentUserId, deleteAnswer, loggedIn, sessionComment} = this.props;
        let {editAnswer, addComment} = this.props
        return (
            <div className="AnswerSecondaryControl">
                {conditionalDelete(answerAuthorId == currentUserId, () => deleteAnswer(answerId))}
                {conditionalButton(answerAuthorId == currentUserId,
                    () => editAnswer(answerId), "ButtonStyle1", "Edit your answer"
                )}
                {conditionalButton(sessionComment.currentCommentMode == COMMENT_VIEW_MODE,
                    addComment, "ButtonStyle1", "Add a comment"    
                )}
            </div>
        );
    }
}

export default LowerAnswerControl;