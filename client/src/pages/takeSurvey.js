import React, { Component } from 'react';
import { determineField } from '../services/fieldService';

export default class TakeSurvey extends Component {
    state = {
        response: { fields: [] }
    };

    componentDidMount() {
        const { match: { params } } = this.props;
        this.callApi(params.surveyId)
            .then(res => this.setState({ response: res.survey }))
            .catch(err => console.log(err));
    }

    callApi = async (surveyId) => {
        const response = await fetch(`/api/getExampleSurvey/${surveyId}`);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    renderFields = () => this.state.response.fields.map(determineField);
    handleSubmit = () => alert('woohoo logged!');
    handleCancel = () => alert('boohoo canceled!');
    render = () => (
        <section className="container section">
            <div className="columns is-left-aligned">
                <div className="column is-narrow">
                    <div className="field">
                        {this.renderFields()}
                        <div className="field is-grouped is-grouped-centered">
                            <p className="control">
                                <a onClick={this.handleSubmit} className="button is-primary">
                                    Submit
                                </a>
                            </p>
                            <p className="control">
                                <a onClick={this.handleCancel} className="button is-light">
                                    Cancel
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}