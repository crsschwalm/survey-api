import React, { Fragment } from 'react';
import DatePicker from '../form/DatePicker'
import { connect } from 'react-redux'
import {
    setStartDate, setEndDate
} from '../../actions/manageSurveyActions';


const ManageInputs = ({ setStartDate, setEndDate, manageSurvey: { startDate, endDate } }) => (
    <Fragment>
        <DatePicker label='Start Date' value={startDate} onChange={setStartDate} />
        <DatePicker label='End Date' value={endDate} onChange={setEndDate} />
    </Fragment>
);
const mapStateToProps = state => ({ manageSurvey: state.manageSurvey })

const mapDispatchToProps = dispatch => ({
    setStartDate: ({ target: { value } }) => dispatch(setStartDate(value)),
    setEndDate: ({ target: { value } }) => dispatch(setEndDate(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageInputs);