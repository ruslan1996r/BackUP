import React, { Component } from 'react';

import SocialNetwork from '../../SocialNetwork/SocialNetwork';

import './HeaderSidebar.css'

class HeaderSidebar extends Component {
  render() {
    return (
      <div className='header-sidebar'>
        <div className='header-image'>
          <img src='./format/header/header-logo.svg' />
        </div>
        {/* <div className='rotate-hr'>
          
          </div> */}
        <div className='sidebar-text'>
        <hr/>
          <p className='rotate-text'>ПРИЄДНУЙСЯ ДО НАС</p>
        </div>
        <div className='social-network'>
        <SocialNetwork />
        </div>
      </div>
    );
  }
}

export default HeaderSidebar;
