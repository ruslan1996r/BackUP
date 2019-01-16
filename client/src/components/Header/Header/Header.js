import React, { Component } from 'react';

import HeaderCalendar from '../HeaderCalendar/HeaderCalendar';
import HeaderVideo from '../HeaderVideo/HeaderVideo';
import HeaderDropDownMenu from '../HeaderDropDownMenu/HeaderDropDownMenu';
import HeaderPhoneNumber from '../HeaderPhoneNumber/HeaderPhoneNumber';
import SocialNetwork from '../../SocialNetwork/SocialNetwork';
import HeaderSidebar from '../HeaderSidebar/HeaderSidebar';
import Button from '../../Button/Button'

import './Header.css'


class Header extends Component {
  render() {
    return (
      <div>
        <div className='sidebar'>
          <SocialNetwork />
          <HeaderSidebar />
        </div>
        <div className='video-header'>
          <HeaderCalendar />
          <HeaderVideo />
          <HeaderDropDownMenu />
          <HeaderPhoneNumber />
          <Button buttonName={''} />
        </div>
      </div>
    );
  }
}

export default Header;
