import {connect} from 'react-redux';
import QuestionForm from './question_form';
import {postQuestion, clearQuestionErrors} from '../../actions/question_actions';
import {questionErrors} from '../../selectors/errors_selectors'
import { currentUser } from '../../selectors/auth_selectors';

const mSTP = (state) => {
    return {
        errors: questionErrors(state),
        formType: "Post your question",
        question: {
            title: "",
            body: "",
            author_id: currentUser(state)
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