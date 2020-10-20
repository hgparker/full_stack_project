

export const postAnswer = (answer) => {
    return $.ajax({url: `/api/answers`, method: "POST", data: {answer}});
}

export const updateAnswer = (answer) => {
    return $.ajax({url: `/api/answers/${answer.id}`, method: "PATCH", data: {answer}});
}

export const deleteAnswer = (answerId) => {
    return $.ajax({url: `/api/answers/${answerId}`, method: "DELETE"});
}