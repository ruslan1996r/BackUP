import React, { Component } from 'react';

import HeaderVideo from '../HeaderVideo/HeaderVideo';
import HeaderSidebar from '../HeaderSidebar/HeaderSidebar';


import './Header.css'


class Header extends Component {
  render() {
    return (
      <div className='sidebar-and-video'>
        <div className='sidebar'>
          <HeaderSidebar />
        </div>
        <div className='video-header'>
          <HeaderVideo />
        </div>
      </div>
    );
  }
}

export default Header;
