import React from 'react';
import AnswerLeftControlContainer from './answer_left_control_container';
import AnswerLowerControlContainer from './answer_lower_control_container';
import { ANSWER_EDIT_MODE } from '../../actions/answer_actions';
import List from "../list";
import CommentItemContainer from "../comments/comment_item_container";
import CommentFormContainer from "../comments/comment_form_container";
import EditCommentFormContainer from "../comments/edit_comment_form_container";
import { COMMENT_POST_MODE, COMMENT_EDIT_MODE } from '../../actions/comment_actions';

const AnswerItem = (props) => {
    
    let {voteTotal, voteId, votableId, sessionAnswer, comments, answer, sessionComment, userCommentId} = props;
    
    if (sessionAnswer.currentAnswerId == answer.id &&
        sessionAnswer.currentAnswerMode == ANSWER_EDIT_MODE)
        return null;
    
    return (
        <div className = "AnswerItem">
            <div>
                <AnswerLeftControlContainer
                    voteTotal={voteTotal}
                    voteId={voteId}
                    votableId={votableId}
                />
            </div>
            <div className = "AnswerItem-RightAnswerElements">
                {answer.body}
                <AnswerLowerControlContainer
                    answer={answer}
                    userCommentId={userCommentId}
                />
                <List
                    component={CommentItemContainer}
                    list={comments}
                    itemCallback={  
                        (comment) => ({
                            comment,
                            userCommentId: userCommentId,
                        })
                    }                
                />

                {sessionComment.currentAnswerId == answer.id && sessionComment.currentCommentMode == COMMENT_POST_MODE ?
                    <CommentFormContainer
                        answerId={answer.id}
                    /> : null}

                {sessionComment.currentAnswerId == answer.id && sessionComment.currentCommentMode == COMMENT_EDIT_MODE ?
                    <EditCommentFormContainer
                        commentId={sessionComment.currentCommentId}
                    /> : null}
            </div>
        </div>
    );
}

export default AnswerItem;