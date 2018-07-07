import React, { Component } from 'react';

export default class SelectFrom extends Component {

  handleChange = (event) => this.props.onChange(this.props._id, event.target.value)

  renderDropDownOptions = () =>
    this.props.options.map(option => (
      <option key={option._id} id={option.id} value={option.label}>
        {option.label}
      </option>
    ));

  render() {
    return (
      <div className="field">
        <label className="label">{this.props.question}</label>
        <div className="control">
          <div className="select">
            <select onChange={this.handleChange}>
              {this.renderDropDownOptions()}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
