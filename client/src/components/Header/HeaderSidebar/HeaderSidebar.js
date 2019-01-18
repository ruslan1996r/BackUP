import React, { Component } from 'react';

import SocialNetwork from '../../SocialNetwork/SocialNetwork';

import './HeaderSidebar.css'

class HeaderSidebar extends Component {
  render() {
    return (
      <div className='header-sidebar'>
        <div>
          <img src='./format/header/header-logo.svg' />
        </div>
        <div className='sidebar-text'>
          <hr />
          <p>ПРИЄДНУЙСЯ ДО НАС</p>
        </div>
        <SocialNetwork />
      </div>
    );
  }
}

export default HeaderSidebar;
