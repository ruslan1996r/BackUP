import React, { Component } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

class CalendarModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  humanizeMonth = (m) => {
    const l = {
      0: 'Січень',
      1: 'Лютий',
      2: 'Березень',
      3: 'Квітень',
      4: 'Травень',
      5: 'Червень',
      6: 'Липень',
      7: 'Серпень',
      8: 'Вересень',
      9: 'Жовтень',
      10: 'Листопад',
      11: 'Грудень',
    };
    return l[m];
  };
  render() {
    return (
      <div open={this.props.isVisible}>
        <Dialog
          open={this.props.isVisible}
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {this.props.dayData.info.day}{' '}
            {this.humanizeMonth(
              this.props.dayData.info.month,
            )}{' '}
            {this.props.dayData.info.year}
          </DialogTitle>
          <DialogContent>
            {this.props.dayData.events.map((event, key) => {
              return (
                <div>
                  <li key={key}>{event}</li>
                  <p
                    className="burger-dropdown-menu-close"
                    onClick={this.props.handleClose}
                  >
                    ╳
                  </p>
                </div>
              );
            })}
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default CalendarModal;
