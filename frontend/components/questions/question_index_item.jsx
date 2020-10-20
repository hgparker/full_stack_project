import React from 'react';
import {Link} from 'react-router-dom';

const QuestionIndexItem = (props) => {
    return (
        <div className="QuestionIndexItem">
            <Link to={`/questions/${props.question.id}`}>
                {props.question.title}
            </Link>
        </div>
    )
}

export default QuestionIndexItem;