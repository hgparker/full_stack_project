import {connect} from 'react-redux';

import QuestionIndex from "./question_index";
import {selectQuestions} from '../../selectors/questions_selectors';
import {selectVoteHashQuestions} from '../../selectors/votes_selectors';

const mSTP = (state) => {
    let voteHash = selectVoteHashQuestions(state);
    return {
        questions: selectQuestions(state, voteHash),
        voteHash: voteHash
    };
}

export default connect(mSTP, null)(QuestionIndex);