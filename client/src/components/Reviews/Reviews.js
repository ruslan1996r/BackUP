import React, { Component } from 'react';
import Button from '../Button/Button';
import ReviewSlider from './ReviewSlider';

import './Reviews.css'

class OrderSlider extends Component {
  render() {
    return (
      <div className='triangle-and-reviews'>
        <div className='triangle'>
          triangle
          </div>
        <div>
          <ReviewSlider />
          <Button buttonName={'ДОДАТИ ВІДГУК'} />
        </div>
      </div>
    );
  }
}

export default OrderSlider;
