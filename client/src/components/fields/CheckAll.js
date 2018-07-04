import React, { Component } from 'react';

export default class CheckAll extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderCheckBoxes() {
    return this.props.options.map(option => (
      <label
        key={option.id}
        className="checkbox"
        style={{ marginRight: '.5rem' }}
      >
        <input
          id={option.id}
          type="checkbox"
          style={{ marginRight: '.25rem' }}
        />
        {option.label}
      </label>
    ));
  }

  render() {
    return (
      <div className="field ">
        <label className="label">{this.props.fieldTitle}</label>
        <div className="control is-grouped is-grouped-multiline">
          {this.renderCheckBoxes()}
        </div>
      </div>
    );
  }
}
