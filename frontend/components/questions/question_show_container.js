import {connect} from 'react-redux';
import QuestionShow from './question_show';
import {fetchQuestion, deleteQuestion} from "../../actions/question_actions";
import {selectAnswers, hasAnswered, selectSessionAnswer} from '../../selectors/answers_selectors';
import {selectQuestion} from '../../selectors/questions_selectors';
import { currentUser, loggedIn } from '../../selectors/auth_selectors';
import {selectVoteHashAnswers, selectTotalVotesQuestion, selectEquivalentVoteHash} from '../../selectors/votes_selectors';
import { enterAnswerLoginMode, enterAnswerPostMode, enterAnswerViewMode } from '../../actions/answer_actions';

const mSTP = (state, ownProps) => {
    let questionId = ownProps.match.params.questionId;
    let currentUserId = currentUser(state)
    let voteHash = selectVoteHashAnswers(state, questionId, voteHash);
    return {    
        question: selectQuestion(state, questionId),
        answers: selectAnswers(state, questionId, voteHash),
        currentUserId: currentUserId,
        loggedIn: loggedIn(state),
        voteHash: voteHash,
        currentUserVoteHash: selectEquivalentVoteHash(state, currentUserId),
        voteTotal: selectTotalVotesQuestion(state, questionId),
        hasAnswered: hasAnswered(state, questionId, currentUserId),
        sessionAnswer: selectSessionAnswer(state)
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
        enterAnswerLoginMode: () => dispatch(enterAnswerLoginMode()),
        enterAnswerViewMode: () => dispatch(enterAnswerViewMode()),
        enterAnswerPostMode: () => dispatch(enterAnswerPostMode())
    }
}

export default connect(mSTP, mDTP)(QuestionShow );