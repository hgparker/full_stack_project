import React from 'react';
import { Link } from 'react-router-dom';
import Errors from '../errors';

class AnswerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.answer;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.clearAnswerErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submit(this.state);
    }

    handleChange() {
        return (e) => {
            this.setState({
                body: e.currentTarget.value
            });
        }
    }

    render() {
        return (
            <form className="AnswerForm"
                onSubmit={this.handleSubmit}
            >
                <div className="AnswerFormTitle">Your Answer</div>
                <div className="AnswerInputBodyContainer">
                    <textarea
                        className="AnswerInputBody"
                        value={this.state.body}
                        onChange={this.handleChange()}
                    />
                </div>
                <Errors errors={this.props.errors}/>
                <button
                    className="ButtonStyle1"
                    value="submit"
                >{this.props.formType} </button>
            </form> 
        )
    }
}

export default AnswerForm;