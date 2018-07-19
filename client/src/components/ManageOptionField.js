import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import EditableCheckBox from './form/EditableCheckBox'
import Input from './form/Input';
import { addOption, removeOption, setExpectedOptions } from '../actions/manageSurveyActions';


const ManageOptionField = (props) => (
    <Fragment>
        <Input label="Answer" placeholder="e.g. Choose this option" help='Add answer with "Enter"' onKeyPress={props.addOption} />
        <AvailableOptions {...props} />
    </Fragment>
)

const AvailableOptions = ({ parsedOptions, removeOption, setExpectedOptions }) => (
    !!parsedOptions.length ?
        <Fragment>
            <p><strong>Select the expected response</strong></p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'wrap' }}>
                {parsedOptions.map(
                    ([key, value], index) =>
                        <div key={index} style={{ padding: '0 1rem' }}>
                            <EditableCheckBox title={key} value={value} type="EditableCheckBox" onChange={setExpectedOptions} onDelete={() => removeOption(key)} />
                        </div>
                )}
            </div>
        </Fragment>
        : null
)

const mapDispatchToProps = (dispatch, ownProps) => ({
    addOption: (event) => {
        if (event.key === 'Enter' && !!event.target.value) {
            dispatch(addOption(ownProps.fieldIndex, event.target.value))
            event.target.value = '';
        }
    },
    removeOption: (value) => dispatch(removeOption(ownProps.fieldIndex, value)),
    setExpectedOptions: ({ target: { title } }) => dispatch(setExpectedOptions(ownProps.fieldIndex, title)),
}
)

const mapStateToProps = (state, ownProps) => {
    const { options } = state.manageSurvey.fields[ownProps.fieldIndex];
    return { parsedOptions: Object.entries(options) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageOptionField);
