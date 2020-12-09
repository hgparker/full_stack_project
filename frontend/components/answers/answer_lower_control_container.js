import {connect} from 'react-redux';
import AnswerLowerControl from "./answer_lower_control";

import { currentUser} from '../../selectors/auth_selectors';
import {selectUsername} from "../../selectors/user_selectors";

import {deleteAnswer, enterAnswerEditMode} from "../../actions/answer_actions";
import {enterCommentPostMode} from "../../actions/comment_actions"
import {selectSessionComment} from "../../selectors/comments_selectors";

const mSTP = (state, ownProps) => {
    let answerAuthorId = ownProps.answer.author_id;
    return {
      answer: ownProps.answer,
      currentUserId: currentUser(state),
      sessionComment: selectSessionComment(state),
      hasCommented: !!ownProps.userCommentId,
      answerUsername: selectUsername(state, answerAuthorId)
    };
}

const mDTP = (dispatch) => {
    return {
      deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
      editAnswer: (answerId) => dispatch(enterAnswerEditMode(answerId)),
      addComment: (answerId) => dispatch(enterCommentPostMode(answerId))
    }
}

export default connect(mSTP, mDTP)(AnswerLowerControl);