import React, { Component } from 'react';

import Facebook from '../../format/header/header-facebook.svg';
import Instagram from '../../format/header/header-instagram.svg';
import Telegram from '../../format/header/header-telegram.svg';

import FacebookFooter from '../../format/header/footer-facebook.svg';
import InstagramFooter from '../../format/header/footer-instagram.svg';
import TelegramFooter from '../../format/header/footer-telegram.svg';


import './SocialNetwork.css'

class SocialNetwork extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <a
          target="_blank"
          href='https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'>
          <img src={this.props.className==='footer-social-network'? FacebookFooter: Facebook}/>
        </a>
        <a
          target="_blank"
          href='https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'>
          <img src={this.props.className==='footer-social-network'? InstagramFooter: Instagram} />
        </a>
        <a
          target="_blank"
          href='https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'>
          <img src={this.props.className==='footer-social-network'? TelegramFooter: Telegram} />
        </a>
      </div>
    );
  }
}

export default SocialNetwork;
