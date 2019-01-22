import React, { Component } from 'react';

import Facebook from '../../format/header/header-facebook.svg';
import Instagram from '../../format/header/header-instagram.svg';
import Telegram from '../../format/header/header-telegram.svg';

import './SocialNetwork.css'

class SocialNetwork extends Component {
  render() {
    return (
      <div>
        <a
          target="_blank"
          href='https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'>
          <img src={Facebook} />
        </a>
        <a
          target="_blank"
          href='https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'>
          <img src={Instagram} />
        </a>
        <a
          target="_blank"
          href='https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'>
          <img src={Telegram} />
        </a>
      </div>
    );
  }
}

export default SocialNetwork;
