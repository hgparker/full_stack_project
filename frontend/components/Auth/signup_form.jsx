import React from 'react';

class UserForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.signup(this.state)
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
                Sign Up Form
                <form
                    onSubmit={this.handleSubmit}
                >
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange("email")}
                        placeholder="Email address"
                    />
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange("username")}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange("password")}
                        placeholder="Email address"
                    />
                    <button
                        value="submit"
                    >
                        Create Account
                    </button>
                </form>
            </label>
        )
    }
}

export default UserForm;