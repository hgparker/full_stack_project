import React from "react";
import ReactTimeAgo from 'react-time-ago';

class QuestionIndexLowerControl extends React.Component {
  render() {
    let {username, date} = this.props;
    return (
      <div className="QII-LowerControl">
        asked&nbsp;
          <ReactTimeAgo date={date} locale="en-US"/> &nbsp;by {username} 
      </div>
    );
  }
}

export default QuestionIndexLowerControl;