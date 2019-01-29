import React, { Component } from 'react';

import HeaderVideo from '../HeaderVideo/HeaderVideo';
import HeaderSidebar from '../HeaderSidebar/HeaderSidebar';
import HeaderDropDownMenu from '../HeaderDropDownMenu/HeaderDropDownMenu';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div
        id="sidebar-and-video-id"
        className="sidebar-and-video"
      >
        <div className="sidebar">
          <HeaderSidebar />
        </div>
        <div className="video-header">
          <HeaderVideo />
        </div>
        <div className="burger-drop-down-menu-container">
          <HeaderDropDownMenu />
        </div>
      </div>
    );
  }
}

export default Header;
