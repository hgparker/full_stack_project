import React from 'react';

class SessionForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
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
            <label>
                Sign In
                <form
                    onSubmit={this.handleSubmit}
                >
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange("email")}
                    />
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange("password")}
                    />
                    <button
                        value="submit"
                    >
                        Log In
                    </button>
                </form>
            </label>
        )
    }
}

export default SessionForm;