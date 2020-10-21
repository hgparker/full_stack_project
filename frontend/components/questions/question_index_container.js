import {connect} from 'react-redux';
import QuestionIndex from './question_index';
import {fetchQuestions} from "../../actions/question_actions";
import { loggedIn } from '../../selectors/auth_selectors';
import {selectQuestions} from '../../selectors/questions_selectors';

const mSTP = (state) => {
    return {
        loggedIn: loggedIn(state),
        questions: selectQuestions(state)
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