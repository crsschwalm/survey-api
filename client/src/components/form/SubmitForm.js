import React from 'react';
const SubmitForm = ({ onSubmit, onCancel, isValid }) => (
    <div className="field is-grouped" style={{ justifyContent: 'center' }}>
        <div className="control">
            <button className="button is-light" onClick={onCancel}>
                Cancel
            </button>
        </div>
        <div className="control">
            <button className="button is-primary" disabled={!!isValid ? false : true} onClick={onSubmit}>
                Submit
            </button>
        </div>
    </div>
)

export default SubmitForm;