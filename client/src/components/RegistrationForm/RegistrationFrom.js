import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormValidation } from 'calidation';

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

    this.config = {
      fullName: {
        isRequired: "Введіть ім'я",
        isMinLength: {
          message: '',
          length: 2,
        },
      },

      email: {
        isEmail: 'Будь ласка, введіть коректний email',
        isRequired: 'Будь ласка, введіть email',
      },

      phoneNumber: {
        isRequired: 'Введіть номер коректно',
        isMinLength: {
          message: '',
          length: 2,
        },
        isMaxLength: {
          message: '',
          length: 14,
        },
      },

      category: {
        isRequired: 'Оберіть категорію',
      },

      categoryPainting: {
        isRequired: 'Оберіть категорію живопису',
      },
      selectedPicture: {
        isRequired: 'Оберіть картину',
      },
    };
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = ({ errors, fields, isValid }) => {
    // evt.preventDefault();
    let {
      fullName,
      email,
      phoneNumber,
      category,
      categoryPainting,
      selectedPicture,
    } = this.state;
    this.setState({
      fullName: '',
      email: '',
      phoneNumber: '',
      category: '',
      categoryPainting: '',
      selectedPicture: '',
    });
    // if (isValid) {
    console.log('isValid: ', isValid);
    console.log('errors: ', errors);

    // server.saveAllTheData(fields);
    // }
    // call actionCreator(fullName, email, phoneNumber, category, selectedPicture)
  };

  render() {
    return (
      <div className="registrate-container">
        <FormValidation
          id="registrate"
          onSubmit={this.handleSubmit}
          config={this.config}
        >
          {({ fields, errors, submitted }) => (
            <>
              <div className="registration-area">
                <label className="registration-area-element">
                  <p className="text-under-input">
                    П.І.Б:<p>* &ensp;</p>
                    {submitted && errors.fullName && (
                      <p>{errors.fullName}</p>
                    )}
                  </p>
                  <input
                    className="input-styles"
                    type="text"
                    name="fullName"
                    placeholder="Введіть Ваше призвіще, ім'я та по батькові"
                    value={fields.fullName}
                  />
                </label>
                <label className="registration-area-element">
                  <p className="text-under-input">
                    Ваш email:<p>*&ensp;</p>
                    {submitted && errors.email && (
                      <p>{errors.email}</p>
                    )}
                  </p>
                  <input
                    className="input-styles"
                    type="text"
                    name="email"
                    placeholder="Введіть Вашу електронну адресу"
                    value={fields.email}
                  />
                </label>
                <label className="registration-area-element">
                  <p className="text-under-input">
                    Ваш телефон: <p>*&ensp;</p>
                    {submitted && errors.phoneNumber && (
                      <p>{errors.phoneNumber}</p>
                    )}
                  </p>
                  <input
                    className="input-styles"
                    type="text"
                    name="phoneNumber"
                    placeholder="Введіть номер Вашого телефону"
                    value={fields.phoneNumber}
                  />
                </label>
                <label className="registration-area-element">
                  <p className="text-under-input">
                    Оберіть категорію: <p>*&ensp;</p>
                    {submitted && errors.category && (
                      <p>{errors.category}</p>
                    )}
                  </p>

                  <select
                    className="input-styles"
                    name="category"
                    value={fields.category}
                  >
                    <option value="">
                      Оберіть категорію
                    </option>
                    <option value="grapefruit">
                      Grapefruit
                    </option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                  </select>
                </label>
                <label className="registration-area-element">
                  <p className="text-under-input">
                    Оберіть категорію живопису:{' '}
                    <p>*&ensp;</p>
                    {submitted &&
                      errors.categoryPainting && (
                        <p>{errors.categoryPainting}</p>
                      )}
                  </p>
                  <select
                    className="input-styles"
                    name="categoryPainting"
                    value={this.state.categoryPainting}
                    onChange={this.handleChange}
                  >
                    <option value="">
                      Оберіть категорію
                    </option>
                    <option value="grapefruit">
                      Grapefruit
                    </option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                  </select>
                </label>
                <p className="text-under-input">
                  Яку з картин Ви бажаєте малювати?:
                  <p>*</p>
                </p>
              </div>
              <div className="hiddenradio">
                {this.props.regPictures.map((item, key) => {
                  return (
                    <div
                      key={key}
                      className="hiddenradio-elem"
                    >
                      <label className="radio">
                        <input
                          type="radio"
                          name="test"
                          value="small"
                        />
                        <div className="radio__text">
                          <img src={item} />
                        </div>
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="send-button-container">
                <Button
                  className="send-button"
                  type="submit"
                  form="registrate"
                  buttonName="ВІДПРАВИТИ"
                />
              </div>
            </>
          )}
        </FormValidation>
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
