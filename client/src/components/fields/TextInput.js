import React, { Component } from 'react';

export default class TextInput extends Component {
  handleChange = (event) => this.props.onChange(this.props._id, event.target.value)

  render() {
    return (
      <div className="field">
        <label className="label">{this.props.question}</label>
        <div className="control">
          <textarea className="textarea" placeholder="Start typing!" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
