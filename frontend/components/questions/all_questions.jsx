import React from 'react';
import QuestionIndexContainer from './question_index_container';
import {conditionalNewQuestion} from '../conditional_buttons';

class AllQuestions extends React.Component {

    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        return (
            <div className="QuestionIndex-QuestionIndexElements">
                <div className="QuestionIndex-TitleBox">
                    <div>All Questions </div>
                    <div> {conditionalNewQuestion(this.props.loggedIn)} </div>
                </div>
                <QuestionIndexContainer/>
            </div>
        );
    }
}

export default AllQuestions;