import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ModalBurgerMenu.css';

class ModalBurgerMenu extends Component {
  render() {
    const host = 'http://localhost:3000/'; //ПОМЕНЯТЬ НА АДРЕС СЕРВЕРА

    return (
      <div
        className="burger-menu-main-container"
        style={
          this.props.visible
            ? { transform: 'translateY(0)' }
            : { transform: 'translateY(-200%)' }
        }
      >
        <div className="opacity-on-sidebar" />
        <div className="main-background-container">
          <div className="burger-menu-links">
            <div className="burger-bold-text">
              <a
                href={`${host}#slider-for-adults-id`}
                onClick={this.props.onClose}
              >
                Живопис для дорослих
              </a>
              <a
                href={`${host}#slider-for-children-id`}
                onClick={this.props.onClose}
              >
                Живопис для дітей та підлітків
              </a>
              <a href="#order-id">В нас можна замовити</a>
              <a href={`${host}#world-and-picture-id`}>
                Світ очима художника
              </a>
            </div>
            <div className="burger-light-text">
              <a
                href={`${host}#sidebar-and-video-id`}
                onClick={this.props.onClose}
              >
                Головна
              </a>
              <a
                href={`${host}#shop-id`}
                onClick={this.props.onClose}
              >
                Магазин
              </a>
              <a
                href={`${host}#gallery-and-header-id`}
                onClick={this.props.onClose}
              >
                Галерея
              </a>
              <a
                href={`${host}#triangle-and-review-id`}
                onClick={this.props.onClose}
              >
                Відгуки
              </a>
              <a
                href={`${host}#container-map-id`}
                onClick={this.props.onClose}
              >
                Контакти
              </a>
            </div>
            <div className="burger-menu-data-footer">
              <p className="burger-menu-data">
                {this.props.info.phoneNumber}
              </p>
              <p className="burger-menu-data">
                {this.props.info.email}
              </p>
            </div>
          </div>
          <p
            className="burger-dropdown-menu-close"
            onClick={this.props.onClose}
          >
            ╳
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.indexData.info, //данные для ModalBurgerMenu
  };
};

export default connect(mapStateToProps)(ModalBurgerMenu);
