import {connect} from 'react-redux';
import AnswerForm from './answer_form';
import {postAnswer, clearAnswerErrors} from '../../actions/answer_actions';
import {loggedIn} from '../../util/auth_api_util';

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.answer,
        formType: "Post your answer",
        loggedIn: loggedIn(state),
        answer: {
            body: "",
            author_id: state.session.currentUserId,
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