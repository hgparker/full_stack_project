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
                <h1> Loading... </h1>
            )
        else 
            return (
                <div>
                    Title: {this.props.question.title} 
                    Body: {this.props.question.body} 
                    Author id: {this.props.question.author_id} 
                </div>
            );
    }
}

export default QuestionShow;