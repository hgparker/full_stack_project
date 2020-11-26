import AnswerLowerControl from "./answer_lower_control";
import {connect} from 'react-redux';
import { currentUser, loggedIn } from '../../selectors/auth_selectors';
import {deleteAnswer, enterAnswerEditMode} from "../../actions/answer_actions";
import {enterCommentPostMode} from "../../actions/comment_actions"
import {selectSessionComment} from "../../selectors/comments_selectors";

const mSTP = (state, ownProps) => {
    return {   
      currentUserId: currentUser(state),
      answerAuthorId: ownProps.answerAuthorId,
      answerId: ownProps.answerId,
      loggedIn: loggedIn(state),
      sessionComment: selectSessionComment(state)
    };
}

const mDTP = (dispatch) => {
    return {
      deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
      editAnswer: (answerId) => dispatch(enterAnswerEditMode(answerId)),
      addComment: () => dispatch(enterCommentPostMode())
    }
}

export default connect(mSTP, mDTP)(AnswerLowerControl);