import {connect} from 'react-redux';
import SearchQuestions from "./search_questions";

import {fetchSearch} from "../../actions/search_actions";
import {loggedIn} from '../../selectors/auth_selectors';
import {selectQuestionNumber} from "../../selectors/questions_selectors";

const mSTP = (state, ownProps) => {
  return {
    loggedIn: loggedIn(state),
    searchString: ownProps.match.params.searchString,
    numResults: selectQuestionNumber(state)
  };
}

const mDTP = (dispatch) => {
  return {
    fetchQuestions: (searchString) => dispatch(fetchSearch(searchString))
  }
}

export default connect(mSTP, mDTP)(SearchQuestions);