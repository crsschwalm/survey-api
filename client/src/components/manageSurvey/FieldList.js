import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import Field from './Field';
import { addField, removeField } from '../../actions/manageSurveyActions';
import NewFieldButtons from '../form/NewFieldButtons'

const FieldList = ({ manageSurvey: { fields }, addField, removeField }) => (
    <Fragment>
        {fields.map((field, index) => (
            <Field key={index} index={index} removeField={() => removeField(index)} />
        ))}
        <NewFieldButtons addField={addField} />
    </Fragment>
)

const mapStateToProps = state => ({ manageSurvey: state.manageSurvey })

const mapDispatchToProps = dispatch => ({
    addField: (fieldType) => dispatch(addField(fieldType)),
    removeField: (fieldIndex) => dispatch(removeField(fieldIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(FieldList);
