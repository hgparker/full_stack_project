import React from 'react';
import {conditionalDelete} from './../conditional_buttons';

class LowerAnswerControl extends React.Component {
    render() {
        let {answerId, answerAuthorId, currentUserId, deleteAnswer} = this.props;
        return (
            <div className="AnswerSecondaryControl">
                {conditionalDelete(answerAuthorId == currentUserId, () => deleteAnswer(answerId))}
            </div>
        );
    }
}

export default LowerAnswerControl;