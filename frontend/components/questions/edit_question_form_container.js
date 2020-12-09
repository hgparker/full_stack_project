import React from 'react';
import {connect} from 'react-redux';
import QuestionForm from './question_form';

import {currentUser} from "../../selectors/auth_selectors";
import {selectQuestion} from "../../selectors/questions_selectors";
import {questionErrors} from "../../selectors/errors_selectors";

import {updateQuestion, clearQuestionErrors, fetchQuestion} from '../../actions/question_actions';


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

class EditQuestion extends React.Component {

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
            <div className="EditQuestion">
                 <div className="EditQuestion-Title">
                    <div className="EditQuestion-TitleText">
                        Edit your previous question
                    </div>
                </div>
                <QuestionForm
                    {...this.props}
                />                
            </div>
        );
    }
}

export default connect(mSTP, mDTP)(EditQuestion);