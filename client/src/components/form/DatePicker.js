import React from 'react';

const DatePicker = ({ value, label, onChange, help }) => (
    <div className="field is-horizontal">
        <div className="field-label is-normal">
            <label className="label">{label}</label>
        </div>
        <div className="field-body">
            <div className="field">
                <div className="control">
                    <input value={value} onChange={onChange} id="end-date-picker" className="input" type="date" />
                </div>
            </div>
        </div>
        {!!help ? <p className="help">{help}</p> : null}
    </div>
)

export default DatePicker;