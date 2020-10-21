import React from 'react';
import { Redirect } from 'react-router-dom';
import Errors from '../errors';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.question;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.clearQuestionErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submit(this.state)
            .then(action => {
                this.props.history.push(`/questions/${Object.values(action.payload.questions)[0].id}`)
            });
    }

    handleChange(field) {
        return (e) => {
            this.setState({
                [field] : e.currentTarget.value
            });
        }
    }

    render() {
        return (
            <div>
                <form className="QuestionFormBox1"
                    onSubmit={this.handleSubmit}
                >
                    <div className="QuestionFormBox">
                    <label>Title</label>
                        <input
                            className="QuestionFormTitle"
                            type="text"
                            row="60"
                            value={this.state.title}
                            onChange={this.handleChange("title")}
                        />
                    </div>
                    <div className="QuestionFormBox">
                    <label>Body</label>
                        <textarea
                            className="QuestionFormBody"
                            cols="60"
                            value={this.state.body}
                            onChange={this.handleChange("body")}
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

export default QuestionForm;