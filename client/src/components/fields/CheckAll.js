import React, { Component } from 'react';

export default class CheckAll extends Component {
  constructor(props) {
    super(props);
    this.state = { checkedOptions: {} }
  }

  handleChange = (event) => {
    const checkedOptions = this.state.checkedOptions;
    event.target.checked ? checkedOptions[event.target.id] = event.target.value : delete checkedOptions[event.target.id]
    this.setState({ checkedOptions: checkedOptions })
    return this.props.onChange(this.props._id, Object.values(this.state.checkedOptions))
  }

  renderCheckBoxes() {
    return this.props.options.map(option => (
      <label
        key={option._id}
        className="checkbox"
        style={{ marginRight: '.5rem' }}
      >
        <input
          id={option._id}
          value={option.label}
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
