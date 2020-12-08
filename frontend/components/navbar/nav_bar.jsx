import React from 'react';
import {Link, withRouter} from 'react-router-dom';
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
        return (
            <div className="NavBar">
                <Link className="LeftNavBar"
                    to={this.props.loggedIn ? "/questions" : "/"}
                >
                    <img src="/assets/babka.png"/> 
                    <div className="LeftNavBarText">
                        babka overflow
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
                        {conditionalLogin(!this.props.loggedIn)}
                        {conditionalSignup(!this.props.loggedIn)}
                        {conditionalLogout(this.props.loggedIn, this.props.dispatch)}
                    </div>
            </div>
        );
    }
}

export default withRouter(NavBar);