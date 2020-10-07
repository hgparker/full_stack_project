```js
{
  entities: {
    questions: {
      1: {
        id: 1,
        title: "...",
        authorId: 11,
      },
      2: {
        id: 2,
        title: "...",
        authorId: 25,
      },
      3: {
        id: 3,
        title: "...",
        body: "...",
        authorId: 11,
      }
    },
    answers: {
      1: {
        id: 1,
        questionId: 9
        body: "..."
        authorId: 11,
      },
      2: {
        id: 2,
        questionId: 9
        body: "..."
        authorId: 12,
      },
    },
    comments: {
      1: {
        id: 1,
        answerId: 9
        body: "..."
        authorId: 11,
      },
      2: {
        id: 2,
        answerId: 9
        body: "..."
        authorId: 12,
      },
    },
    users: {
      11: {
        id: 11,
        username: "...",      
      },
      12: {
        id: 12,
        username: "...",
      }
    },
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    chirpForm: ["Question body cannot be blank"],
  },
  session: {current_user_id: 25 }
}
```