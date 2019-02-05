import React, { Component } from 'react';
import {
  BrowserRouter as Route,
  Link,
} from 'react-router-dom';

import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import SliderAdultsEvent from './SlideAdultsEvent';
import Button from '../Button/Button';

import './SliderForAdults.css';

class SliderForAdults extends Component {
  toTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div
        id="slider-for-adults-id"
        className="slider-for-adults"
      >
        <h2 className="adults-header">
          Живопис для дорослих
        </h2>
        <SliderAdultsEvent />
        <Route
          path="/RegistrationPage"
          component={RegistrationPage}
        />
        <Link to={`/RegistrationPage`}>
          <Button
            onClick={this.toTop}
            className="main-window-registration-button"
            buttonName={'ЗАРЕЄСТРУВАТИСЬ'}
          />
        </Link>
      </div>
    );
  }
}

export default SliderForAdults;
