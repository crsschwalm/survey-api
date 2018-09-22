import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthRoute from './components/AuthRoute'
import AppContainer from './components/AppContainer'
import Home from './pages/index';
import Take from './pages/take';
import Manage from './pages/manage';
import Create from './pages/create';
import Login from './pages/login';
import Register from './pages/register';
import NotFound from './pages/notFound';

const Routes = () => (
    <Router>
        <AppContainer>
            <Switch>
                <AuthRoute exact path="/" component={Home} />
                <AuthRoute exact path="/survey/take/:surveyId" component={Take} />
                <AuthRoute exact path="/survey/manage/:surveyId" component={Manage} />
                <AuthRoute exact path="/create" component={Create} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route component={NotFound} />
            </Switch>
        </AppContainer>
    </Router>
);

export default Routes;