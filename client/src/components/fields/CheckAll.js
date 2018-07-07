import React, { Component } from 'react';

export default class CheckAll extends Component {

  handleChange = (event) =>
    this.props.onChange(this.props.id, event.target.checked)

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
          onChange={this.handleChange}
        />
        {option.label}
      </label>
    ));
  }

  render() {
    return (
      <div className="field ">
        <label className="label">{this.props.question}</label>
        <div className="control is-grouped is-grouped-multiline">
          {this.renderCheckBoxes()}
        </div>
      </div>
    );
  }
}
