import React, { Component } from 'react';
import SocialNetwork from '../SocialNetwork/SocialNetwork'


import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div>
        <p>@ 2018 Всі права захищені.</p>
        <SocialNetwork />
      </div>
    );
  }
}

export default Footer;
