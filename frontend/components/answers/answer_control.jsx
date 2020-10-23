import React from 'react';

class AnswerControl extends React.Component {
    render() {
        let {upvote, downvote, voteId, votableId, voteTotal, currentUserId} = this.props
        return (
            <div className="AnswerControl">

                <button
                    onClick={() => upvote(voteId, votableId, currentUserId)}
                >Upvote
                </button>

                <div className="VoteColumn">
                    <div> {this.props.voteTotal || 0} </div>
                    <div> {this.props.voteTotal == 1 || this.props.voteTotal == -1 ? "vote" : "votes"} </div>
                </div>
                
                <button
                    onClick={() => downvote(voteId, votableId, currentUserId)}
                >Downvote
                </button>
            </div>
        );
    }
}

export default AnswerControl;