import React from "react";

class QuestionIndexLowerControl extends React.Component {
  render() {
    let {username, date} = this.props;
    return (
      <div>
        asked by {username} on {date}
      </div>
    );
  }
}

export default QuestionIndexLowerControl;