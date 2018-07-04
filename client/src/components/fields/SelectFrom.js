import React, { Component } from 'react';

export default class SelectFrom extends Component {
  constructor(props) {
    super(props);
    this.state = { value: undefined };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  renderDropDownOptions = () =>
    this.props.options.map(option => (
      <option key={option.id} id={option.id} value={option.label}>
        {option.label}
      </option>
    ));

  render() {
    return (
      <div className="field">
        <label className="label">{this.props.fieldTitle}</label>
        <div className="control">
          <div className="select">
            <select value={this.state.value} onChange={this.handleChange}>
              {this.renderDropDownOptions()}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
