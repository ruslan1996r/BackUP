import React, { Component } from 'react';
import {
  BrowserRouter as Route,
  Link,
} from 'react-router-dom';

import Button from '../Button/Button';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import SliderChildrenEvent from './SliderChildrenEvent';

import clip from '../../format/children/clip.svg';

import './SliderForChildren.css';

class SliderForChildren extends Component {
  toTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div
        id="slider-for-children-id"
        className="slider-for-children"
      >
        <img
          className="slider-clip"
          src={clip}
          alt="Clip"
        />
        <h2 className="slider-header">
          Живопис для дітей та підлітків
        </h2>
        <SliderChildrenEvent />
        <Route
          path="/RegistrationPage"
          component={RegistrationPage}
        />
        <Link to={`/RegistrationPage`}>
          <Button
            onClick={this.toTop}
            className="main-window-registration-button"
            buttonName={'ЗАРЕЄСТРУВАТИСЬ'}
          />
        </Link>
      </div>
    );
  }
}

export default SliderForChildren;
