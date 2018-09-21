import React, { Component } from 'react';
import { connect } from 'react-redux'
import Input from '../form/Input';
import OptionField from './OptionField';
import InputField from './InputField';
import { setQuestion } from '../../actions/manageSurveyActions'

const Field = ({ fieldType, question, index, removeField, setQuestion }) => (
    <div className="field is-horizontal">
        <div className="field-label is-normal" />
        <div className="field-body columns is-centered" style={{ padding: '1rem 0' }}>
            <div className="box column is-three-quarters" style={{ position: 'relative' }}>
                <button className="button is-danger is-inverted" style={{ position: 'absolute', top: 0, left: 0 }} onClick={removeField}>
                    <span className="icon has-text-danger">
                        <i className="fas fa-ban"></i>
                    </span>
                </button>

                <div className="field field-label is-normal" style={{ textAlign: 'center' }}>
                    <label className="label">Field Type: <em>{fieldType}</em></label>
                </div>

                <Input label={`Field: ${index + 1}`} placeholder='What Question would you like to ask?' value={question} onChange={setQuestion} />
                <br />
                {fieldType === 'TextInput' ?
                    <InputField fieldIndex={index} /> :
                    <OptionField fieldIndex={index} />}
            </div >
        </div>
    </div >
)

const mapDispatchToProps = (dispatch, ownProps) => ({
    setQuestion: value => dispatch(setQuestion(ownProps.index, value))
})

const mapStateToProps = (state, ownProps) => ({ ...state.manageSurvey.fields[ownProps.index] })

export default connect(mapStateToProps, mapDispatchToProps)(Field);

