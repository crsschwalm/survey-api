import React, { Component } from 'react';
import EditableField from '../components/fields/EditableField'
import { connect } from 'react-redux'
import { validateNewSurvey } from '../services/validationService';
import { updateName, updateDescription, addField, updateStartDate, updateEndDate, submit, clear } from '../actions/newSurveyActions'

const flexyStyle = { display: 'flex', justifyContent: 'space-around' }

class NewSurvey extends Component {
    addField = (fieldType) =>
        this.props.dispatch(addField(fieldType));
    handleNameChange = ({ target: { value } }) => this.props.dispatch(updateName(value));
    handleDescriptionChange = ({ target: { value } }) => this.props.dispatch(updateDescription(value));
    handleStartChange = ({ target: { value } }) => this.props.dispatch(updateStartDate(value));
    handleEndChange = ({ target: { value } }) => this.props.dispatch(updateEndDate(value));
    handleSubmit = () =>
        this.props.dispatch(submit())
    handleCancel = () => window.confirm("Are you sure you want to clear the new survey you're working on?") && this.props.dispatch(clear())


    render() {
        const { name, description, author, fields, startDate, endDate } = this.props.newSurvey;
        return (
            <section className="container section">
                <h1 className="title">Create Survey</h1>
                <h2 className="subtitle">{`${fields.length} - fields`}</h2>
                <div className="columns is-left-aligned">
                    <div className="column is-narrow">
                        <ol>
                            <li><input value={name} onChange={this.handleNameChange} className="input" type="text" placeholder="What would you say..." /></li>
                            <li><textarea value={description} onChange={this.handleDescriptionChange} className="textarea" placeholder="e.g. We want to know more about you!"></textarea>
                            </li>
                            {!!author ? <li>{`Author: ${author}`}</li> : null}
                            <li>
                                <CurrentFields fields={fields} />
                                <NewFieldButtons addField={this.addField} />
                            </li>
                            <li><input value={startDate} onChange={this.handleStartChange} id="start-date-picker" className="input" type="date" /></li>
                            <li><input value={endDate} onChange={this.handleEndChange} id="end-date-picker" className="input" type="date" /></li>
                            <SubmitSurvey onSubmit={this.handleSubmit} onCancel={this.handleCancel} isValid={validateNewSurvey(this.props.newSurvey)} />
                        </ol>
                    </div>
                </div>
            </section>
        );
    }
}

const CurrentFields = ({ fields }) => (
    <ul>
        {fields.map((field, index) => (
            <li key={index} style={flexyStyle}>
                <EditableField index={index} />
            </li>
        ))}
    </ul>
)

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

const NewFieldButtons = ({ addField }) => (
    <div className="media-content" style={flexyStyle}>
        <span
            onClick={() => addField('TextInput')}
            className="button is-medium level-item"
        >
            Add Text Input
            </span>
        <span
            onClick={() => addField('CheckAll')}
            className="button is-medium level-item"
        >
            Add Check All Field
            </span>
        <span
            onClick={() => addField('SelectFrom')}
            className="button is-medium level-item"
        >
            Add Select From Field
            </span>
    </div>
)

const mapStateToProps = (state) => {
    return { newSurvey: state.newSurvey };
};

export default connect(mapStateToProps)(NewSurvey);