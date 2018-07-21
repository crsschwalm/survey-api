import React, { Fragment } from 'react';
import Input from '../components/form/Input'
import TextArea from '../components/form/TextArea'
import ReadOnly from '../components/form/ReadOnly'
import { connect } from 'react-redux'
import { setName, setDescription } from '../actions/manageSurveyActions';

const ManageInputs = ({ setName,
    setDescription,
    manageSurvey: { name, description, author } }) => (
        <Fragment>
            <ReadOnly label="Author" value={author} />
            <Input label="Survey Name" value={name} placeholder="What would you say..." onChange={setName} />
            <TextArea label="Description" value={description} onChange={setDescription} placeholder="e.g. We want to know more about you!" />
        </Fragment>
    );

const mapStateToProps = state => ({ manageSurvey: state.manageSurvey })

const mapDispatchToProps = dispatch => ({
    setName: value => dispatch(setName(value)),
    setDescription: value => dispatch(setDescription(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageInputs);