import React from 'react';
import {Link} from 'react-router-dom';
import {conditionalLogin, conditionalSignup, conditionalLogout} from '../conditional_buttons';

class NavBar extends React.Component {

    render() {
        return (
            <div className="NavBar">
                <div className="LeftNavBar">
                    <Link
                        to="/"
                    >
                        <img src="/assets/babka.png"/> 
                    </Link>
                    <div className="LeftNavBarText">
                        babka overflow
                    </div>
                </div>
                <div className="RightNavBar">
                    {conditionalLogin(!this.props.loggedIn)}
                    {conditionalSignup(!this.props.loggedIn)}
                    {conditionalLogout(this.props.loggedIn, this.props.dispatch)}
                </div>
            </div>
        );
    }
}

export default NavBar;