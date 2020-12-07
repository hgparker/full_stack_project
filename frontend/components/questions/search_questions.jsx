import React from 'react';
import QuestionIndexContainer from './question_index_container';
import {conditionalNewQuestion} from '../conditional_buttons';

class SearchQuestions extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions(this.props.searchString);
  }

  render() {
    return (
      <div className="AnyQuestionIndex-Elements">
        <div className="SearchQuestions">
          <div className="SearchQuestions-TitleBar">
            <div className="SearchResults">
              Search Results
            </div>
              {conditionalNewQuestion(this.props.loggedIn)}
          </div>
        </div>
        <QuestionIndexContainer/>
      </div>
    );
  }
}

export default SearchQuestions;