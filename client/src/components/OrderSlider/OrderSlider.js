import React, { Component } from 'react';
import {
  BrowserRouter as Route,
  Link,
} from 'react-router-dom';

import OrderSliderEvent from './OrderSliderEvent';
import Button from '../Button/Button';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';

import './OrderSlider.css';

class OrderSlider extends Component {
  render() {
    return (
      <div id="order-id" className="order">
        <hr className="hr-line" />
        <h2 className="order-slider-header">
          В нас можна замовити
        </h2>
        <div className="order-slider-event">
          <OrderSliderEvent />
        </div>
        <Route
          path="/RegistrationPage"
          component={RegistrationPage}
        />
        <Link to={`/RegistrationPage`}>
          <Button
            className="main-window-registration-button"
            buttonName={'ЗАРЕЄСТРУВАТИСЬ'}
          />
        </Link>
      </div>
    );
  }
}

export default OrderSlider;
