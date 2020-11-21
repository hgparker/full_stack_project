import React from 'react';
import AnswerControlContainer from './answer_control_container';
import AnswerSecondaryControlContainer from './answer_secondary_control_container';

const AnswerItem = (props) => {
    return (
        <div className = "AnswerItem">
            <div>
                <AnswerControlContainer
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
                    <AnswerSecondaryControlContainer
                        answerAuthorId={props.answer.author_id}
                        answerId={props.answer.id}
                    />
                </div>
            </div>
        </div>
    );
}

export default AnswerItem;