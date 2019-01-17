import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

import IndexPage from '../IndexPage/IndexPage';

import './RegistrationPage.css'

class RegistrationPage extends Component {
  render() {
    return (
      <div>
        Вы на странице регистрации!
        <Route exact path="/" component={IndexPage} />
          <Link to={`/`}>
            На головну
          </Link>
      </div>
    );
  }
}

export default RegistrationPage;
