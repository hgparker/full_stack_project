import React from 'react';
import {Link} from 'react-router-dom';
import Errors from '../errors';

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

    componentDidMount() {
        this.props.clearAuthErrors();
    }

    handleSubmit(e) {
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
            <div className="SignupBox1">
                <div>
                    Create your own Babka Overflow account. It's free and only takes a minute.
                </div>
                <form
                    className="SignupBox2"
                    onSubmit={this.handleSubmit}
                >
                    <div className="SignupFormBox">
                    <label>Email</label> 
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange("email")}
                    />
                    </div>
                    <div className="SignupFormBox">
                        <label>Display name</label>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange("username")}
                        />
                    </div>
                    <div className="SignupFormBox">
                        <label>Password</label>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />
                    </div>

                    <button
                        className="ButtonStyle1"
                        value="submit"
                    >
                        Sign up
                    </button>
                    <Errors errors={this.props.errors}/>
                </form>
                <div> Already have an account? <Link to="/login">Log in</Link></div> 
            </div>
        )
    }
}

export default UserForm;