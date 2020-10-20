import {connect} from 'react-redux';
import QuestionShow from './question_show';
import {fetchQuestion, deleteQuestion} from "../../actions/question_actions";
import {loggedIn} from '../../util/auth_api_util';
import {selectAnswers} from '../../selectors/answers_selectors';

const mSTP = (state, ownProps) => {
    let questionId = ownProps.match.params.questionId;
    return {    
        question: state.entities.questions[questionId],
        answers: selectAnswers(state, questionId),
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