import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import SurveyCard from '../components/SurveyCard';
import AsyncList from '../components/AsyncList'

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Intro />
                <section className="section">
                    <div className="container section">
                        <div className="columns is-centered">
                            <div className="column is-three-quarters is-narrow">
                                <AsyncList
                                    url="/api/survey/all"
                                    render={({ list, isLoading }) => (
                                        <div>
                                            <h2 style={{ textAlign: 'left' }}>Open Surveys:</h2>
                                            {isLoading ? <h2>Loading...</h2> :
                                                list.map((survey, index) => (
                                                    <SurveyCard survey={survey} key={index} />
                                                ))}
                                        </div>
                                    )} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const Intro = () => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
    </header>
)

export default Home;