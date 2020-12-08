import React from 'react';
import QuestionIndexContainer from './question_index_container';
import {conditionalNewQuestion} from '../conditional_buttons';

class SearchQuestions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {searchString: props.searchString};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestions(this.props.searchString);
    this.setState({oldURLString: this.props.searchString})
  }

  componentDidUpdate() {
    if (this.props.searchString != this.state.oldURLString) {
      this.setState({oldURLString: this.props.searchString, searchString: this.props.searchString})
      this.props.fetchQuestions(this.props.searchString);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchQuestions(this.state.searchString)
    this.props.history.replace(this.state.searchString);
  }

  handleChange(e) {
    this.setState({searchString: e.currentTarget.value});
  }

  render() {
    let {searchString, numResults} = this.props;

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
          <form className="AnotherSearchBar"
            onSubmit={this.handleSubmit}
          >
            <input
              className="AnotherSearchInput"
              type="text"
              value={this.state.searchString}
              onChange={this.handleChange}
            />
            <button
              className="ButtonStyle1"
              value="submit"
            >Search </button>
          </form>

          <div className="SearchQuestionsLowerControl">
            <div className="SQLC-Left">
              {numResults} {numResults == 1 ? " result" : " results"}
            </div>
          </div>
        
        </div>

        <QuestionIndexContainer/>
      </div>
    );
  }
}

export default SearchQuestions;