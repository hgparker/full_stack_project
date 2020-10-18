

export const fetchQuestions = () => {
    return $.ajax({url: `/api/questions`, method: "GET"});
}

export const fetchQuestion = (questionId) => {
    return $.ajax({url: `/api/questions/${questionId}`, method: "GET"});
}

export const postQuestion = (question) => {
    return $.ajax({url: `/api/questions`, method: "POST", data: {question}});
}

export const updateQuestion = (question) => {
    return $.ajax({url: `/api/question/${questionId}`, method: "PATCH", data: {question}});
}

export const deleteQuestion = (questionId) => {
    return $.ajax({url: `/api/question/${questionId}`, method: "DELETE"});
}