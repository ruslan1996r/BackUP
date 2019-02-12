import React, { Component } from 'react';
import CalendarPage from './calendar.jsx';
import './HeaderCalendar.css';
import './CustomStyles.css';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class HeaderCalendar extends Component {
  constructor(props) {
    super(props);

    let width = window.innerWidth;

    if (width <= 650) {
      this.changeWidth = '';
    } else {
      this.changeWidth = 'Події:';
    }

    this.state = {
      displayCalendar: true,
      open: false,
      listData: [
        {
          day: 2,
          month: 0,
          year: 2019,
          type: 'warning',
          content: this.changeWidth,
        },
        {
          day: 2,
          month: 0,
          year: 2019,
          type: 'warning',
          content: '4',
        },
      ],
    };
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleShowCalendar = () => {
    this.setState({
      open: true,
    });
  };
  handleShowInput = () => {
    this.setState({
      displayInputForm: !this.state.displayInputForm,
    });
  };

  handleInputSubmit = () => {
    return null;
  };
  render() {
    return (
      <div className="father">
        <div
          className="calendar-events-onclick-area"
          onClick={() => this.handleShowCalendar()}
        >
          <p>КАЛЕНДАР ПОДІЙ</p>
          <img src="./format/header/calendar.svg" />
        </div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <div className="calend">
            <CalendarPage
              displayCalendar={this.state.displayCalendar}
              listData={this.state.listData}
            />
            <p
              className="burger-dropdown-menu-close"
              onClick={this.handleClose}
            >
              ╳
            </p>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default HeaderCalendar;
