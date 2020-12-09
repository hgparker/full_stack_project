import React from 'react';
import Errors from '../errors';
import {withRouter} from "react-router-dom";

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
            <form className="QuestionForm"
                onSubmit={this.handleSubmit}
            >
                <div className="QuestionWhiteBox">
                    <div className="QuestionFieldName">Title</div>
                    <div className="QuestionFieldTips">Be specific and imagine you’re asking a question to another person</div>
                    <input
                            className="QuestionInputTitle"
                            type="text"
                            // row="60"
                            value={this.state.title}
                            onChange={this.handleChange("title")}
                    />
                    <div className="QuestionFieldName">Body</div>
                    <div className="QuestionFieldTips">Include all the information someone would need to answer your question</div>
                    <textarea
                        className="QuestionInputBody"
                        // cols="60"
                        value={this.state.body}
                        onChange={this.handleChange("body")}
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

export default withRouter(QuestionForm);