import React from 'react';
import {connect} from 'react-redux';
import { selectComment } from '../../selectors/comments_selectors';
import { commentErrors } from '../../selectors/errors_selectors';
import {updateComment, clearCommentErrors} from "./../../actions/comment_actions";
import CommentForm from "./comment_form";

const mSTP = (state, ownProps) => {
  return {
      errors: commentErrors(state),
      formType: "Edit your comment",
      comment: selectComment(state, ownProps.commentId)
  };
}

const mDTP = (dispatch) => {
    return {
        submit: (comment) => dispatch(updateComment(comment)),
        clearCommentErrors: () => dispatch(clearCommentErrors())
    }
}

class EditCommentForm extends React.Component {
    componentDidMount() {
        this.props.clearCommentErrors();
    }

    render() {
        return (
            <CommentForm
                {...this.props}
            />
        );
    }
}
  
export default connect(mSTP, mDTP)(CommentForm);