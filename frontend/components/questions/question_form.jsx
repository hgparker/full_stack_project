import React from 'react';
import { Redirect } from 'react-router-dom';
import Errors from '../errors';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.props.question,
            hasPosted: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.clearQuestionErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submit(this.state)
            .then((question) => {
                this.props.history.push(`/questions`)
            });        


        // this.props.submit(this.state)
        //     .then(() => {this.setState({hasPosted: true})});        
    }

    handleChange(field) {
        return (e) => {
            this.setState({
                [field] : e.currentTarget.value
            });
        }
    }

    render() {
        if (this.state.hasPosted && Object.keys(this.props.errors).length === 0)
            return (
                <Redirect to="/questions"/>
            )
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <label>Title</label>
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.handleChange("title")}
                        /> 
                    <label>Body</label>
                        <input
                            type="textarea"
                            value={this.state.body}
                            onChange={this.handleChange("body")}
                        />
                    <button
                        value="submit"
                    >{this.props.formType} </button>
                    <Errors errors={this.props.errors}/>
                    </form> 

            </div>
        )
    }
}

export default QuestionForm;