import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import Button from '../Button/Button';

import './WorldEyeArtist.css'

class WorldEyeArtist extends Component {
  render() {
    return (
      <div className='world-and-picture'>
        <div>
            <h4>Базовий курс живопису</h4>
            <h2>«СВІТ ОЧИМА ХУДОЖНИКА»</h2>
            Даний курс дає можливість побачити наш дивний світ очима справжнього<br />
            художника, який любить свою роботу і передає своє бачення і натхнення<br />
            своїм учням. <a href="..">Детальніше</a>
            <Route path="/RegistrationPage" component={RegistrationPage} />
            <Link to={`/RegistrationPage`}>
              <Button buttonName={'ЗАРЕЄСТРУВАТИСЬ'} />
            </Link>
          </div>
          <div>
            SVG
        </div>
      </div>
    );
  }
}

export default WorldEyeArtist;
