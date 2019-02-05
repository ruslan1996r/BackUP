import React, { Component } from 'react';
import {
  BrowserRouter as Route,
  Link,
} from 'react-router-dom';

import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import Button from '../Button/Button';
import WolrdEyeImg from '../../images/course-artboard.svg';

import './WorldEyeArtist.css';

class WorldEyeArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }

  handleDatails = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  // handleHideDatails = () => {
  //   this.setState({
  //     display: false,
  //   });
  // };

  toTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div
        id="world-and-picture-id"
        className="world-and-picture"
      >
        <div>
          <h4 className="artist-main-header">
            Базовий курс живопису
          </h4>
          <h2 className="artist-header">
            «СВІТ ОЧИМА ХУДОЖНИКА»
          </h2>
          <p className="text-in-artist">
            <p>
              Даний курс дає можливість побачити наш дивний
              світ очима справжнього художника, який любить
              свою роботу і передає своє бачення і натхнення
              своїм учням.
              <p
                className="details-p"
                onClick={() => {
                  this.handleDatails();
                }}
              >
                Детальніше >
              </p>
            </p>{' '}
            <div>
              <article
                // style={
                //   this.state.display
                //     ? { transform: 'translateY(100%)' }
                //     : { transform: 'translateY(0%)' }
                // }
                className={
                  this.state.display
                    ? 'details'
                    : 'hide-details'
                }
              >
                Was wollen wir trinken sieben Tage lang, was
                wollen wir trinken,so ein Durst! Was wollen
                wir trinken sieben Tage lang, was wollen wir
                trinken, so ein Durst!
              </article>
            </div>
          </p>
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
        <div className="img-border">
          <div className="on-border-elem">
            <div className="artist-eye-img">
              <img
                src={WolrdEyeImg}
                alt="Світ очима художника"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorldEyeArtist;
