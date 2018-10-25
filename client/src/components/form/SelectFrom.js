import React from 'react';

const SelectFrom = ({ label, onChange, options }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <div className="select">
        <select onChange={(e) => onChange(e.target.value)} defaultValue='default'>
          <option disabled="disabled" value="default">Choose an option</option>
          <DropDownOptions options={options} />
        </select>
      </div>
    </div>
  </div>
);

const DropDownOptions = ({ options }) =>
  Object.keys(options).map((key, index) => (
    <option key={index} value={key}>
      {key}
    </option>
  ));

export default SelectFrom;