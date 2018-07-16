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
import { validateSurveyForm } from '../services/validationService';
import { updateName, updateDescription, addField, updateStartDate, updateEndDate, clear, fetchSurveySuccess } from '../actions/manageSurveyActions';

class ManageSurvey extends Component {
    componentDidMount() {
        const { match: { params } } = this.props;
        !!params.surveyId ? this.getSurvey(params.surveyId) : this.props.clear();
    }

    getSurvey = async (id) => {
        const response = await fetch(`/api/survey/${id}`);
        const body = await response.json();
        response.status !== 200 && console.error(body.message);
        return this.props.fetchSurveySuccess(body);
    }

    handleSubmit = async () => {
        const response = await fetch('/api/survey/save', {
            method: 'POST',
            body: JSON.stringify(this.props.manageSurvey),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
        return response.success ? this.props.clear() : console.error(response.message);
    }

    validate = () => validateSurveyForm(this.props.manageSurvey)

    render() {
        const {
            handleNameChange,
            handleDescriptionChange,
            addField,
            handleStartChange,
            handleEndChange,
            handleCancel
        } = this.props;
        const {
            name,
            description,
            author,
            fields,
            startDate,
            endDate
        } = this.props.manageSurvey;
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
                <SubmitForm onSubmit={this.handleSubmit} onCancel={handleCancel} isValid={true} />
            </section>
        );
    }
}

const mapStateToProps = state => ({ manageSurvey: state.manageSurvey })

const mapDispatchToProps = dispatch => ({
    fetchSurveySuccess: (response) => dispatch(fetchSurveySuccess(response)),
    handleNameChange: ({ target: { value } }) => dispatch(updateName(value)),
    handleDescriptionChange: ({ target: { value } }) => dispatch(updateDescription(value)),
    addField: (fieldType) => dispatch(addField(fieldType)),
    handleStartChange: ({ target: { value } }) => dispatch(updateStartDate(value)),
    handleEndChange: ({ target: { value } }) => dispatch(updateEndDate(value)),
    clear: () => dispatch(clear()),
    handleCancel: () => window.confirm("You are about to clear the current Survey") && dispatch(clear())
}
)

export default connect(mapStateToProps, mapDispatchToProps)(ManageSurvey);