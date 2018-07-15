import React, { Component } from 'react';
import EditableFieldsList from '../components/fields/EditableFieldsList'
import SubmitForm from '../components/form/SubmitForm'
import NewFieldButtons from '../components/form/NewFieldButtons'
import Input from '../components/form/Input'
import TextArea from '../components/form/TextArea'
import DatePicker from '../components/form/DatePicker'
import Header from '../components/form/Header'
import { connect } from 'react-redux'
import { validateNewSurvey } from '../services/validationService';
import { updateName, updateDescription, addField, updateStartDate, updateEndDate, submit, clear } from '../actions/newSurveyActions'

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
                <Header heading='Create New Survey' subheading={`Field count: ${fields.length}`} />
                {!!author ? <em>{`Author: ${author}`}</em> : null}
                <Input label="Survey Name" value={name} placeholder="What would you say..." onChange={this.handleNameChange} />
                <TextArea label="Description" value={description} onChange={this.handleDescriptionChange} placeholder="e.g. We want to know more about you!" />
                <EditableFieldsList fields={fields} />
                <NewFieldButtons addField={this.addField} />
                <DatePicker label='Start Date' value={startDate} onChange={this.handleStartChange} />
                <DatePicker label='End Date' value={endDate} onChange={this.handleEndChange} />
                <SubmitForm onSubmit={this.handleSubmit} onCancel={this.handleCancel} isValid={validateNewSurvey(this.props.newSurvey)} />
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return { newSurvey: state.newSurvey };
};

export default connect(mapStateToProps)(NewSurvey);