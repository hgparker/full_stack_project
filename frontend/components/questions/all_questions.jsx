import React from 'react';
import QuestionIndexContainer from './question_index_container';
import {conditionalNewQuestion} from '../conditional_buttons';

class AllQuestions extends React.Component {

    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        let {numResults, loggedIn} = this.props;

        return (
            <div className="AnyQuestionIndex-Elements">
                <div className="AllQuestions">
                    <div className="AllQuestions-TitleBar">
                        <div className="AllQuestions-Text">
                            All Questions
                        </div>
                        {conditionalNewQuestion(loggedIn)}
                    </div>
                    <div className="AllQuestionsLowerControl">
                        <div className="AQLC-Left">
                            {numResults} {numResults == 1 ? " question" : " questions"}
                        </div>
                    </div>
                </div>
                <QuestionIndexContainer/>
            </div>
        );
    }
}

export default AllQuestions;