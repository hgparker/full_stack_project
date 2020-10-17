import React from 'react';
import {Route, Switch} from "react-router-dom";
import QuestionIndex from "./question_index";
import {OnlyLoggedOutRoute} from "../util/route_util"
import SessionFormContainer from "./Auth/session_form_container";
import SignupFormContainer from "./Auth/signup_form_container";
import NavBarContainer from "./NavBar/nav_bar_container";
import PageUnknown from './page_unknown';

const App = (props) => {
    return (
        <div>
            <NavBarContainer/>
            <Switch>
                <Route
                    exact path = "/" component={QuestionIndex}
                />
                <OnlyLoggedOutRoute
                    path="/login"
                    component={SessionFormContainer}
                />
                <OnlyLoggedOutRoute
                    path="/signup"
                    component={SignupFormContainer}
                />
                <Route component={PageUnknown}/>
            </Switch>
        </div>
    );
}

export default App;

