import {connect} from 'react-redux';
import AllQuestions from './all_questions';

import {loggedIn} from '../../selectors/auth_selectors';
import {selectQuestionNumber} from "../../selectors/questions_selectors";

import {fetchQuestions} from "../../actions/question_actions";

const mSTP = (state) => {
    return {
        loggedIn: loggedIn(state),
        numResults: selectQuestionNumber(state)
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