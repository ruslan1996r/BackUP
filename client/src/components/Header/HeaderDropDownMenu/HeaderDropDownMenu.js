import React, { Component } from 'react';

import './HeaderDropDownMenu.css'

class HeaderDropDownMenu extends Component {
  render() {
    return (
      <div className='burger'>
        <div className='burger-icon'>
          <span className='1'></span>
          <span className='2'></span>
          <span className='3'></span>
        </div>
      </div>
    );
  }
}

export default HeaderDropDownMenu;
