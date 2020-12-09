import React from "react";
import QuestionFormContainer from "./question_form_container";

class NewQuestion extends React.Component {
  render() {
    return (
      <div className="NewQuestion">
        <div className="NewQuestion-Title">
          <div className="NewQuestion-TitleText">
          Ask a public question
          </div>
        </div>
        <QuestionFormContainer/>
      </div>
    );
  }
}


export default NewQuestion;