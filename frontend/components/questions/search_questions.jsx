import React from 'react';
// import {} from 'react-router-dom';
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
          <form className="AnotherSearchBar"
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              value={this.state.searchString}
              onChange={this.handleChange}
            />
            <button
              className="ButtonStyle1"
              value="submit"
            >Search </button>
          </form>
        </div>
        <QuestionIndexContainer/>
      </div>
    );
  }
}

export default SearchQuestions;