import React from 'react';
import {conditionalUpvote, conditionalDownvote} from "../voting_components"

class AnswerLeftControl extends React.Component {
    render() {
        let {upvote, downvote, voteId, votableId, voteTotal, upVoted, downVoted, currentUserId} = this.props

        return (
            <div className="AnswerLeftControl">
                <div className="VoteColumn">
                    {conditionalUpvote(true, upVoted, () => upvote(voteId, votableId, currentUserId))}
                    <div> {voteTotal || 0} </div>
                    {conditionalDownvote(true, downVoted, () => downvote(voteId, votableId, currentUserId))}
                </div>
            </div>
        );
    }
}

export default AnswerLeftControl;