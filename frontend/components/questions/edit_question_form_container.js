import React from 'react';
import {connect} from 'react-redux';
import {updateQuestion, clearQuestionErrors, fetchQuestion} from '../../actions/question_actions';
import QuestionForm from './question_form';
import { Redirect } from 'react-router-dom';
import {currentUser} from "../../selectors/auth_selectors";
import {selectQuestion} from "../../selectors/questions_selectors";

const mSTP = (state, ownProps) => {
    return {
        currentUserId: currentUser(state),
        formType: "Edit your question",
        errors: questionErrors(state),
        question: selectQuestion(state, ownProps.match.params.questionId)
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
        if (this.props.question.author_id != this.props.currentUserId)
            this.props.history.push(`/questions`);
        return (
            <QuestionForm
                {...this.props}
            />
        );
    }
}

export default connect(mSTP, mDTP)(EditPostForm);