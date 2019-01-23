import React, { Component } from 'react';

import './Button.css'

class Button extends Component {
  render() {
    return (
      <div>
        <button className={this.props.className}>
          {this.props.buttonName}
        </button>
      </div>
    );
  }
}

export default Button;
