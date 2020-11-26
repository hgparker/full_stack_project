import {connect} from 'react-redux';
import CommentForm from './comment_form';
import {postComment, clearCommentErrors} from '../../actions/comment_actions';
import {commentErrors} from '../../selectors/errors_selectors'
import { currentUser } from '../../selectors/auth_selectors';

const mSTP = (state) => {
    return {
        errors: commentErrors(state),
        formType: "Post your comment",
        comment: {
            body: "",
            author_id: currentUser(state)
        }
    };
}

const mDTP = (dispatch) => {
    return {
        submit: (comment) => dispatch(postComment(comment)),
        clearQuestionErrors: () => dispatch(clearCommentErrors())
    }
}

export default connect(mSTP, mDTP)(CommentForm);