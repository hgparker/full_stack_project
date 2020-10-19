import {connect} from 'react-redux';
import QuestionForm from './question_form';
import {postQuestion, clearQuestionErrors} from '../../actions/question_actions';

const mSTP = (state) => {
    return {
        errors: state.errors.question,
        formType: "Post your question",
        question: {
            title: "",
            body: "",
            author_id: state.session.currentUserId
        }
    };
}

const mDTP = (dispatch) => {
    return {
        submit: (question) => {
            return dispatch(postQuestion(question))
        },
        clearQuestionErrors: () => {
            dispatch(clearQuestionErrors())
        }
    }
}

export default connect(mSTP, mDTP)(QuestionForm);