import React from 'react';
import { connect } from 'react-redux'
import { validateSurveyForm } from '../services/validationService';
import { clearForm } from '../actions/manageSurveyActions';
import Loading from '../components/Loading'
import ManageInputs from '../components/ManageInputs'
import ManageFieldList from '../components/ManageFieldList'
import ManageDates from '../components/ManageDates'
import SubmitForm from '../components/form/SubmitForm'

const ManageSurvey = ({ manageSurvey, onSubmit, handleCancel }) => (
    <section className="container section">
        <Loading isLoading={manageSurvey.loading} />
        <ManageInputs />
        <ManageFieldList />
        <ManageDates />
        <SubmitForm onSubmit={onSubmit} onCancel={handleCancel} isValid={validateSurveyForm(manageSurvey)} />
    </section>
);

const mapStateToProps = state => ({ manageSurvey: state.manageSurvey })

const mapDispatchToProps = dispatch => ({
    clearForm: () => dispatch(clearForm()),
    handleCancel: () => getConfirmation() && dispatch(clearForm()) && goHome()
})

const goHome = () => window.location.replace('/');
const getConfirmation = () => window.confirm("You sure you wanna do that?");

export default connect(mapStateToProps, mapDispatchToProps)(ManageSurvey);