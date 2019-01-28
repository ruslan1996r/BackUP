import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Route,
  Link,
} from 'react-router-dom';

import './ModalBurgerMenu.css';

class ModalBurgerMenu extends Component {
  render() {
    return (
      <div>
        <div
          className="burger-menu-main-container"
          style={
            this.props.visible ? {} : { display: 'none' }
          }
        >
          <div className="opacity-on-sidebar" />
          <div className="main-background-container">
            <p
              className="burger-dropdown-menu-close"
              onClick={this.props.onClose}
            >
              ╳
            </p>
            <div className="burger-menu-links">
              <a href="#slider-for-adults-id">
                Живопис для дорослих
              </a>
              <a href="#slider-for-children-id">
                Живопис для дітей та підлітків
              </a>
              <a href="#world-and-picture-id">
                Світ очима художника
              </a>
              <a href="#order-id">В нас можна замовити</a>

              <a href="#sidebar-and-video-id">Головна</a>
              <a href="#shop-id">Магазин</a>
              <a href="#gallery-and-header-id">Галерея</a>
              <a href="#triangle-and-review-id">Відгуки</a>
              <a href="#container-map-id">Контакти</a>

              <p>КАКИЕ-ТО КОНТАКТНЫЕ ДАННЫЕ</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalBurgerMenu;
