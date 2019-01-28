import React, { Component } from 'react';

import ModalBurgerMenu from '../../ModalBurgerMenu/ModalBurgerMenu';
import './HeaderDropDownMenu.css';

class HeaderDropDownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBurgerModalVisible: false,
    };
  }

  handleOpenBurgerModal = () => {
    this.setState({
      isBurgerModalVisible: true,
    });
  };

  onCloseBurgerModal = () => {
    this.setState({
      isBurgerModalVisible: false,
    });
  };

  render() {
    return (
      <div className="burger">
        <div
          className="burger-icon"
          onClick={() => {
            this.handleOpenBurgerModal();
          }}
        >
          <span className="1" />
          <span className="2" />
          <span className="3" />
        </div>
        {}
        <ModalBurgerMenu
          visible={this.state.isBurgerModalVisible}
          onClose={() => {
            this.onCloseBurgerModal();
          }}
        />
      </div>
    );
  }
}

export default HeaderDropDownMenu;
