import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.currentUserId)
    }
}

const OnlyLoggedOut = ({component: Component, path, loggedIn}) => {
    return (
        <Route
            path={path}
            render= {
                (props) => {
                    return (
                        loggedIn ? <Redirect to="/"/> : <Component {...props}/>
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