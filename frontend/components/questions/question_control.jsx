import React from 'react';
import { upvote } from '../../actions/vote_actions';
import { currentUser } from '../../selectors/auth_selectors';

class QuestionControl extends React.Component {
    render() {
        let {upvote, downvote, voteId, votableId, voteTotal, currentUserId} = this.props
        return (
            <div className="QuestionControl">
                <button
                    onClick={() => upvote(voteId, votableId, currentUserId)}
                >Upvote
                </button>

                <div className="VoteColumn">
                    <div> {voteTotal || 0} </div>
                    <div> {voteTotal == 1 || voteTotal == -1 ? "vote" : "votes"} </div>
                </div>
                
                <button
                    onClick={() => downvote(voteId, votableId, currentUserId)}
                >Downvote
                </button>            
            </div>
        );
    }
}

export default QuestionControl