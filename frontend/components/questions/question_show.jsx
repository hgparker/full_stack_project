import React from 'react';
import {Link} from 'react-router-dom';
import List from '../list';
import AnswerItem from '../answers/answer_item'

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
            const EditButton = this.props.currentUserId !== this.props.question.author_id ? null :
                <Link
                    to={`/questions/${this.props.question.id}/edit`}
                >
                    <button
                        className="ButtonStyle1"
                    >
                        Edit
                    </button>
                </Link>;

            const DeleteButton = this.props.currentUserId !== this.props.question.author_id ? null :
                <button
                    className="ButtonStyle2"
                    onClick = { () => {
                        this.props.deleteQuestion(this.props.question.id)
                            .then(() => this.props.history.push('/questions'))
                }}>
                    Delete
                </button>

            const NewQuestionButton = !this.props.loggedIn ? null : (
                <Link to="/questions/ask">
                    <button className="ButtonStyle1">
                        Ask Question
                    </button>
                </Link>);
    
            return (
                <div className="QuestionShowBox1">
                    <div className="QuestionShowBox2">
                        <div className="LeftQuestionShowBox2">
                            {this.props.question.title} 
                        </div>
                        <div className="RightQuestionShowBox2">
                            {EditButton}
                            {DeleteButton}
                            {NewQuestionButton}
                        </div>
                    </div>
                    <div className="QuestionShowBox3">
                        {this.props.question.body} 
                    </div>

                    <List 
                    component={AnswerItem}
                    list={this.props.answers}
                    itemCallback={(answer) => ({answer})}
                    />

                </div>
            );
        }
    }
}

export default QuestionShow;