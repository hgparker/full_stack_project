import React from 'react';
import LeftAnswerControlContainer from './left_answer_control_container';
import LowerAnswerControlContainer from './answer_lower_control_container';
import { ANSWER_EDIT_MODE } from '../../actions/answer_actions';

// voteTotal: this.props.voteHash[answer.id],
// voteId: this.props.currentUserVoteHash[answer.id],
// votableId: answer.id,
// sessionAnswer: this.props.sessionAnswer



const AnswerItem = (props) => {
    if (props.sessionAnswer.currentAnswerId == props.answer.id &&
        props.sessionAnswer.currentAnswerMode == ANSWER_EDIT_MODE)
        return null;
    
    return (
        <div className = "AnswerItem">
            <div>
                <LeftAnswerControlContainer
                    voteTotal={props.voteTotal}
                    voteId={props.voteId}
                    votableId={props.votableId}
                />
            </div>
            <div className = "AnswerRight">
                <div>
                {props.answer.body}
                by
                {props.answer.author_id}
                </div>
                <div>
                    <LowerAnswerControlContainer
                        answerAuthorId={props.answer.author_id}
                        answerId={props.answer.id}
                    />
                </div>
            </div>
        </div>
    );
}

export default AnswerItem;