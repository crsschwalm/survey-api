import React, { Component } from 'react';
import EditableFieldsList from '../components/fields/EditableFieldsList'
import SubmitForm from '../components/form/SubmitForm'
import NewFieldButtons from '../components/form/NewFieldButtons'
import Input from '../components/form/Input'
import TextArea from '../components/form/TextArea'
import DatePicker from '../components/form/DatePicker'
import HeadLine from '../components/form/HeadLine'
import ReadOnly from '../components/form/ReadOnly'
import { connect } from 'react-redux'
import { validateNewSurvey } from '../services/validationService';
import { updateName, updateDescription, addField, updateStartDate, updateEndDate, clear } from '../actions/newSurveyActions';

class NewSurvey extends Component {
    validate = () => validateNewSurvey(this.props.newSurvey)

    render() {
        const {
            handleNameChange,
            handleDescriptionChange,
            addField,
            handleStartChange,
            handleEndChange,
            handleSubmit,
            handleCancel
        } = this.props;
        const {
            name,
            description,
            author,
            fields,
            startDate,
            endDate
        } = this.props.newSurvey;
        return (
            <section className="container section">
                <HeadLine heading='Create New Survey' subheading={`Field count: ${fields.length}`} />
                <ReadOnly label="Author" value={author} />
                <Input label="Survey Name" value={name} placeholder="What would you say..." onChange={handleNameChange} />
                <TextArea label="Description" value={description} onChange={handleDescriptionChange} placeholder="e.g. We want to know more about you!" />
                <EditableFieldsList fields={fields} />
                <NewFieldButtons addField={addField} />
                <DatePicker label='Start Date' value={startDate} onChange={handleStartChange} />
                <DatePicker label='End Date' value={endDate} onChange={handleEndChange} />
                <SubmitForm onSubmit={handleSubmit} onCancel={handleCancel} isValid={this.validate()} />
            </section>
        );
    }
}

const mapStateToProps = state => ({ newSurvey: state.newSurvey })

const mapDispatchToProps = dispatch => ({
    handleNameChange: ({ target: { value } }) => dispatch(updateName(value)),
    handleDescriptionChange: ({ target: { value } }) => dispatch(updateDescription(value)),
    addField: (fieldType) => dispatch(addField(fieldType)),
    handleStartChange: ({ target: { value } }) => dispatch(updateStartDate(value)),
    handleEndChange: ({ target: { value } }) => dispatch(updateEndDate(value)),
    handleCancel: () => window.confirm("You are about to clear the current Survey") && dispatch(clear()),
    handleSubmit: async () => {
        const response = await fetch('/api/survey/save', {
            method: 'POST',
            data: this.props.newSurvey
        })
        response.success && dispatch(clear());
    }
}
)

export default connect(mapStateToProps, mapDispatchToProps)(NewSurvey);