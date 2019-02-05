import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { FormValidation } from 'calidation';

import Button from '../Button/Button';

import success from './success.svg';
import './ModalArtOrder.css';

class ModalArtOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      address: '',
      email: '',
    };

    this.config = {
      name: {
        isRequired: "Введіть ім'я",
        isMinLength: {
          message: '',
          length: 2,
        },
      },
    };
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
    //помогает обрабатывать множество инпутов одной функцией, принимая лишь атрибут инпута NAME и VALUE
  };

  handleSubmit = (errors, fields, isValid) => {
    // evt.preventDefault();
    let { name, phone, email, address } = this.state;
    this.setState({
      name: '',
      phone: '',
      address: '',
      email: '',
    });
    this.props.onSubmit(name, email, phone, address);
  };

  renderForm = () => {
    return (
      <div className="popup-shop-container">
        <p
          onClick={this.props.onClose}
          className="popup-close-button"
        >
          ╳
        </p>
        <p className="modal-window-header-picture">
          Картина: {this.props.artName}
        </p>
        {/* <form
          id="art-order-form"
          onSubmit={this.handleSubmit}
        > */}
        <FormValidation
          id="art-order-form"
          onSubmit={this.handleSubmit}
          config={this.config}
        >
          {({ fields, errors, submitted }) => (
            <>
              <label className="popup-window-element">
                <p className="popup-element-header-styles">
                  Ваше ім'я:<p className>*</p>
                  {submitted && errors.fullName && (
                    <p>{errors.fullName}</p>
                  )}
                </p>
                <input
                  className="popup-input-element"
                  type="text"
                  name="name"
                  placeholder="Введіть Ваше ім'я"
                  value={fields.name}
                  // onChange={this.handleChange}
                />
              </label>
              <label className="popup-window-element">
                <p className="popup-element-header-styles">
                  Ваш e-mail:<p>*</p>
                  {submitted && errors.email && (
                    <p>{errors.email}</p>
                  )}
                </p>
                <input
                  className="popup-input-element"
                  type="mail"
                  name="email"
                  placeholder="Введіть Ваш e-mail"
                  value={fields.email}
                  // onChange={this.handleChange}
                />
              </label>
              <label className="popup-window-element">
                <p className="popup-element-header-styles">
                  Ваш номер телефону:<p>*</p>
                  {submitted && errors.phone && (
                    <p>{errors.phone}</p>
                  )}
                </p>
                <input
                  className="popup-input-element"
                  type="tel"
                  name="phone"
                  placeholder="Введіть Ваш телефон"
                  value={fields.phone}
                  // onChange={this.handleChange}
                />
              </label>
              <label className="popup-window-element">
                <p className="popup-element-header-styles">
                  Ваша адреса:<p>*</p>
                  {submitted && errors.address && (
                    <p>{errors.address}</p>
                  )}
                </p>
                <input
                  className="popup-input-element"
                  type="text"
                  name="address"
                  placeholder="Введіть Вашу адресу"
                  value={fields.address}
                  // onChange={this.handleChange}
                />
              </label>
              <div className="popup-button-container">
                <Button
                  className="popup-shop-button"
                  type="submit"
                  form="art-order-form"
                  buttonName="ВІДПРАВИТИ"
                />
              </div>
            </>
          )}
          {/* </form> */}
        </FormValidation>
      </div>
    );
  };

  renderThanksgiving = () => {
    return (
      <div
        className="purchase-notice-window"
        onClick={this.props.onClose}
      >
        <p
          onClick={this.props.onClose}
          className="popup-close-button"
        >
          ╳
        </p>
        <img src={success} />
        <div>
          <p className="success-text">
            Дякуємо за замовлення!
          </p>
          <p className="success-text">
            Найближчим часом наш менеджер зв'яжеться з Вами
          </p>
        </div>
      </div>
    );
  };

  render() {
    const form = this.renderForm();
    const thanks = this.renderThanksgiving();
    return (
      <Dialog
        onClose={this.props.onClose}
        open={this.props.visible}
      >
        <div className="modal-windows">
          {this.props.isOrdered ? thanks : form}
        </div>
      </Dialog>
    );
  }
}

export default ModalArtOrder;
// <div className="container-for-background-and-modal">
//   <div className="opacity-background-for-modal-windows" />
// </div>
