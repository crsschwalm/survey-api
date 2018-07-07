import React, { Component } from 'react';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event) => this.props.onChange(this.props.id, event.target.value)

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
