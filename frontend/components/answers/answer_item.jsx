import React from 'react';
import LeftAnswerControlContainer from './left_answer_control_container';
import LowerAnswerControlContainer from './answer_lower_control_container';

const AnswerItem = (props) => {
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