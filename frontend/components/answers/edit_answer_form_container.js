import React from 'react';
import {connect} from 'react-redux';
import { loggedIn } from '../../selectors/auth_selectors';
import { answerErrors } from '../../selectors/errors_selectors';
import {updateAnswer, clearAnswerErrors, enterAnswerViewMode} from "./../../actions/answer_actions";
import {selectAnswer} from "../../selectors/answers_selectors";
import AnswerForm from "./answer_form";

const mSTP = (state, ownProps) => {
    return {
        errors: answerErrors(state),
        formType: "Edit your answer",
        loggedIn: loggedIn(state),
        answer: selectAnswer(state, ownProps.answerId)
    }
}


const mDTP = (dispatch) => {
    return {
        submit: (answer) => dispatch(updateAnswer(answer)),
        clearAnswerErrors: () => dispatch(clearAnswerErrors())
    }
}

class EditAnswerForm extends React.Component {
    componentDidMount() {
        this.props.clearAnswerErrors();
    }

    render() {
        return (
            <AnswerForm
                {...this.props}
            />
        );
    }
}
  
export default connect(mSTP, mDTP)(AnswerForm);