import React, { Component } from 'react';
import ManageField from '../components/fields/ManageField'
import EditableField from '../components/fields/EditableField'

const flexyStyle = { display: 'flex', justifyContent: 'space-around' }

export default class NewSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = { fields: [], valid: false };
    }

    addField = (fieldType) => {
        this.state.fields.push({ fieldType: fieldType })
        this.setState({ fields: this.state.fields });
    }

    removeField = (fieldIndex) => {
        const fieldsToKeep = this.state.fields.filter((field, index) => fieldIndex !== index)
        this.setState({ fields: fieldsToKeep });
    }

    handleSubmit = () =>
        alert('woohoo logged!');


    handleCancel = () =>
        alert('boohoo canceled!');


    render() {
        const fieldCount = this.state.fields.length;
        return (
            <section className="container section">
                <h1 className="title">Create Survey</h1>
                <h2 className="subtitle">{`${fieldCount} - fields`}</h2>
                <div className="columns is-left-aligned">
                    <div className="column is-narrow">
                        <EditableFields fields={this.state.fields} onDelete={this.removeField} />
                        <NewFieldButtons onClick={this.addField} />
                        <SubmitSurvey onSubmit={this.handleSubmit} onCancel={this.handleCancel} isValid={this.state.isValid} />
                    </div>
                </div>
            </section>
        );
    }
}

const SubmitSurvey = ({ onSubmit, onCancel, isValid }) => (
    <form className="media-content" style={flexyStyle} onSubmit={onSubmit}>
        <input
            type="button"
            onClick={onCancel}
            className="button is-medium level-item"
            value="Cancel"
        />
        <input
            type="submit"
            className="button is-medium level-item"
            disabled={isValid ? false : true}
            value="Submit"
        />
    </form>
)

const NewFieldButtons = ({ onClick }) => (
    <div className="media-content" style={flexyStyle}>
        <span
            onClick={() => onClick('TextInput')}
            className="button is-medium level-item"
        >
            Add Text Input
            </span>
        <span
            onClick={() => onClick('CheckAll')}
            className="button is-medium level-item"
        >
            Add Check All Field
            </span>
        <span
            onClick={() => onClick('SelectFrom')}
            className="button is-medium level-item"
        >
            Add Select From Field
            </span>
    </div>
)

const EditableFields = ({ fields, onDelete }) => (<ul>{fields.map((field, index) => (
    <li key={index} style={flexyStyle}>
        <EditableField field={field} onDelete={() => onDelete(index)} />
    </li>
))}</ul>)





