import React from 'react';
import {Link} from 'react-router-dom';
import QuestionInfoContainer from './question_info_container';

const QuestionIndexItem = (props) => {
    return (
        <div className="QuestionIndexItem">
            <QuestionInfoContainer
                voteTotal={props.voteTotal}
                voteId={props.voteId}
            />
            <Link to={`/questions/${props.question.id}`}>
                {props.question.title}
            </Link>
        </div>
    )
}

export default QuestionIndexItem;