import QuestionInfo from "./question_info";
import {connect} from 'react-redux';
import {loggedIn} from "../../selectors/auth_selectors";

const mSTP = (state, ownProps) => {
    return {   
        voteTotal: ownProps.voteTotal,
        loggedIn: loggedIn(state)
    };
}

export default connect(mSTP, null)(QuestionInfo);