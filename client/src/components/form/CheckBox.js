import React from 'react';

const CheckBox = ({ value, onChange }) => (
    <label className="checkbox">
        <input value={value} type="checkbox" onChange={onChange} />
        {' '}{value}
    </label>
)

export default CheckBox;