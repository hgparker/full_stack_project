import React from 'react';
import {Link} from 'react-router-dom';
import List from '../list';
import AnswerItem from '../answers/answer_item'
import AnswerFormContainer from '../answers/answer_form_container';
import {conditionalNewQuestion, conditionalDelete, conditionalButton} from '../conditional_buttons';
import QuestionControlContainer from './question_control_container';

class QuestionShow extends React.Component {
    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId);
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
                            votableId: answer.id
                            })
                        }
                    />
                    
                    <AnswerFormContainer questionId={this.props.question.id}/>

                </div>
            );
        }
    }
}

export default QuestionShow;