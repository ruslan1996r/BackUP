import React, { Component } from 'react';
import Button from '../Button/Button';
import ReviewSlider from './ReviewSlider';

import './Reviews.css'

class OrderSlider extends Component {
  render() {
    return (
      <div className='triangle-and-reviews'>
        <div className='triangle'>
          <svg
            width="50%"
            height="50%"
            viewBox="0 0 2 2"
            preserveAspectRatio="none"
            className='figure'
          >
            <polygon
              fill="#ffdd15"
              points="0,0 2, 1 0,2"
            />
          </svg>
        </div>

        <div className='reviews-container'>
          <h2 className='reviews-header'>Відгуки</h2>
          <ReviewSlider />
          <Button buttonName={'ДОДАТИ ВІДГУК'} />
        </div>
      </div>
    );
  }
}

// сюда передать мап диспатч ту пропс
export default OrderSlider;
