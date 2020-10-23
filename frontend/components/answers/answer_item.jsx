import React from 'react';
import AnswerControlContainer from './answer_control_container';

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
            <div>
                {props.answer.body}
                by
                {props.answer.author_id}
            </div>
        </div>
    );
}

export default AnswerItem;