import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import IndexPage from './pages/IndexPage/IndexPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ShopsPage from './pages/ShopsPage/ShopsPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={IndexPage} />
          <Route
            path="/RegistrationPage"
            component={RegistrationPage}
          />
          <Route path="/ShopsPage" component={ShopsPage} />

          {/* <Link to={`/`}>Index</Link><br />
          <Link to={`/RegistrationPage`}>RegistrationPage</Link><br />
          <Link to={`/ShopsPage`}>ShopsPage</Link><br /> */}
        </div>
      </Router>
    );
  }
}

export default App;
