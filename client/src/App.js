import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/index';
import TakeSurvey from './pages/takeSurvey';
import Manage from './pages/manage';
import Create from './pages/create';
import NotFound from './pages/notFound';

const Routes = () => (
    <Router>
        <Fragment>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/survey/take/:surveyId" component={TakeSurvey} />
                <Route exact path="/survey/manage/:surveyId" component={Manage} />
                <Route exact path="/create" component={Create} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </Fragment>
    </Router>
);

export default Routes;