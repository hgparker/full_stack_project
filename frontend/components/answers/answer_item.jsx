import React from 'react';

const AnswerItem = (props) => {
    return (
        <div className = "AnswerItem">
            {props.voteTotal}
            {props.answer.body}
            by
            {props.answer.author_id}
        </div>
    );
}

export default AnswerItem;