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
            <div className="SessionBox1">
                <Link
                    to="/"
                >
                    <img src="/assets/babka.png"/> 
                </Link>

                    <form
                        className="SessionBox2"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="SessionFormBox">
                            <label>Email</label>
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleChange("email")}
                            /> 
                        </div>
                        <div className="SessionFormBox">
                            <label>Password</label>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange("password")}
                            />
                        </div>
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
                        <Errors errors={this.props.errors}/>
                    </form> 
                    <div> Don't have an account? <Link to="/signup">Sign Up</Link> </div>
            </div>
        )
    }
}

export default SessionForm;