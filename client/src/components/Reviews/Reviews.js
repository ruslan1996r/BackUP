import React, { Component } from 'react';
import Button from '../Button/Button';
import ReviewSlider from './ReviewSlider';

import './Reviews.css'

class OrderSlider extends Component {
  render() {
    return (
      <div> 
        <Button />
        <ReviewSlider />
      </div>
    );
  }
}

export default OrderSlider;
