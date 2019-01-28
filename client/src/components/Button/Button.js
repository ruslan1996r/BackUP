import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onClick}
          className={this.props.className}
          type={this.props.type}
          form={this.props.form}
        >
          {this.props.buttonName}
        </button>
      </div>
    );
  }
}

export default Button;
