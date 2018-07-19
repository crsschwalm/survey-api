import React from 'react';

const NewFieldButtons = ({ addField }) => (
    <div className="field is-horizontal">
        <div className="field-label is-normal">
            <label className="label">Add Field Type:</label>
        </div>
        <div className="field-body">
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-outlined is-info" onClick={() => addField('TextInput')}>
                        Text Input
                    </button>
                </div>
                <div className="control">
                    <button className="button is-outlined is-success" onClick={() => addField('CheckAll')}>
                        Check All
                    </button>
                </div>
                <div className="control">
                    <button className="button is-outlined is-danger" onClick={() => addField('SelectFrom')}>
                        Select From
                    </button>
                </div>
            </div>
        </div>
    </div>
)

export default NewFieldButtons;