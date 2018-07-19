import React from 'react';
import { connect } from 'react-redux'
import Input from './form/Input';
import { setExpectedText, } from '../actions/manageSurveyActions'

const ManageInputField = ({ setExpectedText, expectedResponse }) =>
    <Input label="Answer" placeholder='What do you expect them to say?' onChange={setExpectedText} value={expectedResponse} />

const mapDispatchToProps = (dispatch, ownProps) => ({
    setExpectedText: ({ target }) => dispatch(setExpectedText(ownProps.fieldIndex, target.value))
})

const mapStateToProps = (state, ownProps) => {
    return { ...state.manageSurvey.fields[ownProps.fieldIndex] }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageInputField);