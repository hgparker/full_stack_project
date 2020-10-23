

export const postVote = (vote) => {
    return $.ajax({url: `/api/votes`, method: `POST`, data: {vote}});
}