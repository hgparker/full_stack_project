import {connect} from 'react-redux';
import QuestionIndex from './question_index';
import {fetchQuestions} from "../../actions/question_actions";

// import {login, clearAuthErrors, RECEIVE_ERRORS} from '../../actions/auth_actions';

const mSTP = (state) => {
    return {
        questions: Object.values(state.entities.questions)
    };
}

const mDTP = (dispatch) => {
    return {
        fetchQuestions: () => {
            return dispatch(fetchQuestions())
        }
    }
}

export default connect(mSTP, mDTP)(QuestionIndex);