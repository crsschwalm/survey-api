import React, { Component } from 'react';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="field">
        <label className="label">{this.props.fieldTitle}</label>
        <div className="control">
          <textarea className="textarea" placeholder="Start typing!" />
        </div>
      </div>
    );
  }
}
