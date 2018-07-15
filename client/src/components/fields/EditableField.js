import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Input from '../form/Input';
import CheckBox from '../form/CheckBox'
import { removeField, setQuestion, addOption, removeOption, setExpectedText, setExpectedOptions } from '../../actions/newSurveyActions'

class EditableField extends Component {
    constructor(props) {
        super(props);
    }
    removeField = () =>
        this.props.dispatch(removeField(this.props.index))
    setQuestion = ({ target: { value } }) =>
        this.props.dispatch(setQuestion(this.props.index, value))

    addOption = (event) => {
        if (event.key === 'Enter' && !!event.target.value) {
            this.props.dispatch(addOption(this.props.index, event.target.value))
            event.target.value = '';
        }
    }
    removeOption = (value) =>
        this.props.dispatch(removeOption(this.props.index, value))

    setExpectedOptions = ({ target }) => this.props.dispatch(setExpectedOptions(this.props.index, target.value))
    setExpectedText = ({ target }) =>
        this.props.dispatch(setExpectedText(this.props.index, target.value))

    render() {
        const { fieldType, options, question, index } = this.props;
        return (
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                </div>
                <div className="field-body columns is-centered" style={{ padding: '1rem 0' }}>
                    <div className="box column is-half" style={{ position: 'relative' }}>
                        <button className="button is-danger is-inverted" style={{ position: 'absolute', top: 0, left: 0 }} onClick={this.removeField}>
                            <span className="icon has-text-danger">
                                <i className="fas fa-ban"></i>
                            </span>
                        </button>

                        <div className="field field-label is-normal" style={{ textAlign: 'center' }}>
                            <label className="label">Field Type: <em>{fieldType}</em></label>
                        </div>

                        <Input label={`Field: ${index}`} placeholder='What Question would you like to ask?' value={question} onChange={this.setQuestion} />
                        <br />
                        {fieldType === 'TextInput' ?
                            <Input placeholder='What do you expect them to say?' onChange={this.setExpectedText} /> :
                            <OptionField options={options} updateExpectedResponse={this.setExpectedOptions} addOption={this.addOption} removeOption={this.removeOption} />}
                    </div >
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { question, options, expectedResponse, fieldType } = state.newSurvey.fields[ownProps.index]
    return { question: question, options: { ...options }, expectedResponse: expectedResponse, fieldType: fieldType };
};

export default connect(mapStateToProps)(EditableField);

export const OptionField = ({ options, addOption, removeOption, updateExpectedResponse }) => (
    <Fragment>
        <Input placeholder='Add answer with "Enter"' onKeyPress={addOption} />
        {!!Object.keys(options).length ? <p><strong>Select the expected response</strong></p> : null}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'wrap' }}>
            {Object.keys(options).map(
                (value, index) =>
                    <div key={index} style={{ padding: '0 1rem' }}>
                        <span className="icon has-text-danger" onClick={() => removeOption(value)}>
                            <i className="fas fa-ban"></i>
                        </span>
                        <CheckBox value={value} type="checkbox" onChange={updateExpectedResponse} />
                    </div>
            )}
        </div>
    </Fragment>
)