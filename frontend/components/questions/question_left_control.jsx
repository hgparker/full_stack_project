import React from 'react';
import {conditionalUpvote, conditionalDownvote} from "../voting_components";

class QuestionControl extends React.Component {
    render() {
        let {upvote, downvote, voteId, votableId, voteTotal, currentUserId, upVoted, downVoted} = this.props
        return (
            <div className="QuestionLeftControl">
                <div className="VoteColumn">
                    {conditionalUpvote(true, upVoted, () => upvote(voteId, votableId, currentUserId))}
                    <div> {voteTotal || 0} </div>
                    {conditionalDownvote(true, downVoted, () => downvote(voteId, votableId, currentUserId))}
                </div>
            </div>
        );
    }
}

export default QuestionControl