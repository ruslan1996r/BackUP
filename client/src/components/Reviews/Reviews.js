import React, { Component } from 'react';
import Button from '../Button/Button';
import ReviewSlider from './ReviewSlider';
import ModalFeedback from '../ModalFeedback/ModalFeedback';

import './Reviews.css';

class OrderSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
    };
  }

  handleAddFeedback = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  onSubmitModal = (name, email, feedbackText) => {
    console.log(name, email, feedbackText);
    // actionCreator('OTPRAVIT_NA_SERVAK', payload: {name, email, feedbackText})
    this.setState({
      isModalVisible: false,
    });
    return null;
  };

  onCloseModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {
    return (
      <div
        id="triangle-and-review-id"
        className="triangle-and-reviews"
      >
        <div className="triangle">
          <svg
            width="50%"
            height="50%"
            viewBox="0 0 2 2"
            preserveAspectRatio="none"
            className="figure"
          >
            <polygon fill="#ffdd15" points="0,0 2, 1 0,2" />
          </svg>
        </div>

        <div className="reviews-container">
          <h2 className="reviews-header">Відгуки</h2>
          <ReviewSlider />
          <Button
            buttonName={'ДОДАТИ ВІДГУК'}
            onClick={() => {
              this.handleAddFeedback();
              console.log('click');
            }}
          />
        </div>
        <ModalFeedback
          visible={this.state.isModalVisible}
          onSubmit={this.onSubmitModal}
          onClose={this.onCloseModal}
        />
      </div>
    );
  }
}

// сюда передать мап диспатч ту пропс
export default OrderSlider;
