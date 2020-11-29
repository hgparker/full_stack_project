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
        return (
            <div className="QuestionIndex-QuestionIndexElements">
                <div className="QuestionIndex-TitleBox">
                    <div>Top Questions </div>
                    <div> {conditionalNewQuestion(this.props.loggedIn)} </div>
                </div>
            
                <div className = "QuestionIndex-Questions">    
                <List 
                    component={QuestionIndexItem}
                    list={this.props.questions}
                    listClassName="QuestionIndex-Questions"
                    itemCallback={(question) =>
                        ({question,
                            voteTotal: this.props.voteHash[question.id]})}
                />
                </div>
            </div>
        );
    }
}

export default QuestionIndex;