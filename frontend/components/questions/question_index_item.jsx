import React from 'react';
import {Link} from 'react-router-dom';
import QuestionInfoContainer from './question_info_container';
import QuestionIndexLowerControlContainer from "./question_index_lower_control_container";

const QuestionIndexItem = (props) => {
    let {voteId, voteTotal, question} = props;
    return (
        <div className="QuestionIndexItem">
            <QuestionInfoContainer
                voteTotal={voteTotal}
                voteId={voteId}
            />
            <div className="QII-Main">
                <Link to={`/questions/${question.id}`}>
                    {question.title}
                </Link>
                <QuestionIndexLowerControlContainer
                question={question}
            />
            </div>

        </div>
    )
}

export default QuestionIndexItem;