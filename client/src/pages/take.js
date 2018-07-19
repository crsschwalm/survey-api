import React, { Component } from 'react';
import { validateSurveyAnswers } from '../services/validationService'
import SubmitForm from '../components/form/SubmitForm'
import Survey from '../components/Survey'

export default class Take extends Component {
    state = {
        answers: {}
    };
    validate = () => validateSurveyAnswers(this.state.answers)
    handleFieldChange = (fieldId, answer) => {
        const answers = this.state.answers;
        answers[fieldId] = answer;
        this.setState({ answers: answers });
    }
    handleSubmit = () => {
        const { match: { params } } = this.props;
        alert(`Survey: ${params.surveyId} \n ${this.state.answers}`)
    };
    handleCancel = () => alert('boohoo canceled!');
    render() {
        const { match: { params } } = this.props;
        return (
            <section className="container section">
                <Survey surveyId={params.surveyId} onFieldChange={this.handleFieldChange} />
                <SubmitForm onSubmit={this.handleSubmit} onCancel={this.handleCancel} isValid={this.validate()} />
            </section>
        )
    }
}