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
            points="18,18 30,30 6,30" 
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
            points="6,6 18,18 30,6" 
            className={!downVoted ? "VoteTriangle" : "VotedTriangle"}
          />
      </svg>
    </div>
  );
}
