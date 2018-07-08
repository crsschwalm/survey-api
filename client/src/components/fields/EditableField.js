import React, { Component, Fragment } from 'react';

export default class EditableField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '', options: {}, expectedResponse: ''
        }
    }
    updateQuestion = ({ target: { value } }) => this.setState({ question: value })
    addOption = (event) => {
        if (event.key === 'Enter' && !!event.target.value) {
            const options = this.state.options;
            options[event.target.value] = false
            this.setState({ options: options })
            event.target.value = '';
        }
    }

    removeOption = ({ target }) => {
        const options = this.state.options;
        delete options[target.value]
        this.setState({ options: options })
    }
    updateExpectedOptionResponse = ({ target }) => {
        const options = this.state.options;
        options[target.value] = target.checked;
        this.setState({ options: this.state.options })
    }
    updateExpectedTextResponse = ({ target }) =>
        this.setState({ expectedResponse: target.value })

    render() {
        const { fieldType } = this.props.field;
        const { question } = this.state;
        return (
            <div className="field">
                <h3><input placeholder='What Question would you like to ask?' value={question} onChange={this.updateQuestion} /></h3>
                <p>Field Type: <em>{fieldType}</em></p>
                {fieldType === 'TextInput' ?
                    <TextField {...this.state} updateExpectedResponse={this.updateExpectedTextResponse} /> :
                    <OptionField {...this.state} updateExpectedResponse={this.updateExpectedOptionResponse} addOption={this.addOption} removeOption={this.removeOption} />}
                <div>
                    <div onClick={this.props.onDelete}>Delete</div>
                </div>
            </div >
        )
    }
}

export const OptionField = ({ options, addOption, removeOption, updateExpectedResponse }) => (
    <Fragment>
        <input placeholder='add answer with "Enter"' onKeyPress={addOption} />
        {!!Object.keys(options).length ? <p><strong>Select the expected response</strong></p> : null}
        <p>
            {Object.keys(options).map(
                (value, index) =>
                    <Fragment>
                        <label key={index}>
                            {value}
                            <input value={value} type="checkbox" onChange={updateExpectedResponse} />

                        </label>
                        <span className="icon has-text-danger" onClick={removeOption} value={value}>
                            <i className="fas fa-ban"></i>
                        </span>
                    </Fragment>
            )}
        </p>
    </Fragment>
)
export const TextField = ({ updateExpectedResponse }) => (
    <Fragment>
        <input placeholder='What do you expect them to say?' onChange={updateExpectedResponse} />
    </Fragment>
)