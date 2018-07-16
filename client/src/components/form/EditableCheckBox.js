import React from 'react';

const EditableCheckBox = ({ title, value, onChange, remove }) => (
    <div className="tags has-addons" style={{ paddingTop: '.5rem' }}>
        <a className="tag"><input title={title} checked={value} type="checkbox" onChange={onChange} /></a>
        <span className="tag is-link">{title}</span>
        <span className="tag is-delete" onClick={remove}></span>
    </div>
)

export default EditableCheckBox;