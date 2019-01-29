import React, { Component } from 'react';
// import { calendarImg } from './format/header/calendar.svg';

import './HeaderCalendar.css';

class HeaderCalendar extends Component {
  render() {
    return (
      <div className="calendar-and-svg">
        <p>КАЛЕНДАР ПОДІЙ</p>
        <img src="./format/header/calendar.svg" />
      </div>
    );
  }
}

export default HeaderCalendar;
