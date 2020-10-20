import React from 'react';

const AnswerItem = (props) => {
    return (
        <div>
            {props.answer.body}
            {props.answer.author_id}
        </div>
    );
}

export default AnswerItem;