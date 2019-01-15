import React, { Component } from 'react';

import HeaderCalendar from './HeaderCalendar';
import HeaderVideo from './HeaderVideo';
import HeaderDropDownMenu from './HeaderDropDownMenu';
import HeaderPhoneNumber from './HeaderPhoneNumber';
import HeaderSocialNetwork from './HeaderSocialNetwork';
import HeaderSidebar from './HeaderSidebar';
import Button from './Button'

class Header extends Component {
  render() {
    return (
      <div>
        <div className='sidebar'>
          <HeaderSocialNetwork />
          <HeaderSidebar />
        </div>
        <div className='video-header'>
          <HeaderCalendar />
          <HeaderVideo />
          <HeaderDropDownMenu />
          <HeaderPhoneNumber />
          <Button />
        </div>
      </div>
    );
  }
}

export default Header;
