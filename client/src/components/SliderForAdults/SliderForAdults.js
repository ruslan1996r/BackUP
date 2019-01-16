import React, { Component } from 'react';
import SliderAdultsEvent from './SlideAdultsEvent';
import Button from '../Button/Button';

import './SliderForAdults.css'

class SliderForAdults extends Component {
  render() {
    return (
      <div>
        <SliderAdultsEvent />
        <Button />
      </div>
    );
  }
}

export default SliderForAdults;
