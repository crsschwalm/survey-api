import React from 'react';

const EditableCheckBox = ({ title, value, onChange, onDelete }) => (
    <div className="tags has-addons" style={{ paddingTop: '.5rem' }}>
        <a className="tag"><input title={title} checked={value} type="checkbox" onChange={onChange} /></a>
        <span className="tag is-link">{title}</span>
        <span className="tag is-delete" onClick={onDelete}></span>
    </div>
)

export default EditableCheckBox;