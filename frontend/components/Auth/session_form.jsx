import React from 'react';
import {Link} from 'react-router-dom';
import Errors from '../errors';

class SessionForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    componentDidMount() {
        this.props.clearAuthErrors();
    }

    handleDemoLogin(e) {
        e.preventDefault();
        this.props.login({email: "demodocus@demo.com", password: "demodemo"})
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
            <div className="SessionElements">
                <Link
                    to="/"
                >
                    <img src="/assets/babka.png"/> 
                </Link>
                <form
                    className="SessionForm"
                    onSubmit={this.handleSubmit}
                >
                    <div className="SessionFormLabel">Email</div>
                        <input
                            type="text"
                            className="SessionInput"
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                        /> 
                    <div className="SessionFormLabel"> Password</div>
                        <input
                            type="password"
                            className="SessionInput"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />
                    <Errors errors={this.props.errors}/>
                    <div className="SessionButtonRow">
                        <button
                            className = "ButtonStyle2"
                            value="submit"
                        >Log In </button>
                        <button
                            className = "ButtonStyle1"
                            onClick={this.handleDemoLogin}
                        >Demo </button>
                    </div>
                </form> 
                <div className="SessionNotice"> Don't have an account? <Link to="/signup">Sign Up</Link> </div>
            </div>
        )
    }
}

export default SessionForm;