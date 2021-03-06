import React from 'react';
import {Route, Switch} from "react-router-dom";
import {OnlyLoggedInRoute, OnlyLoggedOutRoute} from "../util/route_util"

import AllQuestionsContainer from "./questions/all_questions_container";
import SessionFormContainer from "./auth/session_form_container";
import SignupFormContainer from "./auth/signup_form_container";
import NavBarContainer from "./navbar/nav_bar_container";
import PageUnknown from './page_unknown';
import QuestionShowContainer from './questions/question_show_container';
import EditQuestionFormContainer from './questions/edit_question_form_container';
import SearchQuestionsContainer from "./questions/search_questions_container";
import Footer from "./footer";
import Splash from "./splash";
import NewQuestion from './questions/new_question';

const App = (props) => {
    return (
        <div>
            <NavBarContainer/>
            <Switch>
                <OnlyLoggedInRoute
                    exact path="/questions/ask"
                    component={NewQuestion}
                />
                <OnlyLoggedInRoute
                    path="/questions/:questionId/edit"
                    component={EditQuestionFormContainer}
                />
                <Route
                    exact path = "/questions" component={AllQuestionsContainer}
                />
                <Route
                    path = "/questions/:questionId" component={QuestionShowContainer}
                />
                <Route
                    path = "/search/:searchString" component={SearchQuestionsContainer}
                />
                <OnlyLoggedOutRoute
                    path="/login"
                    component={SessionFormContainer}
                />
                <OnlyLoggedOutRoute
                    path="/signup"
                    component={SignupFormContainer}
                />
                <OnlyLoggedOutRoute
                    path="/"
                    component={Splash}
                />
                <Route component={PageUnknown}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;

