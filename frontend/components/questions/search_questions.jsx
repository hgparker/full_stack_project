import React from 'react';
import QuestionIndexContainer from './question_index_container';
import {conditionalNewQuestion} from '../conditional_buttons';

class SearchQuestions extends React.Component {

  componentDidMount() {
    console.log(this.props.searchString);
    this.props.fetchQuestions(this.props.searchString);
  }

  render() {
    return (
      <div className="QuestionIndex-QuestionIndexElements">
        <div className="QuestionIndex-TitleBox">
          <div>Search Results</div>
            <div> {conditionalNewQuestion(this.props.loggedIn)} </div>
        </div>
        <QuestionIndexContainer/>
      </div>
    );
  }
}

export default SearchQuestions;