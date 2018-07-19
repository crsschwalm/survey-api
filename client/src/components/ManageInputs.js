import React, { Fragment } from 'react';
import Input from '../components/form/Input'
import TextArea from '../components/form/TextArea'
import ReadOnly from '../components/form/ReadOnly'
import { connect } from 'react-redux'
import { updateName, updateDescription } from '../actions/manageSurveyActions';

const ManageInputs = ({ handleNameChange,
    handleDescriptionChange,
    manageSurvey: { name, description, author } }) => (
        <Fragment>
            <ReadOnly label="Author" value={author} />
            <Input label="Survey Name" value={name} placeholder="What would you say..." onChange={handleNameChange} />
            <TextArea label="Description" value={description} onChange={handleDescriptionChange} placeholder="e.g. We want to know more about you!" />
        </Fragment>
    );

const mapStateToProps = state => ({ manageSurvey: state.manageSurvey })

const mapDispatchToProps = dispatch => ({
    handleNameChange: ({ target: { value } }) => dispatch(updateName(value)),
    handleDescriptionChange: ({ target: { value } }) => dispatch(updateDescription(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageInputs);