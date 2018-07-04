import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/index';
import TakeSurvey from './pages/takeSurvey';

const Routes = () => (
    <Router>
        <Fragment>
            <Header />
            <div className="container">
                <Route exact path="/" component={Home} />
                <Route exact path="/:surveyId" component={TakeSurvey} />
            </div>
            <Footer />
        </Fragment>
    </Router>
);

export default Routes;