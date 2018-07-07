import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import SurveyList from '../components/SurveyList';

class Home extends Component {
    state = {
        response: []
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/survey/all');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <section className="section">
                    <div className="container section">
                        <div className="columns is-centered">
                            <div className="column is-three-quarters is-narrow">
                                <SurveyList surveys={this.state.response} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;