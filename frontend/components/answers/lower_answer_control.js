import React from 'react';
import {conditionalDelete, conditionalButton} from './../conditional_buttons';

class LowerAnswerControl extends React.Component {
    render() {
        let {answerId, answerAuthorId, currentUserId, deleteAnswer} = this.props;
        return (
            <div className="AnswerSecondaryControl">
                {conditionalDelete(answerAuthorId == currentUserId, () => deleteAnswer(answerId))}
                {conditionalButton(answerAuthorId == currentUserId,
                    () => {
                        console.log("edit action here");
                    }, "ButtonStyle1", "Edit your answer"
                    )}            


                {/* export const conditionalButton = (successCondition, callback, buttonStyle, buttonText) => { */}

            </div>
        );
    }
}

export default LowerAnswerControl;