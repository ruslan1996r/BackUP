import React, { Component } from 'react';

import './Button.css'

class Button extends Component {
  render() {
    return (
      <div>
        <button>
          {this.props.buttonName}
        </button>
      </div>
    );
  }
}

export default Button;
