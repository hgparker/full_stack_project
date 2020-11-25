import React from 'react';
import LeftAnswerControlContainer from './left_answer_control_container';
import LowerAnswerControlContainer from './answer_lower_control_container';
import { ANSWER_EDIT_MODE } from '../../actions/answer_actions';


{/* <List 
component={AnswerItem}
list={answers}
itemCallback={answer => ({
        answer,
        voteTotal: voteHash[answer.id],
        voteId: currentUserVoteHash[answer.id],
        votableId: answer.id,
        comments: commentHash[answer.id],
        sessionAnswer: sessionAnswer
        })
    }
/> */}


const AnswerItem = (props) => {
    
    let {voteTotal, voteId, votableId, sessionAnswer, comments, answer} = props;
    
    if (sessionAnswer.currentAnswerId == answer.id &&
        sessionAnswer.currentAnswerMode == ANSWER_EDIT_MODE)
        return null;
    
    return (
        <div className = "AnswerItem">
            <div>
                <LeftAnswerControlContainer
                    voteTotal={voteTotal}
                    voteId={voteId}
                    votableId={votableId}
                />
            </div>
            <div className = "AnswerRight">
                <div>
                {answer.body}
                by
                {answer.author_id}
                </div>
                <div>
                    <LowerAnswerControlContainer
                        answerAuthorId={answer.author_id}
                        answerId={answer.id}
                    />
                </div>
            </div>
        </div>
    );
}

export default AnswerItem;