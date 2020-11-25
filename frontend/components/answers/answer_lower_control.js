import React from 'react';
import {conditionalDelete, conditionalButton} from '../conditional_buttons';

class LowerAnswerControl extends React.Component {
    render() {
        let {answerId, answerAuthorId, currentUserId, deleteAnswer, loggedIn} = this.props;
        let {editAnswer} = this.props
        return (
            <div className="AnswerSecondaryControl">
                {conditionalDelete(answerAuthorId == currentUserId, () => deleteAnswer(answerId))}
                {conditionalButton(answerAuthorId == currentUserId,
                    () => editAnswer(answerId), "ButtonStyle1", "Edit your answer"
                )}
                {conditionalButton(loggedIn,
                    () => console.log("add comment functionality here"), "ButtonStyle1", "Add a comment"    
                )}
            </div>
        );
    }
}

export default LowerAnswerControl;