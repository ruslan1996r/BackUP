import React, { Component } from 'react';

import HeaderCalendar from '../Header/HeaderCalendar/HeaderCalendar';
import HeaderDropDownMenu from '../Header/HeaderDropDownMenu/HeaderDropDownMenu';
import HeaderPhoneNumber from '../Header/HeaderPhoneNumber/HeaderPhoneNumber';

import './PageShopHeader.css';

class PageShopHeader extends Component {
  // componentDidMount(){
  //   if(indexData === {}){
  //     asyncRequest()
  //   }
  // }

  render() {
    return (
      <div>
        <HeaderDropDownMenu />
        <div className="header-container">
          <div className="page-shop-header">
            <img src="./format/header/header-logo.svg" />
          </div>
          <div className="calendar-and-menu-container">
            <div className="calendar-and-menu">
              <HeaderPhoneNumber />
              <HeaderCalendar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageShopHeader;
