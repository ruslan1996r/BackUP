import React, { Component } from 'react';
import HeaderVideoText from '../HeaderVideoText/HeaderVideoText'

import './HeaderVideo.css'

class HeaderVideo extends Component {
  render() {
    return (
      <div className='main-video'>
        <video 
          width="100%"
          height="auto"
          preload="auto"
          autoPlay
          muted 
          loop="loop"
          // poster="./post.jpg"
        >
          <source src="./formatVideo.mp4" type="video/mp4"></source>
          {/* <source src="./bg/daisy-stock-webm-video.webm" type="video/webm"></source> */}
        </video>
        <HeaderVideoText />
      </div>
    );
  }
}

export default HeaderVideo;
