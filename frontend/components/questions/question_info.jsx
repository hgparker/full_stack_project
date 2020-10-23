import React from 'react';

const QuestionInfo = (props) => {
    return (
        <div className="QuestionInfo">
            <div className="VoteColumn">
                <div> {props.voteTotal || 0} </div>
                <div> votes </div>
            </div>
        </div>
    );
}


export default QuestionInfo