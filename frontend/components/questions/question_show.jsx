import React from 'react';
import {Link} from 'react-router-dom';

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
                    <button>
                        Edit
                    </button>
                </Link>;
        
            return (
                <div>
                    Title: {this.props.question.title} 
                    Body: {this.props.question.body} 
                    Author id: {this.props.question.author_id} 
                    {EditButton}
                </div>
            );
        }
    }
}

export default QuestionShow;