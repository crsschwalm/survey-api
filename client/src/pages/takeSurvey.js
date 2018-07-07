import React, { Component } from 'react';
import FieldList from '../components/fields/FieldList'

export default class TakeSurvey extends Component {
    state = {
        answers: {}
    };

    handleFieldChange = (fieldId, answer) => {
        const answers = this.state.answers;
        answers[fieldId] = answer;
        this.setState({ answers: answers });
    }

    handleSubmit = () => {
        const { match: { params } } = this.props;
        console.log(this.state.answers)
        alert(`Survey: ${params.surveyId} \n ${this.state.answers}`)
    };
    handleCancel = () => alert('boohoo canceled!');
    render() {
        const { match: { params } } = this.props;
        return (
            <section className="container section">
                <div className="columns is-left-aligned">
                    <div className="column is-narrow">
                        <div className="field">
                            <FieldList surveyId={params.surveyId} onFieldChange={this.handleFieldChange} />
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
}