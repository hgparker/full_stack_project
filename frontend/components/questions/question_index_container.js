import {connect} from 'react-redux';
import QuestionIndex from './question_index';
import {fetchQuestions} from "../../actions/question_actions";
import { loggedIn } from '../../util/auth_api_util';

const mSTP = (state) => {
    return {
        loggedIn: loggedIn(state),
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