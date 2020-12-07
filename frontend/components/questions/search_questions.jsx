import React from 'react';
import QuestionIndexContainer from './question_index_container';
import {conditionalNewQuestion} from '../conditional_buttons';

class SearchQuestions extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions(this.props.searchString);
  }

  render() {
    let {searchString} = this.props;

    return (
      <div className="AnyQuestionIndex-Elements">
        <div className="SearchQuestions">
          <div className="SearchQuestions-TitleBar">
            <div className="SearchResults">
              Search Results
            </div>
              {conditionalNewQuestion(this.props.loggedIn)}
          </div>
          <div className="SearchInfo">
            Results for {searchString}
          </div>
        </div>
        <QuestionIndexContainer/>
      </div>
    );
  }
}

export default SearchQuestions;