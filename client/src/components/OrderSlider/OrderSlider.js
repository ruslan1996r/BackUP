import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

import OrderSliderEvent from './OrderSliderEvent';
import Button from '../Button/Button';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';

import './OrderSlider.css'

class OrderSlider extends Component {
  render() {
    return (
      <div className='order'>
        <hr className="hr-line"/>
        <h2>В нас можна замовити</h2>
        <div>
          <OrderSliderEvent />
        </div>
        <Route path="/RegistrationPage" component={RegistrationPage} />
        <Link to={`/RegistrationPage`}>
          <Button buttonName={'ЗАРЕЄСТРУВАТИСЬ'} />
        </Link>
      </div>
    );
  }
}

export default OrderSlider;
