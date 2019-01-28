import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';

import Button from '../Button/Button';

import './ModalFeedback.css';

class ModalFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      feedb: '',
    };
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    let { name, email, feedb } = this.state;
    this.setState({
      name: '',
      email: '',
      feedb: '',
    });
    this.props.onSubmit(name, email, feedb);
  };
  render() {
    return (
      <Dialog
        className="popup-shop-container"
        onClose={this.props.onClose}
        open={this.props.visible}
      >
        <p
          onClick={this.props.onClose}
          className="popup-close-button"
        >
          ╳
        </p>
        <div
          className=""
          style={
            this.props.visible ? {} : { display: 'none' }
          }
        >
          <form
            id="feedback-form"
            onSubmit={this.handleSubmit}
          >
            <label className="popup-window-element">
              <p className="popup-element-header-styles">
                Ваше ім'я:<p>*</p>
              </p>
              <input
                className="popup-input-element"
                type="text"
                name="name"
                placeholder="Введіть Ваше ім'я"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label className="popup-window-element">
              <p className="popup-element-header-styles">
                Ваш e-mail:
                <p>*</p>
              </p>
              <input
                className="popup-input-element"
                type="email"
                name="email"
                placeholder="Введіть Ваш e-mail"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <label className="popup-window-element">
              <p className="popup-element-header-styles">
                Ваш відгук:
                <p>*</p>
              </p>
              <textarea
                className="popup-text-area-element"
                name="feedb"
                placeholder="Введіть Ваш відгук"
                rows="4"
                style={{ resize: 'none' }}
                value={this.state.feedb}
                onChange={this.handleChange}
              />
            </label>
            <div className="popup-button-container">
              <Button
                className="popup-shop-button"
                type="submit"
                form="feedback-form"
                buttonName="ВІДПРАВИТИ"
              />
            </div>
          </form>
        </div>
      </Dialog>
    );
  }
}

export default ModalFeedback;
