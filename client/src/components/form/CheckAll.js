import React from 'react';
import { connect } from 'react-redux'
import { handleUserCheck } from '../../actions/takeSurveyActions';
import InputCheckBox from './InputCheckbox';


const CheckAll = ({ label, parsedOptions, handleUserCheck, onChange }) => (
  //handles user input but does not update the answer array for checks
  <div className="field ">
    <label className="label">{label}</label>
    <div className="control is-grouped is-grouped-multiline">
      <CheckBoxes options={parsedOptions} onChange={handleUserCheck} />
    </div>
  </div>
)

const CheckBoxes = ({ options, onChange }) =>
  options.map(
    ([key, value], index) =>
      <InputCheckBox index={index} key={index} label={key} value={value} onChange={onChange} />
  );

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleUserCheck: ({ target: { title } }) => dispatch(handleUserCheck(ownProps.index, title)),
})

const mapStateToProps = (state, ownProps) => {
  const { options } = state.takeSurvey.fields[ownProps.index];
  return { parsedOptions: Object.entries(options) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckAll);