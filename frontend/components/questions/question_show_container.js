import {connect} from 'react-redux';
import QuestionShow from './question_show';
import {fetchQuestion, deleteQuestion} from "../../actions/question_actions";
import {selectAnswers} from '../../selectors/answers_selectors';
import {selectQuestion} from '../../selectors/questions_selectors';
import { currentUser, loggedIn } from '../../selectors/auth_selectors';
import {selectVoteHashAnswers, selectTotalVotesQuestion, selectEquivalentVoteHash} from '../../selectors/votes_selectors';

const mSTP = (state, ownProps) => {
    let questionId = ownProps.match.params.questionId;
    let currentUserId = currentUser(state)
    return {    
        question: selectQuestion(state, questionId),
        answers: selectAnswers(state, questionId),
        currentUserId: currentUserId,
        loggedIn: loggedIn(state),
        voteHash: selectVoteHashAnswers(state),
        currentUserVoteHash: selectEquivalentVoteHash(state, currentUserId),
        voteTotal: selectTotalVotesQuestion(state, questionId)
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