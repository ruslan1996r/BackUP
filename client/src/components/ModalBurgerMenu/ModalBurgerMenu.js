import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ModalBurgerMenu.css';

class ModalBurgerMenu extends Component {
  render() {
    return (
      <div
        className="burger-menu-main-container"
        style={
          this.props.visible ? {} : { display: 'none' }
        }
      >
        <div className="opacity-on-sidebar" />
        <div className="main-background-container">
          <div className="burger-menu-links">
            <div className="burger-bold-text">
              <a href="#slider-for-adults-id">
                Живопис для дорослих
              </a>
              <a href="#slider-for-children-id">
                Живопис для дітей та підлітків
              </a>
              <a href="#order-id">В нас можна замовити</a>
              <a href="#world-and-picture-id">
                Світ очима художника
              </a>
            </div>
            <div className="burger-light-text">
              <a
                href="#sidebar-and-video-id"
                onClick={this.props.onClose}
              >
                Головна
              </a>
              <a href="#shop-id">Магазин</a>
              <a href="#gallery-and-header-id">Галерея</a>
              <a href="#triangle-and-review-id">Відгуки</a>
              <a href="#container-map-id">Контакти</a>
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
