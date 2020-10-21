import {connect} from 'react-redux';
import AnswerForm from './answer_form';
import {postAnswer, clearAnswerErrors} from '../../actions/answer_actions';
import {loggedIn, currentUser} from '../../selectors/auth_selectors';
import {answerErrors} from '../../selectors/errors_selectors';

const mSTP = (state, ownProps) => {
    return {
        errors: answerErrors(state),
        formType: "Post your answer",
        loggedIn: loggedIn(state),
        answer: {
            body: "",
            author_id: currentUser(state),
            question_id: ownProps.questionId
        }
    };
}

const mDTP = (dispatch) => {
    return {
        submit: (answer) => {
            return dispatch(postAnswer(answer))
        },
        clearAnswerErrors: () => {
            dispatch(clearAnswerErrors())
        }
    }
}

export default connect(mSTP, mDTP)(AnswerForm);