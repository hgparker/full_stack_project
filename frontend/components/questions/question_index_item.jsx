import React from 'react';

const QuestionIndexItem = (props) => {
    return (
        <div>
            Question title: {props.question.title}
        </div>
    )
}

export default QuestionIndexItem;