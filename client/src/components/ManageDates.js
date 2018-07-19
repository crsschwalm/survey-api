import React, { Fragment } from 'react';
import DatePicker from '../components/form/DatePicker'
import { connect } from 'react-redux'
import {
    updateStartDate, updateEndDate
} from '../actions/manageSurveyActions';


const ManageInputs = ({ handleStartChange, handleEndChange, manageSurvey: { startDate, endDate } }) => (
    <Fragment>
        <DatePicker label='Start Date' value={startDate} onChange={handleStartChange} />
        <DatePicker label='End Date' value={endDate} onChange={handleEndChange} />
    </Fragment>
);
const mapStateToProps = state => ({ manageSurvey: state.manageSurvey })

const mapDispatchToProps = dispatch => ({
    handleStartChange: ({ target: { value } }) => dispatch(updateStartDate(value)),
    handleEndChange: ({ target: { value } }) => dispatch(updateEndDate(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageInputs);