import React from 'react';
import List from '../list';
import QuestionIndexItem from './question_index_item';


class QuestionIndex extends React.Component {


    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        return (
            <div>
                <div> Stuff up top here </div>
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