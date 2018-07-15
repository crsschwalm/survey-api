import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Input from '../form/Input';
import EditableCheckBox from '../form/EditableCheckBox'
import { removeField, setQuestion, addOption, removeOption, setExpectedText, setExpectedOptions } from '../../actions/newSurveyActions'

class EditableField extends Component {
    render() {
        const { fieldType, options, question, index } = this.props;
        const { removeField, setQuestion, addOption, removeOption, setExpectedOptions, setExpectedText } = this.props;
        return (
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                </div>
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

                        <Input label={`Field: ${index}`} placeholder='What Question would you like to ask?' value={question} onChange={setQuestion} />
                        <br />
                        {fieldType === 'TextInput' ?
                            <Input placeholder='What do you expect them to say?' onChange={setExpectedText} /> :
                            <OptionField options={options} updateExpectedResponse={setExpectedOptions} addOption={addOption} removeOption={removeOption} />}
                    </div >
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    removeField: () => dispatch(removeField(props.index)),
    setQuestion: ({ target: { value } }) => dispatch(setQuestion(props.index, value)),
    addOption: (event) => {
        if (event.key === 'Enter' && !!event.target.value) {
            dispatch(addOption(props.index, event.target.value))
            event.target.value = '';
        }
    },
    removeOption: (value) => dispatch(removeOption(props.index, value)),
    setExpectedOptions: ({ target }) => dispatch(setExpectedOptions(props.index, target.value)),
    setExpectedText: ({ target }) => dispatch(setExpectedText(props.index, target.value))
}
)

const mapStateToProps = (state, ownProps) => {
    const { question, options, expectedResponse, fieldType } = state.newSurvey.fields[ownProps.index]
    return { question: question, options: { ...options }, expectedResponse: expectedResponse, fieldType: fieldType };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditableField);

export const OptionField = ({ options, addOption, removeOption, updateExpectedResponse }) => (
    <Fragment>
        <Input placeholder="e.g. Option 1" help='Add answer with "Enter"' onKeyPress={addOption} />
        {!!Object.keys(options).length ? <p><strong>Select the expected response</strong></p> : null}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'wrap' }}>
            {Object.keys(options).map(
                (value, index) =>
                    <div key={index} style={{ padding: '0 1rem' }}>
                        <EditableCheckBox value={value} type="EditableCheckBox" onChange={updateExpectedResponse} remove={() => removeOption(value)} />
                    </div>
            )}
        </div>
    </Fragment>
)