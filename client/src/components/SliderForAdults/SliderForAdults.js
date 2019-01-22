import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import SliderAdultsEvent from './SlideAdultsEvent';
import Button from '../Button/Button';

import './SliderForAdults.css'

class SliderForAdults extends Component {
  render() {
    return (
      <div className='slider-for-adults'>
        <h2 className='adults-header'>Живопис для дорослих</h2>
        <SliderAdultsEvent />
        <Route path="/RegistrationPage" component={RegistrationPage} />
        <Link to={`/RegistrationPage`}>
          <Button buttonName={'ЗАРЕЄСТРУВАТИСЬ'} />
        </Link>
      </div>
    );
  }
}

export default SliderForAdults;
