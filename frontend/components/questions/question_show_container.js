import {connect} from 'react-redux';
import QuestionShow from './question_show';
import {fetchQuestion, deleteQuestion} from "../../actions/question_actions";
import {loggedIn} from '../../util/auth_api_util';

const mSTP = (state, ownProps) => {
    return {    
        question: state.entities.questions[ownProps.match.params.questionId],
        currentUserId: state.session.currentUserId,
        loggedIn: loggedIn(state)
    };
}

const mDTP = (dispatch) => {
    return {
        fetchQuestion: (questionId) => {
            return dispatch(fetchQuestion(questionId))
        },
        deleteQuestion: (questionId) => {
            return dispatch(deleteQuestion(questionId))
        },
    }
}

export default connect(mSTP, mDTP)(QuestionShow );