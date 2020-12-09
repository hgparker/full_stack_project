import {connect} from 'react-redux';
import QuestionLowerControl from "./question_lower_control";

import {selectUsername} from "../../selectors/user_selectors";

const mSTP = (state, ownProps) => {

    return {
      question: ownProps.question,   
      questionUsername: selectUsername(state, ownProps.userId)
    };
}

export default connect(mSTP, null)(QuestionLowerControl);