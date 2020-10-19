import {connect} from 'react-redux';
import QuestionShow from './question_show';
import {fetchQuestion} from "../../actions/question_actions";

const mSTP = (state, ownProps) => {
    return {    
        question: state.entities.questions[ownProps.match.params.questionId]
    };
}

const mDTP = (dispatch) => {
    return {
        fetchQuestion: (questionId) => {
            return dispatch(fetchQuestion(questionId))
        }
    }
}

export default connect(mSTP, mDTP)(QuestionShow );