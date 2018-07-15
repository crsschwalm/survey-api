import React from 'react';

const Input = ({ value, label }) => (
    <div className="field is-horizontal">
        <div className="field-label is-normal">
            <label className="label">{label}</label>
        </div>
        <div className="field-body">
            <div className="field">
                <div className="control">
                    <input className="input" type="text" value={value} readOnly style={{ fontStyle: 'italic' }} />
                </div>
            </div>
        </div>
    </div>
)

export default Input;