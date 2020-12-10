import React from 'react';
import {conditionalDelete, conditionalButton, conditionalClickableDiv} from '../conditional_buttons';
import {COMMENT_VIEW_MODE, COMMENT_EDIT_MODE, COMMENT_POST_MODE} from "../../actions/comment_actions";
import ReactTimeAgo from "react-time-ago";

class AnswerLowerControl extends React.Component {
    render() {
        let {answer, currentUserId, deleteAnswer, sessionComment, hasCommented, answerUsername} = this.props;
        let {editAnswer, addComment} = this.props
        return (
            <div className="AnswerLowerControl">
                <div className="ALC-ControlElements">

                    {conditionalClickableDiv(answer.author_id == currentUserId, () => deleteAnswer(answer.id), "", "delete")}
                    {conditionalClickableDiv(answer.author_id == currentUserId,
                        () => editAnswer(answer.id), "", "edit your answer")}
                    {conditionalClickableDiv(
                        ((sessionComment.currentCommentMode == COMMENT_EDIT_MODE
                            && sessionComment.currentAnswerId != answer.id)
                        || (sessionComment.currentCommentMode == COMMENT_POST_MODE
                            && sessionComment.currentAnswerId != answer.id)
                        || sessionComment.currentCommentMode == COMMENT_VIEW_MODE)
                        && !hasCommented,
                        () => addComment(answer.id), "", "add a comment"
                    )}

                    {/* {conditionalDelete(answer.author_id == currentUserId, () => deleteAnswer(answer.id))} */}
                    {/* {conditionalButton(answer.author_id == currentUserId,
                        () => editAnswer(answer.id), "ButtonStyle1", "Edit your answer"
                    )} */}
                    {/* {conditionalButton(
                        ((sessionComment.currentCommentMode == COMMENT_EDIT_MODE
                            && sessionComment.currentAnswerId != answer.id)
                        || (sessionComment.currentCommentMode == COMMENT_POST_MODE
                            && sessionComment.currentAnswerId != answer.id)
                        || sessionComment.currentCommentMode == COMMENT_VIEW_MODE)
                        && !hasCommented,
                        () => addComment(answer.id), "ButtonStyle1", "Add a comment"    
                    )} */}
                </div>
                <div className="ALC-UserInfo">
                    answered <ReactTimeAgo date={answer.created_at} locale="en-US"/> by {answerUsername}
                </div>
            </div>
        );
    }
}




export default AnswerLowerControl;