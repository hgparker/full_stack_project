import React from 'react';
import Errors from '../errors';

class CommentForm extends React.Component {
  constructor(props) {
      super(props)
      this.state = this.props.comment;

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.clearCommentErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state)
  }

  handleChange(field) {
      return (e) => {
          this.setState({
              [field] : e.currentTarget.value
          });
      }
  }

  render() {
    return (
      <div>
        <form
            onSubmit={this.handleSubmit}
        >
          <div>
              <textarea
                  // className="QuestionFormBody"
                  cols="30"
                  value={this.state.body}
                  onChange={this.handleChange("body")}
              />
          </div>
          <button
              className="ButtonStyle1"
              value="submit"
          >{this.props.formType} </button>
          <Errors errors={this.props.errors}/>
          </form> 
      </div>
    )
  }
}

export default CommentForm;