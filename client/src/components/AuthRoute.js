import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />
    )}
)

export default AuthRoute;