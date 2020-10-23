import QuestionInfo from "./question_info";
import {connect} from 'react-redux';

const mSTP = (state, ownProps) => {
    return {   
        voteTotal: ownProps.voteTotal
    };
}

const mDTP = (dispatch) => {
    return {
    }
}

export default connect(mSTP, mDTP)(QuestionInfo);