import React from 'react';
import {conditionalDelete, conditionalButton} from './../conditional_buttons';

class LowerAnswerControl extends React.Component {
    render() {
        let {answerId, answerAuthorId, currentUserId, deleteAnswer} = this.props;
        return (
            <div className="AnswerSecondaryControl">
                {conditionalDelete(answerAuthorId == currentUserId, () => deleteAnswer(answerId))}
                {conditionalButton(answerAuthorId == currentUserId,
                    () => this.props.editAnswer(answerId), "ButtonStyle1", "Edit your answer"
                )}
            </div>
        );
    }
}

export default LowerAnswerControl;