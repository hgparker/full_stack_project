import {connect} from 'react-redux';
import QuestionIndexLowerControl from "./question_index_lower_control";

import {selectUsername} from "../../selectors/user_selectors";

const mSTP = (state, ownProps) => {
  console.log(ownProps.question)
  return {
    username: selectUsername(state, ownProps.question.author_id),
    date: ownProps.question.created_at
  };
}

export default connect(mSTP, null)(QuestionIndexLowerControl)