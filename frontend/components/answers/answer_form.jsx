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
        if (!this.props.loggedIn) {
            return (
                <div className="AnswerAlternative">
                    <Link to='/login'>
                    Log in
                    </Link> or <Link to='/signup'>sign up</Link> to post your answer</div>
            );
        }
        return (
            <div>
                <form className="QuestionFormBox1"
                    onSubmit={this.handleSubmit}
                >
                    <div className="QuestionFormBox">
                        <textarea
                            className="QuestionFormBody"
                            cols="60"
                            value={this.state.body}
                            onChange={this.handleChange()}
                        />
                    </div>
                    <button
                        className="ButtonStyle1"
                        value="submit"
                    >{this.props.formType} </button>
                    <Errors errors={this.props.errors}/>
                    </form> 
            </div>
        )
    }
}

export default AnswerForm;