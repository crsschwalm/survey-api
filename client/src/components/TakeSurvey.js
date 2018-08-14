import React, { Fragment } from 'react';
import Questions from './Questions'
import { connect } from 'react-redux'
import { clearResponses, submitResponse } from '../actions/takeSurveyActions';
import SubmitForm from '../components/form/SubmitForm'
import { validateSurveyResponses } from '../services/validationService'

const TakeSurvey = ({ takeSurvey: { responses }, submitResponse, handleCancel }) => (
    <Fragment>
        <Questions />
        <SubmitForm onSubmit={submitResponse} onCancel={handleCancel} isValid={validateSurveyResponses(responses)} />
    </Fragment>
);

const mapStateToProps = state => ({ takeSurvey: state.takeSurvey })

const mapDispatchToProps = dispatch => ({
    submitResponse: () => dispatch(submitResponse()),
    handleCancel: () => getConfirmation() && dispatch(clearResponses()) && goHome()
})

const goHome = () => window.location.replace('/');
const getConfirmation = () => window.confirm("You sure you wanna do that?");

export default connect(mapStateToProps, mapDispatchToProps)(TakeSurvey);