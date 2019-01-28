import React, { Component } from 'react';
import { sendFeedback } from '../../redux/actions/sendFeedback'; // СЮДА импортнуть (уже не нужно)

import { connect } from 'react-redux';

class ReviewSliderElement extends Component {
  render() {
    return (
      <div className="reviews-slider-element">
        {this.props.feedback.map((item, key) => {
          return (
            <div className="slider-element">
              <p className="text-review">{item.text}</p>
              <p className="author">{item.author}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    feedback: state.indexData.feedback, //данные для ReviewSliderElement
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendFeedback: (message) =>
      dispatch(sendFeedback(message)),
    //в скобках прописать название ACTION CREATOR, который потом отсылает action в STORE (REDUCER)

    //onClick={this.props.sendFeedback(item.name)} - повесить на кнопку отправления сообщения/фидбека
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReviewSliderElement);
