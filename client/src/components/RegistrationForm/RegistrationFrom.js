import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';

import './RegistrationForm.css';

class RegistrationFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      phoneNumber: '',
      category: '',
      categoryPainting: '',
      selectedPicture: '',
    };
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    let { fullName, email, phoneNumber, category, categoryPainting, selectedPicture } = this.state;
    this.setState({
      fullName: '',
      email: '',
      phoneNumber: '',
      category: '',
      categoryPainting: '',
      selectedPicture: '',
    });
    // call actionCreator(fullName, email, phoneNumber, category, selectedPicture)
  };

  render() {
    return (
      <div className="registrate-container">
        <form id="registrate" onSubmit={this.handleSubmit}>
          <div className="registration-area">
            <label className="registration-area-element">
              <p className="text-under-input">
                П.І.Б:<p>*</p>
              </p>
              <input
                className="input-styles"
                type="text"
                name="fullName"
                placeholder="Введіть Ваше призвіще, ім'я та по батькові"
                value={this.state.fullName}
                onChange={this.handleChange}
              />
            </label>
            <label className="registration-area-element">
              <p className="text-under-input">
                Ваш email:<p>*</p>
              </p>

              <input
                className="input-styles"
                type="email"
                name="email"
                placeholder="Введіть Вашу електронну адресу"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <label className="registration-area-element">
              <p className="text-under-input">
                Ваш телефон: <p>*</p>
              </p>
              <input
                className="input-styles"
                type="text"
                name="phoneNumber"
                placeholder="Введіть номер Вашого телефону"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />
            </label>
            <label className="registration-area-element">
              <p className="text-under-input">
                Оберіть категорію: <p>*</p>
              </p>
              <select className="input-styles" name="category" value={this.state.category} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <label className="registration-area-element">
              <p className="text-under-input">
                Оберіть категорію живопису: <p>*</p>
              </p>
              <select
                className="input-styles"
                name="category"
                value={this.state.categoryPainting}
                onChange={this.handleChange}
              >
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <p className="text-under-input">
              Яку з картин Ви бажаєте малювати?:<p>*</p>
            </p>
          </div>
          <div className="hiddenradio">
            {this.props.regPictures.map((item, key) => {
              return (
                <div key={key} className="hiddenradio-elem">
                  <label className="radio">
                    <input type="radio" name="test" value="small" />
                    <div className="radio__text">
                      <img src={item} />
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
          <div className="send-button-container">
            <Button className="send-button" type="submit" form="registrate" buttonName="ВІДПРАВИТИ" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    regPictures: state.shopData.regPictures, //данные для RegistrationFrom
  };
};

export default connect(mapStateToProps)(RegistrationFrom);
