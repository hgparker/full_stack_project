import React from 'react';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {fetched: false};
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId)
            .then(() => {
                this.setState({fetched: true});
            });
    }

    render() {
        if (!this.state.fetched)
            return (
                <h1> not fetched yet </h1> // change to spinner or something
            )
        else 
            return (
                <div>
                    {this.props.question.title} <p></p>
                    {this.props.question.body} <p></p>
                    {this.props.question.author_id} <p></p> 
                </div>
            );
    }
}

export default QuestionShow;