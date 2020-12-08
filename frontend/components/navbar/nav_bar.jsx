import React from 'react';
import {Link, withRouter} from 'react-router-dom';

// import Dropdown from "./dropdown";

import {conditionalLogin, conditionalSignup, conditionalLogout} from '../conditional_buttons';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchString: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        // e.preventDefault();
        this.props.history.push(`/search/${this.state.searchString}`);
        // this.props.fetchQuestions(this.state.searchString)
        // this.props.history.replace(this.state.searchString);
    }

    handleChange(e) {
        this.setState({searchString: e.currentTarget.value});
    }

    render() {
        let {currentUsername, loggedIn} = this.props;

        return (
            <div className="NavBar">
                <Link className="LeftNavBar"
                    to={loggedIn ? "/questions" : "/"}
                >
                    <img src="/assets/babka.png"/> 
                    <div className="LeftNavBarText">
                        babka overflow
                    </div>
                </Link>
                <Link className="MiddleNavBar"
                    to="/questions"
                >
                    <div className="MiddleNavBarText">
                    Questions
                    </div>
                </Link>
                <div className="RightNavBar">
                    <form className="NavSearchBar"
                        onSubmit={this.handleSubmit}
                    >
                        <input
                            className="NavSearchInput"
                            type="search"
                            placeholder="Search"
                            value={this.state.searchString}
                            onChange={this.handleChange}
                        />
                    </form>
                        {conditionalLogin(!loggedIn)}
                        {conditionalSignup(!loggedIn)}
                        {!loggedIn ? null :
                            <div className="NavUsernameBox">
                                <div className="NavUsernameText"> {currentUsername}</div> 
                            </div>
                        }
                        {conditionalLogout(loggedIn, this.props.dispatch)}
                        {/* {!loggedIn ? null :
                            <Dropdown/>
                        } */}
                    </div>
            </div>
        );
    }
}

export default withRouter(NavBar);