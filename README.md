# Babka Overflow
## Overview

Babka Overflow is a clone of Stack Overflow. As such, it is a website which offers the ability to create accounts and login, to post and edit questions, to offer answers to questions, and to vote about which questions and answers are the most valuable. Additionally, one can view the questions and answers of others, as well as applicable vote tallies.

## Link to live site:

[Babka Overflow](https://babka-overflow.herokuapp.com/#/)

## Technologies

Babka Overflow uses the following technologies. The database is built on PostgreSQL; The backend API is run on Ruby on Rails. The user-interface is built using React.js. To manage state, the app uses Redux, and routing is controlled by React Router. For display and styling, I use HTML and SCSS.

## Challenges and Approaches

In what follows, I will explain two features of the app, pointing to the inherent challenges which must be overcome in building these features and explaining the particular ways in which I overcame them. First, I will discuss how I minimize expensive queries to the database, and second, I will discuss how, in the case of voting, I keep state and the database in equilibrium and calculate voting statistics with as little wasted effort as possible.

### Minimizing Database Queries

The database consists of a table of users, a table of questions, a table of answers each of which belongs to a question, and a table of votes each of which belongs to a user, and each of which also belongs either to a question or to an answer. Whereas there is no particular relationship between two separate questions which requires they be viewed together, answers are grouped according to the questions they answer, and no answer is ever viewed without the question to which it belongs as well the other answers which co-belong to the same question. One can make a similar point in regard to votes. Votes are only ever displayed – in the aggregate – in the company of the question or answer to which they belong, and in the case that they belong to an answer, in the company of the question to which that answer belongs.

Thus, in the case of viewing some specific question, there is a large body of data which must accompany the specific details of that question – namely, all answers to that question, all votes about that question, and all votes about all answers to that question. A naïve approach to getting this data would fall into the famous N+1-queries problem, querying the database N additional times in order to fetch the information required about each answer to that question. Actually, it would be even worse – 2N+1-queries – if the database is also queried an additional N-times about the votes belonging to each comment.

I solve this problem by using a single backend API call which queries the database a minimum of times. It does this by relying on a series of carefully written associations, which are polymorphic and second-degree. The resulting data is carefully bundled in a way that exactly matches application state – this allows it to be seamlessly fed into the respective state reducers on the frontend.

Examine the following code.

```
# Key associations in question.rb

    has_many :answers,
        primary_key: :id,
        foreign_key: :question_id,
        class_name: :Answer,
        dependent: :destroy

    has_many :votes,
        as: :votable,
        dependent: :destroy
        
    has_many :answer_votes,
        through: :answers,
        source: :votes

# Key call in questions_controller.rb
# It calls on the three associations defined above and pre-includes them.

def show
    @question = Question.includes(:votes, :answers, :answer_votes).find_by(id: params[:id])        


```

### Ensuring Database and State Conformity

Calculating and displaying vote data involves several challenges. I represent each vote in the database as user-bound and item-bound, where an item may be either a question or an answer. Additionally, each vote has a field called vote_direction which is either 1 (an upvote) or -1 (a downvote). The backend API uses the following logic when receiving upvotes or downvotes. If the voter has no vote associated with the item in question, then the vote is simply entered into the database. If the voter is entering an upvote, but the database has a downvote, then the backend API deletes the existing vote, and similarly in the opposite situation. If the voter is entering an upvote (or downvote), and the database already has an upvote (or downvote), then nothing is done. The problem which develops is how to keep track of this in state. The frontend must somehow adhere to the same, knotty logic which the database is using, but also keeping in mind that the database, not state, is the source of truth. However, the database doesn’t necessarily know what’s in state, either.

I solved the problem in the following way. First, the frontend pre-locates (in linear time) – for whichever used is logged in – all the “equivalent” votes by that user for all votable items on the page which represent past votes (up or down). Next, whenever the user enters a new vote (up or down, the equivalent vote, if it exists, is immediately removed from state, and the frontend dispatches the new vote to the backend API. The backend API, in turn, processes the request and returns data indicating the current vote-record, an upvote, downvote, or an empty vote-record (if an existing upvote or downvote was deleted). This vote-record, finally, is entered into state from the database as the source of truth. State and database are kept on the same page through state throwing out whatever it had in the beginning and updating based on what the database returns. The knotty logic of voting is confined to Rails alone. A dual dance -- which leaves open the possibility of the two coming apart -- is avoided.

Take a look at the following code.

```
// gathering of vote equivalents for currentUserId from state
// from votes_selectors.js

export const selectEquivalentVoteHash = (state, currentUserId) => {
    let voteHash = {};
    if (currentUserId == null)
        return voteHash;
    Object.values(state.entities.votes)
        .filter(vote => vote.user_id == currentUserId)
        .forEach((vote) => {
            voteHash[vote.votable_id] = vote.id
        });
    return voteHash;
}

// when a vote is received, remove equivalent (=voteId, if it exists) from state 
// and update the state based on report from the database
// from votes_actions.js

export const postVote = (voteId, vote) => {
    return (dispatch) => {
        if (voteId)
            dispatch(removeVote(voteId));
        return VoteUtil.postVote(vote)
            .then(newVote => dispatch(receiveVote(newVote)))
            .fail(errors => dispatch(receiveVoteErrors(errors.responseJSON)));
    }
}

// Vote update logic in votes_controller.rb

    def create
        previous_vote = Vote.find_by(derived_vote)
        vote_direction = params[:vote][:vote_direction].to_i
        if !previous_vote
            enter_vote
        elsif vote_direction == previous_vote.vote_direction
            @vote = previous_vote
            render :show
        else
            previous_vote.destroy
            render :empty
        end
    end

```

### Gathering Vote Statistics Efficiently

Another key problem to be solved is the calculation of voting statistics for every votable item to be displayed on the page. As state is normalized, the votes slice of state is indexed by vote id. This means that to select which votes are for or against some given item, the selector must look at every vote in state. So far, so good – that is not unusual for a selector. The trouble arises if one naively does this for *every* votable item on the page. If there are M votes in state, and N votable items to be displayed, then the resulting operation will be O(MN), which is unacceptable as M and N could each plausibly be in the thousands. The solution I employed is rather to make one single pass through state building a hash by item_id with the vote tally as value. This hash is calculated only once in the Redux mapStateToProps() method for each page, and it is then passed down to all sub-components as a prop for them to make use of it. The result is O(M), which is acceptable.

Take a look at the following code.

```
// from votes_selector.rb, this method generates in one pass a hash for every votable_id in state with its vote tally as the value

export const selectVoteHashQuestions = (state) => {    
    let voteHash = {};
    Object.values(state.entities.votes)
        .filter((vote) => vote.votable_type == "Question")
        .forEach((vote) => {
            voteHash[vote.votable_id] = (voteHash[vote.votable_id] || 0) + vote.vote_direction
        })
    return voteHash;
}

// from question_show_container.js, invocation of the special selector with the hash as a prop

const mSTP = (state, ownProps) => {
    let questionId = ownProps.match.params.questionId;
    let currentUserId = currentUser(state)
    let voteHash = selectVoteHashAnswers(state, questionId, voteHash);
    return {    
        question: selectQuestion(state, questionId),
        answers: selectAnswers(state, questionId, voteHash),
        currentUserId: currentUserId,
        loggedIn: loggedIn(state),
        voteHash: voteHash,
        currentUserVoteHash: selectEquivalentVoteHash(state, currentUserId),
        voteTotal: selectTotalVotesQuestion(state, questionId)
    };
}

// sample use of voteHash in question_show.jsx
// the relevant value from voteHash is passed on to <AnswerItem>
// <List> is a utility component which generates an <ul> with a series of <li>-wrapped
// sub-components using a callback which feeds the right props into each listed sub-component

                    <List 
                    component={AnswerItem}
                    list={this.props.answers}
                    itemCallback={answer => ({
                            answer,
                            voteTotal: this.props.voteHash[answer.id],
                            voteId: this.props.currentUserVoteHash[answer.id],
                            votableId: answer.id
                            })
                        }
                    />

```