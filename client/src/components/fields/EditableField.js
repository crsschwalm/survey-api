import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { removeField, updateQuestion, addOption, removeOption, updateExpectedTextResponse, updateExpectedOptionResponse } from '../../actions/newSurveyActions'

class EditableField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '', options: {}, expectedResponse: ''
        }
    }
    removeField = () =>
        this.props.dispatch(removeField(this.props.index))
    updateQuestion = ({ target: { value } }) => {
        this.setState({ question: value })
        this.props.dispatch(updateQuestion(this.props.index, value))
    }

    addOption = (event) => {
        if (event.key === 'Enter' && !!event.target.value) {
            this.props.dispatch(addOption(this.props.index, event.target.value))
            event.target.value = '';
        }
    }
    removeOption = ({ target: { value } }) =>
        this.props.dispatch(removeOption(this.props.index, value))

    updateExpectedOptionResponse = ({ target }) => this.props.dispatch(updateExpectedOptionResponse(this.props.index, target.value))
    updateExpectedTextResponse = ({ target }) =>
        this.props.dispatch(updateExpectedTextResponse(this.props.index, target.value))

    render() {
        const { fieldType, options, question } = this.props;
        return (
            <div className="field">
                <h3><input placeholder='What Question would you like to ask?' value={question} onChange={this.updateQuestion} /></h3>
                <p>Field Type: <em>{fieldType}</em></p>
                {fieldType === 'TextInput' ?
                    <TextField updateExpectedResponse={this.updateExpectedTextResponse} /> :
                    <OptionField options={options} updateExpectedResponse={this.updateExpectedOptionResponse} addOption={this.addOption} removeOption={this.removeOption} />}
                <span className="icon has-text-danger" onClick={this.removeField}>
                    <i className="fas fa-ban"></i>
                </span>
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
        <input placeholder='add answer with "Enter"' onKeyPress={addOption} />
        {!!Object.keys(options).length ? <p><strong>Select the expected response</strong></p> : null}
        <Fragment>
            {Object.keys(options).map(
                (value, index) =>
                    <div key={index}>
                        <label>
                            <input value={value} type="checkbox" onChange={updateExpectedResponse} />
                            {value}
                        </label>
                        <span className="icon has-text-danger" onClick={removeOption} value={value}>
                            <i className="fas fa-ban"></i>
                        </span>
                    </div>
            )}
        </Fragment>
    </Fragment>
)
export const TextField = ({ updateExpectedResponse }) => (
    <Fragment>
        <input placeholder='What do you expect them to say?' onChange={updateExpectedResponse} />
    </Fragment>
)