import React, { Fragment } from 'react';
import Questions from './Questions'
import { connect } from 'react-redux'
import { clearResponses, submitSurvey } from '../actions/takeSurveyActions';
import SubmitForm from '../components/form/SubmitForm'
import { validateSurveyAnswers } from '../services/validationService'

const TakeSurvey = ({ takeSurvey: { answers }, submitSurvey, handleCancel }) => (
    <Fragment>
        <Questions />
        <SubmitForm onSubmit={submitSurvey} onCancel={handleCancel} isValid={validateSurveyAnswers(answers)} />
    </Fragment>
);

const mapStateToProps = state => ({ takeSurvey: state.takeSurvey })

const mapDispatchToProps = dispatch => ({
    submitSurvey: () => dispatch(submitSurvey()),
    handleCancel: () => getConfirmation() && dispatch(clearResponses()) && goHome()
})

const goHome = () => window.location.replace('/');
const getConfirmation = () => window.confirm("You sure you wanna do that?");

export default connect(mapStateToProps, mapDispatchToProps)(TakeSurvey);