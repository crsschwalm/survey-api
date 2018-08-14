import React from 'react';
import { connect } from 'react-redux'
import { validateSurveyForm } from '../../services/validationService';
import { clearSurvey } from '../../actions/manageSurveyActions';
import Loading from '../Loading'
import About from './About'
import FieldList from './FieldList'
import Dates from './Dates'
import SubmitForm from '../form/SubmitForm'

const ManageSurvey = ({ manageSurvey, onSubmit, handleCancel }) => (
    <section className="container section">
        <Loading isLoading={manageSurvey.loading} />
        <About />
        <FieldList />
        <Dates />
        <SubmitForm onSubmit={onSubmit} onCancel={handleCancel} isValid={validateSurveyForm(manageSurvey)} />
    </section>
);

const mapStateToProps = state => ({ manageSurvey: state.manageSurvey })

const mapDispatchToProps = dispatch => ({
    clearSurvey: () => dispatch(clearSurvey()),
    handleCancel: () => getConfirmation() && dispatch(clearSurvey()) && goHome()
})

const goHome = () => window.location.replace('/');
const getConfirmation = () => window.confirm("You sure you wanna do that?");

export default connect(mapStateToProps, mapDispatchToProps)(ManageSurvey);