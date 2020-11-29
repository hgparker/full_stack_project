import React from 'react';

class QuestionLowerControl extends React.Component {
    render() {
      let {questionUsername} = this.props;
      return (
          <div className="QuestionLowerControl">
              <div className="QLC-ControlElements">

              </div>
              <div className="QLC-UserInfo">
                {questionUsername}
              </div>
          </div>
      );
    }
}

export default QuestionLowerControl;