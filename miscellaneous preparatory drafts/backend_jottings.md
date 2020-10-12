# Backend Routes

## HTML

+ `GET /` `StaticPagesController#root`

## API Endpoints (this part copied from template)

Note: (a) no user index...we don't need it or want it (as yet).

### `users`
+ `POST /api/users` - create account

### `session`
+ `POST /api/session` - log in
+ `DELETE /api/session` - log out

Note: (a) the interpretation of index as get all may be controversial; a different option would be to constrain by some form of relevance, recent questions, a sampling, etc; (b) I've included delete provisionally and not included update -- perhaps one or both of these decisions should be reversed.

### `questions`
+ `GET /api/questions` - gets all questions
+ `GET /api/questions/:id` - get a specific question
+ `POST /api/questions` - creates a question
+ `DELETE /api/questions/:id` - delete a question

Note: (a) there is no general index for answers -- rather, the index is up to question; (b) there is no show for answers (or for comments), for there is no use-case in which only a1 to q1 would be required, and not also a2 to q1, a3 to q1, etc. -- if we need a1-ak to q1, why not fetch them all at once? (c) I have included no update or delete for questions -- this is provisional, perhaps they should be included.

### `answers`
+ `GET /api/questions/:id/answers` - gets the answers to a specific question
+ `POST /api/questions/:id/answers` - creates an answer to a specific question

Note: (a) comments are up to answer; (b)/(c) as above, mutatis mutandis; (d) note the simplified rounting as opposed to doubly nested -- I assume that's better.

### `comments`
+ `GET /api/answers/:id/comments` - gets the comments to a specific answer
+ `POST /api/answers/:id/comments` - creates a comment to a specific answer
