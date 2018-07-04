import React, { Component } from 'react';

import logo from './logo.svg';

import './index.css';

class TakeSurvey extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Time to take a survey</h1>
                </header>
                <p className="App-intro">Heres a short description</p>
            </div>
        );
    }
}

export default TakeSurvey;
