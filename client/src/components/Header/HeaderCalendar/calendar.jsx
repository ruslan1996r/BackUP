import { Calendar, LocaleProvider } from 'antd';
import React, { Component } from 'react';
import './HeaderCalendar.css';

import uk_UA from '../../../../node_modules/antd/lib/locale-provider/uk_UA';

import '../../../../node_modules/moment/locale/uk';
import CalendarModal from './CalendarModal';

class CalendarPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenModal: false,
    };
  }
  getListData = (value) => {
    let listData = this.props.listData;

    let day = value._d.getDate();
    let month = value._d.getMonth();
    let year = value._d.getFullYear();
    let y = listData.filter((event) => {
      let res = !!(
        event.day == day &&
        event.month == month &&
        event.year == year
      );
      return res;
    });
    return y; //listData || [];
  };

  handleOpenCalendarModal = () => {
    this.setState({ isOpenModal: true });
  };

  handleCloseCalendarModal = () => {
    this.setState({ isOpenModal: false });
  };

  dateCellRender = (value) => {
    const listData = this.getListData(value);
    return (
      <ul className="events">
        {this.props.listData.map((item) => (
          <li
            key={item.content}
            onClick={() => this.handleOpenCalendarModal()}
          >
            {item.content}
          </li>
        ))}
      </ul>
    );
  };

  getMonthData = (value) => {
    if (value.month() === 8) {
      return;
    }
  };

  monthCellRender = (value) => {
    const num = this.getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
      </div>
    ) : null;
  };

  render() {
    // console.log("calendar props", tprops);
    return (
      <LocaleProvider locale={uk_UA}>
        <div>
          <Calendar
            dateCellRender={this.dateCellRender}
            fullscreen={true}
            monthCellRender={this.monthCellRender}
            // defaultValue={moment}
            // onPanelChange={onPanelChange}
            // onSelect={onSelect}
            onSelect={(e) => {
              console.log(e);
            }}
            className={
              this.props.displayCalendar ? 'show' : 'hide'
            }
          />
          <CalendarModal
            isVisible={this.state.isOpenModal}
            handleClose={this.handleCloseCalendarModal}
            dayData={{
              events: [
                'варнава',
                'zalupa',
                'я веган',
                'hitler',
              ],
              info: { day: 2, month: 1, year: 2019 },
            }}
          />
        </div>
      </LocaleProvider>
    );
  }
}
export default CalendarPage;
