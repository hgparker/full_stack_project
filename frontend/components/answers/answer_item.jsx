import React from 'react';

const AnswerItem = (props) => {
    return (
        <div className = "AnswerItem">
            {props.answer.body}
            by
            {props.answer.author_id}
        </div>
    );
}

export default AnswerItem;