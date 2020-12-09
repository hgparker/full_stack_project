import React from 'react';
import {Link} from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';

import List from '../list';
import {conditionalNewQuestion, conditionalDelete, conditionalButton} from '../conditional_buttons';

import QuestionLeftControlContainer from './question_left_control_container';
import QuestionLowerControlContainer from "./question_lower_control_container";

import AnswerFormContainer from '../answers/answer_form_container';
import AnswerItem from '../answers/answer_item'
import EditAnswerFormContainer from "../answers/edit_answer_form_container";
import {ANSWER_POST_MODE, ANSWER_EDIT_MODE, ANSWER_LOGIN_MODE} from "../../actions/answer_actions";

class QuestionShow extends React.Component {
    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId);
        if (!this.props.loggedIn)
            this.props.enterAnswerLoginMode();
        else if (this.props.hasAnswered)
            this.props.enterAnswerViewMode();
        else
            this.props.enterAnswerPostMode();
        
        if (!this.props.loggedIn)
            this.props.enterCommentLoginMode();
        else
            this.props.enterCommentViewMode();
    }

    render() {
        let {question, currentUserId, loggedIn, voteTotal, voteHash, currentUserVoteHash,
            answers, commentHash, userComments, sessionAnswer, sessionComment} = this.props;
        let {deleteQuestion} = this.props;
       
        if (!question)
            return (
                <h1> Loading... </h1>
            )
        else {
            return (
                <div className="QuestionShow-MainColumn">
                    <div className="QuestionShow-TitleBox">
                        <div className="QuestionShow-TitleRow">
                            <div className="LeftQuestionShowBox2">
                                {question.title} 
                            </div>
                            <div className="RightQuestionShowBox2">
                                {conditionalButton(currentUserId === question.author_id,
                            () => this.props.history.push(`/questions/${question.id}/edit`),
                            "ButtonStyle1", "Edit")}
                                {conditionalDelete(currentUserId === question.author_id, 
                                    () => {
                                        deleteQuestion(question.id)
                                            .then(() => this.props.history.push('/questions'))
                                })}
                                {conditionalNewQuestion(loggedIn)}
                            </div>
                        </div>
                        <div className="QuestionShow-TitleInfo">
                            Asked&nbsp;
                            <ReactTimeAgo date={question.created_at} locale="en-US"/>
                        </div>
                    </div>
                    <div className="QuestionShow-QuestionElements">
                        <QuestionLeftControlContainer
                            voteTotal={voteTotal}
                            voteId={currentUserVoteHash[question.id]}
                            votableId={question.id}
                        />
                        <div className="QuestionShow-RightQuestionElements">
                        {question.body}
                        <QuestionLowerControlContainer
                            userId={question.author_id}
                        />
                        </div>
                    </div>

                    <div className="QuestionShowBox4">
                        Answers:
                    </div>
                        
                    <List 
                    component={AnswerItem}
                    list={answers}
                    itemCallback={answer => ({
                            answer,
                            voteTotal: voteHash[answer.id],
                            voteId: currentUserVoteHash[answer.id],
                            votableId: answer.id,
                            comments: commentHash[answer.id],
                            sessionAnswer: sessionAnswer,
                            userCommentId: userComments[answer.id],
                            sessionComment: sessionComment
                            })
                        }
                    />
                    
                    {sessionAnswer.currentAnswerMode == ANSWER_POST_MODE ?
                        (<AnswerFormContainer questionId={question.id}/>) :null}
                    {sessionAnswer.currentAnswerMode == ANSWER_EDIT_MODE ?
                        (<EditAnswerFormContainer answerId={sessionAnswer.currentAnswerId}/>) : null}
                    {sessionAnswer.currentAnswerMode == ANSWER_LOGIN_MODE ?
                        (
                            <div className="AnswerAlternative">
                                <Link to='/login'>
                                Log in
                                </Link> or <Link to='/signup'>sign up</Link> to post your answer</div>
                        ) : null}
                    
                </div>
            );
        }
    }
}

export default QuestionShow;