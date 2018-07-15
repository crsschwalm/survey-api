import React from 'react';

const EditableCheckBox = ({ value, onChange, remove }) => (
    <div className="tags has-addons">
        <a className="tag"> <input style={{ verticalAlign: 'middle' }} value={value} type="checkbox" onChange={onChange} /></a>

        <span className="tag is-link">{value}</span>
        <a className="tag is-delete" onClick={remove}></a>
    </div>
)

export default EditableCheckBox;