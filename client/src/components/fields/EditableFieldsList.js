import React from 'react';
import EditableField from './EditableField';
const EditableFieldsList = ({ fields }) => (
    fields.map((field, index) => (
        <EditableField key={index} index={index} />
    ))
)

export default EditableFieldsList