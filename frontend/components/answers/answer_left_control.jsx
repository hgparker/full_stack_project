import React from 'react';
import {conditionalUpvote, conditionalDownvote} from "../voting_components"

class AnswerLeftControl extends React.Component {
    render() {
        let {upvote, downvote, voteId, votableId, voteTotal, upVoted, downVoted, currentUserId} = this.props

        return (
            <div className="AnswerControl">

                {
                    conditionalUpvote(true, upVoted, () => upvote(voteId, votableId, currentUserId))
                }



                <div className="VoteColumn">
                    <div> {voteTotal || 0} </div>
                    <div> {voteTotal == 1 || voteTotal == -1 ? "vote" : "votes"} </div>
                </div>

                {
                    conditionalDownvote(true, downVoted, () => downvote(voteId, votableId, currentUserId))
                }

            </div>
        );
    }
}

export default AnswerLeftControl;