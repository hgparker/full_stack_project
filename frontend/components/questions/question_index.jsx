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
            <button
                className="ButtonStyle1"
            >
                Ask Question
            </button>
            </Link>
            );

        return (
            <div className="QuestionIndexBox1">
                <div className="QuestionIndexBox2">
                    <div>Top Questions </div>
                    <div> {NewQuestionButton} </div>
                </div>
                <div>
                <List 
                    component={QuestionIndexItem}
                    list={this.props.questions}
                    itemCallback={(question) => ({question})}
                />
                </div>
                
            </div>
        );
    }
}

export default QuestionIndex;