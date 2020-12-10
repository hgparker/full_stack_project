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
        <form
            className="CommentForm"
            onSubmit={this.handleSubmit}
        >
          <div className="CommentFormTitle">Your Comment</div>
          <div className="CommentInputBodyContainer">
              <textarea
                  className="CommentInputBody"
                  value={this.state.body}
                  onChange={this.handleChange("body")}
              />
          </div>
          <Errors errors={this.props.errors}/>
          <button
              className="ButtonStyle1"
              value="submit"
          >{this.props.formType} </button>
        </form> 
    )
  }
}

export default CommentForm;