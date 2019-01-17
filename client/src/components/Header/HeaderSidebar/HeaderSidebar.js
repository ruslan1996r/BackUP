import React, { Component } from 'react';

import SocialNetwork from '../../SocialNetwork/SocialNetwork';

import './HeaderSidebar.css'

class HeaderSidebar extends Component {
  render() {
    return (
      <div>
        <div className='sidebar-text'>
          <h1>The<br />Format</h1>
          <p>СТУДІЯ ЖИВОПИСУ</p>
        </div>
        <div className='yellow-block'>
        </div>
        <hr/>
        <p>ПРИЄДНУЙСЯ ДО НАС</p>
        <SocialNetwork />
      </div>
    );
  }
}

export default HeaderSidebar;
