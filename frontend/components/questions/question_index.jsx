import React from 'react';
import List from '../list';
import QuestionIndexItem from './question_index_item';


const QuestionIndex = (props) => {
  let {questions, voteHash} = props;

  return (
    <div className = "QuestionIndex-Questions">    
    <List 
        component={QuestionIndexItem}
        list={questions}
        listClassName="QuestionIndex-Questions"
        itemCallback={(question) =>
            ({question,
                voteTotal: voteHash[question.id]})}
    />
    </div>
  );
}

export default QuestionIndex;