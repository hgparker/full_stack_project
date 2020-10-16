import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {

    render() {
         
        const loginButton = this.props.loggedIn ? null :
                <Link
                    to="/login"
                >
                    <button className="loginButton">
                        Log in
                    </button>
                </Link>;

        const signUpButton = this.props.loggedIn ? null :
            <Link
                to="/signup"
            >
                <button className="signupButton">
                    Sign up
                </button>
            </Link>;

        const logoutButton = !this.props.loggedIn ? null :
            <button
                onClick={this.props.logout}
                className="logoutButton"
            >
                    Log out
            </button>;

        return (
            <div className="NavBar">
                <div className="LeftNavBar">
                    <Link
                        to="/"
                    >
                        <img src="./assets/babka.png"/> 
                    </Link>
                    <div className="LeftNavBarText">
                        babka overflow
                    </div>
                </div>
                <div className="RightNavBar">
                    {loginButton}
                    {signUpButton}
                    {logoutButton}
                </div>
            </div>
        );
    }
}

export default NavBar;


// this.props.loggedIn
// this.props.logout()
