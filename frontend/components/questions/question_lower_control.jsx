import React from 'react';
import ReactTimeAgo from "react-time-ago";

class QuestionLowerControl extends React.Component {
    render() {
      let {questionUsername, question} = this.props;
      return (
          <div className="QuestionLowerControl">
              <div className="QLC-ControlElements">

              </div>
              <div className="QLC-UserInfo">
                asked&nbsp;
                <ReactTimeAgo date={question.created_at} locale="en-US"/> by {questionUsername}
              </div>
          </div>
      );
    }
}

// asked&nbsp;
// <ReactTimeAgo date={date} locale="en-US"/> &nbsp;by {username}

export default QuestionLowerControl;