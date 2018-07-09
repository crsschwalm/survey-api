import React, { Component } from 'react';
import ManageField from '../components/fields/ManageField'
import EditableField from '../components/fields/EditableField'
import { connect } from 'react-redux'
import { addField } from '../actions/newSurveyActions'

const flexyStyle = { display: 'flex', justifyContent: 'space-around' }

class NewSurvey extends Component {
    addField = (fieldType) => {
        this.props.dispatch(addField(fieldType))
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
        const { fields } = this.props.newSurvey;
        return (
            <section className="container section">
                <h1 className="title">Create Survey</h1>
                <h2 className="subtitle">{`${fields.length} - fields`}</h2>
                <div className="columns is-left-aligned">
                    <div className="column is-narrow">
                        <EditableFields fields={fields} onDelete={this.removeField} />
                        <NewFieldButtons onClick={this.addField} />
                        <SubmitSurvey onSubmit={this.handleSubmit} onCancel={this.handleCancel} />
                    </div>
                </div>
            </section>
        );
    }
}

const SubmitSurvey = ({ onSubmit, onCancel }) => (
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
            //disabled={isValid ? false : true}
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



// start of code change
const mapStateToProps = (state) => {
    return { newSurvey: state.newSurvey };
};

export default connect(mapStateToProps)(NewSurvey);

