import React from 'react';

const InputCheckBox = ({ index, value, label, onChange }) => (
    <label
        key={index}
        className="checkbox"
        style={{ marginRight: '.5rem' }}
    >
        <input
            id={`${label}-${index}`}
            title={label}
            value={value}
            type="checkbox"
            style={{ marginRight: '.25rem' }}
            onChange={onChange}
        />
        {label}
    </label>
)

export default InputCheckBox;