import React from 'react';
import {connect} from 'react-redux';
import {updateQuestion, clearQuestionErrors, fetchQuestion} from '../../actions/question_actions';
import QuestionForm from './question_form';
import { Redirect } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.currentUserId,
        formType: "Edit your question",
        errors: state.errors.question,
        question: state.entities.questions[ownProps.match.params.questionId]
    };
}

const mDTP = (dispatch) => {
    return {
        submit: (question) => {
            return dispatch(updateQuestion(question))
        },
        fetchPost: (questionId) => {
            return dispatch(fetchQuestion(questionId))
        },
        clearQuestionErrors: () => {
            return dispatch(clearQuestionErrors())
        }
    }
}

class EditPostForm extends React.Component {

    componentDidMount() {
        this.props.clearQuestionErrors();
        this.props.fetchPost(this.props.match.params.questionId);
    }
  
    render() {
        if (!this.props.question)
            return null
        if (this.props.question.author_id != this.props.currentUserId) {
            this.props.history.push(`/questions`);
            console.log("got here");
        }
        return (
            <QuestionForm
                {...this.props}
            />
        );
    }
}

export default connect(mSTP, mDTP)(EditPostForm);