import React from 'react';
import AnswerLeftControlContainer from './answer_left_control_container';
import AnswerLowerControlContainer from './answer_lower_control_container';
import { ANSWER_EDIT_MODE } from '../../actions/answer_actions';
import List from "../list";
import CommentItem from "../comments/comment_item";
import CommentFormContainer from "../comments/comment_form_container";

const AnswerItem = (props) => {
    
    let {voteTotal, voteId, votableId, sessionAnswer, comments, answer} = props;
    
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
            <div className = "AnswerRight">
                <div>
                {answer.body}
                by
                {answer.author_id}
                </div>
                <div>
                    <AnswerLowerControlContainer
                        answerAuthorId={answer.author_id}
                        answerId={answer.id}
                    />
                </div>

                <div>
                    Answer comments go here...
                    <List
                        component={CommentItem}
                        list={comments}
                        itemCallback={
                            comment => ({
                                comment
                            })
                        }                
                    
                    />
                </div>

                <CommentFormContainer/>
            </div>
        </div>
    );
}

export default AnswerItem;