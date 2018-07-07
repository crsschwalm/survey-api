import React, { Component } from 'react';
//import ManageOptions from './ManageOptions'

export default class ManageField extends Component {
    constructor(props) {
        super(props)
        const hasIncomingField = !!this.props.field;
        this.state = hasIncomingField ? this.props.field : { fieldType: '', question: '', options: [] }
        this.addOptions = this.addOptions.bind(this)
    }
    handleTextChange = (event) => this.setState({ question: event.target.value });
    handleSelectChange = (event) => this.setState({ fieldType: event.target.value, options: [] });
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveField(this.state);
        this.setState({ fieldType: '', question: '' })
    }
    isDisabled = () => {
        const allValid = Object.values(this.state).every(isNotEmpty);
        return allValid ? false : 'disabled';
    }
    addOptions = (options) => this.setState({ options: options })

    showOptions = () => this.state.fieldType === 'checkAll' || this.state.fieldType === 'selectFrom'
    render() {
        return (
            <div>
                <div className="field">
                    <div className="control">
                        <input className="input is-info" type="text" placeholder="Write your question" value={this.state.question} onChange={this.handleTextChange} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <div className="select is-info">
                            <select value={this.state.fieldType} onChange={this.handleSelectChange}>
                                <option value="">Please Select a Field Type</option>
                                <option value="selectFrom">Select From</option>
                                <option value="checkAll">Check All</option>
                                <option value="textInput">Text Input</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* {this.showOptions() ? <ManageOptions onSubmit={this.addOptions} /> : null} */}
                <div className="field">
                    <div className="control">
                        <button className="button is-link" type="submit" disabled={this.isDisabled()} onClick={this.handleSubmit}>
                            Lets Do it!
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const isNotEmpty = (something) => !!something && something.length !== 0