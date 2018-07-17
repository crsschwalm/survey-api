import React, { Component } from 'react';
import EditableFieldsList from '../components/fields/EditableFieldsList'
import SubmitForm from '../components/form/SubmitForm'
import NewFieldButtons from '../components/form/NewFieldButtons'
import Input from '../components/form/Input'
import TextArea from '../components/form/TextArea'
import DatePicker from '../components/form/DatePicker'
import HeadLine from '../components/form/HeadLine'
import ReadOnly from '../components/form/ReadOnly'
import Loading from '../components/Loading'
import { connect } from 'react-redux'
import { validateSurveyForm } from '../services/validationService';
import {
    updateName, updateDescription, updateStartDate, updateEndDate,
    clearForm, addField,
    fetchSurvey, createSurvey, updateSurvey, deleteSurvey
} from '../actions/manageSurveyActions';


class ManageSurvey extends Component {
    componentDidMount() {
        const { match: { params } } = this.props;
        !!params.surveyId ? this.props.fetchSurvey(params.surveyId) : this.props.clearForm();
    }

    validate = () => validateSurveyForm(this.props.manageSurvey)

    render() {
        const {
            handleNameChange, handleDescriptionChange, addField,
            handleStartChange, handleEndChange, handleCancel,
            createSurvey, updateSurvey, deleteSurvey
        } = this.props;
        const {
            _id, name, description,
            author, fields, startDate,
            endDate, loading
        } = this.props.manageSurvey;
        return (
            <section className="container section">
                <Loading isLoading={loading} />
                <HeadLine heading='Create New Survey' subheading={`Field count: ${fields.length}`}>
                    {!!_id ?
                        <span
                            style={{ position: 'absolute', top: '3rem', right: '1.5rem' }}
                            onClick={deleteSurvey}
                            className="tag is-danger is-large">
                            Delete
                            <a className="delete"></a>
                        </span> :
                        null}
                </HeadLine>
                <ReadOnly label="Author" value={author} />
                <Input label="Survey Name" value={name} placeholder="What would you say..." onChange={handleNameChange} />
                <TextArea label="Description" value={description} onChange={handleDescriptionChange} placeholder="e.g. We want to know more about you!" />
                <EditableFieldsList fields={fields} />
                <NewFieldButtons addField={addField} />
                <DatePicker label='Start Date' value={startDate} onChange={handleStartChange} />
                <DatePicker label='End Date' value={endDate} onChange={handleEndChange} />
                <SubmitForm onSubmit={!!_id ? updateSurvey : createSurvey} onCancel={handleCancel} isValid={this.validate()} />
            </section>
        );
    }
}

const mapStateToProps = state => ({ manageSurvey: state.manageSurvey })

const mapDispatchToProps = dispatch => ({
    handleNameChange: ({ target: { value } }) => dispatch(updateName(value)),
    handleDescriptionChange: ({ target: { value } }) => dispatch(updateDescription(value)),
    addField: (fieldType) => dispatch(addField(fieldType)),
    handleStartChange: ({ target: { value } }) => dispatch(updateStartDate(value)),
    handleEndChange: ({ target: { value } }) => dispatch(updateEndDate(value)),
    clearForm: () => dispatch(clearForm()),
    handleCancel: () => window.confirm("You are about to clear the current Survey") && dispatch(clearForm()),
    fetchSurvey: (id) => dispatch(fetchSurvey(id)),
    createSurvey: () => dispatch(createSurvey()),
    updateSurvey: () => dispatch(updateSurvey()),
    deleteSurvey: () => dispatch(deleteSurvey()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageSurvey);