import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

import RegistrationPage from '../../../pages/RegistrationPage/RegistrationPage';
import Button from '../../Button/Button';
import HeaderPhoneNumber from '../HeaderPhoneNumber/HeaderPhoneNumber';
import HeaderCalendar from '../HeaderCalendar/HeaderCalendar';
import HeaderDropDownMenu from '../HeaderDropDownMenu/HeaderDropDownMenu';

import './HeaderVideoText.css'

class HeaderVideoText extends Component {
  render() {
    return (
      <div>
        <div className='opacity-background'>
        </div>
        <div className='text'>
          <div className='top-header'>
            <div className='no-burger'>
              <HeaderPhoneNumber />
              <HeaderCalendar />
            </div>
            <HeaderDropDownMenu />
          </div>
          <div className='main'>
            <div className='main-text'>
              <h1>Курси малювання у Вінниці</h1>
              <p className='text-on-video'>Студія живопису «The Format» проводить курси малювання<br />
                для дітей та дорослих</p>
              <Route path="/RegistrationPage" component={RegistrationPage} />
              <Link to={`/RegistrationPage`}>
                <Button buttonName={'ЗАРЕЄСТРУВАТИСЬ'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderVideoText;
