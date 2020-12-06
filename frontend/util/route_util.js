import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {loggedIn} from '../selectors/auth_selectors'

const mapStateToProps = (state) => {
    return {
        loggedIn: loggedIn(state)
    }
}

const OnlyLoggedOut = ({component: Component, path, loggedIn}) => {
    return (
        <Route
            path={path}
            render= {
                (props) => {
                    return (
                        loggedIn ? <Redirect to="/questions"/> : <Component {...props}/>
                    )
                }
            }
        />
    );
}

const OnlyLoggedIn = ({component: Component, path, loggedIn}) => {
    return (
        <Route
            path={path}
            render= {
                (props) => {
                    return (
                        loggedIn ? <Component {...props}/> : <Redirect to="/"/>
                    )
                }
            }            
        />
    );
}

export const OnlyLoggedOutRoute = withRouter(connect(mapStateToProps)(OnlyLoggedOut));
export const OnlyLoggedInRoute = withRouter(connect(mapStateToProps, undefined)(OnlyLoggedIn));