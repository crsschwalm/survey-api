import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/index';
import TakeSurvey from './pages/takeSurvey';
import ManageSurvey from './pages/manageSurvey';
import NewSurvey from './pages/newSurvey';
import NotFound from './pages/notFound';

const Routes = () => (
    <Router>
        <Fragment>
            <Header />
            <div className="container">
                <Route exact path="/" component={Home} />
                <Route exact path="/survey/:surveyId" component={TakeSurvey} />
                <Route exact path="/create" component={NewSurvey} />
                {/* <Route exact path="/manage/:surveyId" component={ManageSurvey} /> */}
                <Route component={NotFound} />
            </div>
            <Footer />
        </Fragment>
    </Router>
);

export default Routes;