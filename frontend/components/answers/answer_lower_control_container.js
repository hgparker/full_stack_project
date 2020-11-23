import LowerAnswerControl from "./lower_answer_control";
import {connect} from 'react-redux';
import { currentUser } from '../../selectors/auth_selectors';
import {deleteAnswer} from "../../actions/answer_actions";

const mSTP = (state, ownProps) => {
    return {   
      currentUserId: currentUser(state),
      answerAuthorId: ownProps.answerAuthorId,
      answerId: ownProps.answerId
    };
}

const mDTP = (dispatch) => {
    return {
      deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId))
    }
}

export default connect(mSTP, mDTP)(LowerAnswerControl);