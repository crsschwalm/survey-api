import React from 'react';

const Input = ({ value, label, placeholder, onChange, onKeyPress, help }) => (
    <div className="field is-horizontal">
        <div className="field-label is-normal">
            <label className="label">{label}</label>
        </div>
        <div className="field-body">
            <div className="field">
                <div className="control">
                    <input value={value} onChange={onChange} onKeyPress={onKeyPress} className="input" type="text" placeholder={placeholder} />
                </div>
                {!!help ? <p className="help">{help}</p> : null}
            </div>
        </div>
    </div>
)

export default Input;