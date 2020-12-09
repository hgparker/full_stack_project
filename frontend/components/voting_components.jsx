import React from "react";


export const conditionalUpvote = (successCondition, upVoted, callback) => {
  if (!successCondition)
    return null;
  return (
    <div
      onClick={callback}
      className="VotingBox"
    >
      <svg height="36" width="36">
          <polygon
            points="18,6, 33,21, 3,21" 
            className={!upVoted ? "VoteTriangle" : "VotedTriangle"}
          />
      </svg>
    </div>
  );
}

export const conditionalDownvote = (successCondition, downVoted, callback) => {
  if (!successCondition)
    return null;
  return (
    <div
      onClick={callback}
      className="VotingBox"
    >
      <svg height="36" width="36">
          <polygon
            points="18, 30, 33, 15, 3, 15"
            // points="6,15 18,27 30,15" 
            className={!downVoted ? "VoteTriangle" : "VotedTriangle"}
          />
      </svg>
    </div>
  );
}
