import React from 'react';
import { connect } from 'react-redux'
import Input from './form/Input';
import { setExpectedText, } from '../actions/manageSurveyActions'

const ManageInputField = ({ setExpectedText, expectedResponse }) =>
    <Input label="Answer" placeholder='What do you expect them to say?' onChange={setExpectedText} value={expectedResponse} />

const mapDispatchToProps = (dispatch, ownProps) => ({
    setExpectedText: value => dispatch(setExpectedText(ownProps.fieldIndex, value))
})

const mapStateToProps = (state, ownProps) => {
    return { ...state.manageSurvey.fields[ownProps.fieldIndex] }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageInputField);