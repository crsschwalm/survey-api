import React, { Fragment } from 'react';
import Input from '../form/Input'
import TextArea from '../form/TextArea'
import ReadOnly from '../form/ReadOnly'
import { connect } from 'react-redux'
import { setName, setDescription } from '../../actions/manageSurveyActions';

const About = ({ setName,
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

export default connect(mapStateToProps, mapDispatchToProps)(About);