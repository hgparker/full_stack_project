import React from 'react';
import {Route, Switch} from "react-router-dom";
import QuestionIndexContainer from "./questions/question_index_container";
import {OnlyLoggedOutRoute} from "../util/route_util"
import SessionFormContainer from "./Auth/session_form_container";
import SignupFormContainer from "./Auth/signup_form_container";
import NavBarContainer from "./NavBar/nav_bar_container";
import PageUnknown from './page_unknown';
import QuestionShowContainer from './questions/question_show_container';

const App = (props) => {
    return (
        <div>
            <NavBarContainer/>
            <Switch>
                <Route
                    exact path = "/" component={QuestionIndexContainer}
                />
                <Route
                    exact path = "/questions" component={QuestionIndexContainer}
                />
                <Route
                    path = "/questions/:questionId" component={QuestionShowContainer}
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

