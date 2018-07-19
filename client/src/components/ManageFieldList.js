import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import ManageField from './ManageField';
import { addField } from '../actions/manageSurveyActions';
import NewFieldButtons from './form/NewFieldButtons'

const ManageFieldList = ({ manageSurvey: { fields }, addField }) => (
    <Fragment>
        {fields.map((field, index) => (
            <ManageField key={index} index={index} />
        ))}
        <NewFieldButtons addField={addField} />
    </Fragment>
)

const mapStateToProps = state => ({ manageSurvey: state.manageSurvey })

const mapDispatchToProps = dispatch => ({
    addField: (fieldType) => dispatch(addField(fieldType))
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageFieldList);
