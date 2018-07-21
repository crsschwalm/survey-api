import React from 'react';

const TextArea = ({ value, label, placeholder, onChange }) => (
    <div className="field is-horizontal">
        <div className="field-label is-normal">
            <label className="label">{label}</label>
        </div>
        <div className="field-body">
            <div className="field">
                <div className="control">
                    <textarea value={value} onChange={(event) => onChange(event.target.value)} className="textarea" placeholder={placeholder}></textarea>
                </div>
            </div>
        </div>
    </div>
)

export default TextArea;