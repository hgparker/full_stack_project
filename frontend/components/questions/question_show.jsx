import React from 'react';
import {Link} from 'react-router-dom';
import List from '../list';
import AnswerItem from '../answers/answer_item'
import AnswerFormContainer from '../answers/answer_form_container';
import EditAnswerFormContainer from "../answers/edit_answer_form_container";
import {conditionalNewQuestion, conditionalDelete, conditionalButton} from '../conditional_buttons';
import QuestionControlContainer from './question_control_container';
import {enterAnswerLoginMode, enterAnswerViewMode, enterAnswerPostMode, ANSWER_POST_MODE, ANSWER_EDIT_MODE, ANSWER_LOGIN_MODE} from "../../actions/answer_actions";

class QuestionShow extends React.Component {
    componentDidMount() {
        // debugger;
        this.props.fetchQuestion(this.props.match.params.questionId);
        if (!this.props.loggedIn)
            this.props.enterAnswerLoginMode();
        else if (this.props.hasAnswered)
            this.props.enterAnswerViewMode();
        else
            this.props.enterAnswerPostMode();
    }

    render() {
        if (!this.props.question)
            return (
                <h1> Loading... </h1>
            )
        else {

            return (
                <div className="QuestionShowBox1">
                    <div className="QuestionShowBox2">
                        <div className="LeftQuestionShowBox2">
                            {this.props.question.title} 
                        </div>
                        <div className="RightQuestionShowBox2">
                            {conditionalButton(this.props.currentUserId === this.props.question.author_id,
                        () => this.props.history.push(`/questions/${this.props.question.id}/edit`),
                        "ButtonStyle1", "Edit")}
                            {conditionalDelete(this.props.currentUserId === this.props.question.author_id, 
                                () => {
                                    this.props.deleteQuestion(this.props.question.id)
                                        .then(() => this.props.history.push('/questions'))
                            })}
                            {conditionalNewQuestion(this.props.loggedIn)}
                        </div>
                    </div>
                    <div className="QuestionShowBox3">
                        <QuestionControlContainer
                            voteTotal={this.props.voteTotal}
                            voteId={this.props.currentUserVoteHash[this.props.question.id]}
                            votableId={this.props.question.id}
                            />
                        {this.props.question.body} 
                    </div>
                        <div className="QuestionShowBox4">
                            Answers:
                        </div>
                        
                    <List 
                    component={AnswerItem}
                    list={this.props.answers}
                    itemCallback={answer => ({
                            answer,
                            voteTotal: this.props.voteHash[answer.id],
                            voteId: this.props.currentUserVoteHash[answer.id],
                            votableId: answer.id,
                            sessionAnswer: this.props.sessionAnswer
                            })
                        }
                    />
                    
                    {this.props.sessionAnswer.currentAnswerMode == ANSWER_POST_MODE ?
                        (<AnswerFormContainer questionId={this.props.question.id}/>) :null}
                    {this.props.sessionAnswer.currentAnswerMode == ANSWER_EDIT_MODE ?
                        (<EditAnswerFormContainer answerId={this.props.sessionAnswer.currentAnswerId}/>) : null}
                    {this.props.sessionAnswer.currentAnswerMode == ANSWER_LOGIN_MODE ?
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