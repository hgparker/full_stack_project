import React from 'react';
import List from '../list';
import QuestionIndexItem from './question_index_item';
import {Link} from 'react-router-dom';


class QuestionIndex extends React.Component {

    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {

        const NewQuestionButton = !this.props.loggedIn ? null : (
            <Link to="/questions/ask">
            <button>
                Ask Question
            </button>
            </Link>
            );


        return (
            <div>
                <div> Stuff up top here
                    {NewQuestionButton}
                </div>
                <List 
                    component={QuestionIndexItem}
                    list={this.props.questions}
                    itemCallback={(question) => ({question})}
                />
            </div>
        );
    }
}


export default QuestionIndex;