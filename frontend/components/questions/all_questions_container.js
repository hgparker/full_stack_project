import {connect} from 'react-redux';
import AllQuestions from './all_questions';
import {fetchQuestions} from "../../actions/question_actions";
import {loggedIn} from '../../selectors/auth_selectors';

const mSTP = (state) => {
    return {
        loggedIn: loggedIn(state),
    };
}

const mDTP = (dispatch) => {
    return {
        fetchQuestions: () => {
            return dispatch(fetchQuestions())
        }
    }
}

export default connect(mSTP, mDTP)(AllQuestions);