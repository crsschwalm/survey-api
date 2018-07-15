import React from 'react';
const SubmitForm = ({ onSubmit, onCancel, isValid }) => (
    <div className="field is-horizontal">
        <div className="field-label">
        </div>
        <div className="field-body">
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-light" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
                <div className="control">
                    <button className="button is-primary" disabled={isValid ? false : true} onClick={onSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
)

export default SubmitForm;