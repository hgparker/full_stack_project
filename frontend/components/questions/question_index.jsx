import React from 'react';
import List from '../list';
import QuestionIndexItem from './question_index_item';
import {Link} from 'react-router-dom';
import {conditionalNewQuestion} from '../conditional_buttons';


class QuestionIndex extends React.Component {

    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        debugger
        return (
            <div className="QuestionIndexBox1">
                <div className="QuestionIndexBox2">
                    <div>Top Questions </div>
                    <div> {conditionalNewQuestion(this.props.loggedIn)} </div>
                </div>
                <div>
                <List 
                    component={QuestionIndexItem}
                    list={this.props.questions}
                    itemCallback={(question) =>
                        ({question, voteTotal: this.props.voteHash[question.id]})}
                />
                </div>
                
            </div>
        );
    }
}

export default QuestionIndex;