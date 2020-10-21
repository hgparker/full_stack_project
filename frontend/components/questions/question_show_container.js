import {connect} from 'react-redux';
import QuestionShow from './question_show';
import {fetchQuestion, deleteQuestion} from "../../actions/question_actions";
import {selectAnswers} from '../../selectors/answers_selectors';
import {selectQuestion} from '../../selectors/questions_selectors';
import { currentUser, loggedIn } from '../../selectors/auth_selectors';

const mSTP = (state, ownProps) => {
    let questionId = ownProps.match.params.questionId;
    return {    
        question: selectQuestion(state, questionId),
        answers: selectAnswers(state, questionId),
        currentUserId: currentUser(state),
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