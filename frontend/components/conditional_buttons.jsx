import React from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../actions/auth_actions';

export const conditionalLogin = (successCondition) => {
    if (!successCondition)
        return null
    return (
        <Link
            to="/login">
            <button className="ButtonStyle2">
                Log in
            </button>
        </Link>);
}

export const conditionalSignup = (successCondition) => {
    if (!successCondition)
        return null;
    return (
        <Link
            to="/signup"
        >
            <button className="ButtonStyle1">
                Sign up
            </button>
        </Link>
    );
}

export const conditionalLogout = (successCondition, dispatch) => {
    if (!successCondition)
        return null;
    return (
        <button
        onClick={() => dispatch(logout())}
        className="ButtonStyle2"
        >
            Log out
        </button>
    );
}

export const conditionalNewQuestion = (successCondition) => {
    if (!successCondition)
        return null;
    return (
    <Link to="/questions/ask">
        <button className="ButtonStyle1">
            Ask Question
        </button>
    </Link>);
}

export const conditionalDelete = (successCondition, callback) => {
    if (!successCondition)
        return null;
    return (
        <button
            className="ButtonStyle2"
            onClick = {callback}
        >
            Delete
        </button>
    );
}

export const conditionalButton = (successCondition, callback, buttonStyle, buttonText) => {
    if (!successCondition)
        return null;
    return (
        <button
            className={buttonStyle}
            onClick = {callback}
        >
            {buttonText}
        </button>
    );
}

export const conditionalLinkButton = (successCondition, buttonDestination, buttonStyle, buttonText) => {
    if (!successCondition)
        return null;
    return (
        <Link
        to={buttonDestination}
        >
            <button className={buttonStyle}>
                {buttonText}
            </button>
        </Link>       
    );
}