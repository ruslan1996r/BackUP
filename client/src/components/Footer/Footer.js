import React, { Component } from 'react';
import SocialNetwork from '../SocialNetwork/SocialNetwork'


import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='footer-background'>
      <div className='footer'>
        <p className='all-right-reserved'>@ 2018 Всі права захищені.</p>
        <SocialNetwork className='footer-social-network' />
      </div>
      </div>
    );
  }
}

export default Footer;
