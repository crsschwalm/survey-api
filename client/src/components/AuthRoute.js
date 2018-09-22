import React from "react";
import { connect } from 'react-redux'
import { Route } from "react-router-dom";
import Login from '../pages/login';

const AuthRoute = ({ component, auth, ...restProps }) => <Route {...restProps} component={
    !!auth.loggedIn ? component : Login
} />

const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps)(AuthRoute);