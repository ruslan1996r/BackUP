import React, { Component } from 'react';

import './Button.css'

class Button extends Component {
  render() {
    return (
      <div>
        {this.props.buttonName}
      </div>
    );
  }
}

export default Button;
