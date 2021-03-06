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
            <div className="SignupElements">
                <div className="SignupDirections">
                    Create your own Babka Overflow account. It's free and only takes a minute.
                </div>
                <form
                    className="SignupForm"
                    onSubmit={this.handleSubmit}
                >
                    <div className="SignupFormLabel">Email</div>
                    <input
                        className="SignupInput"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange("email")}
                    />
                    <div className="SignupFormLabel">Display name</div>
                    <input
                        className="SignupInput"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange("username")}
                    />
                    <div className="SignupFormLabel">Password</div>
                    <input
                        className="SignupInput"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange("password")}
                    />
                    <Errors errors={this.props.errors}/>
                   <div className="SignupButtonRow">
                        <button
                            className="ButtonStyle1"
                            value="submit"
                        >
                            Sign up
                        </button>
                   </div>
                </form>
                <div className="SignupNotice"> Already have an account? <Link to="/login">Log in</Link></div> 
            </div>
        )
    }
}

export default UserForm;