import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import IndexPage from './pages/IndexPage';
import RegistrationPage from './pages/RegistrationPage';
import ShopsPage from './pages/ShopsPage';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={IndexPage} />
          <Route path="/RegistrationPage" component={RegistrationPage} />
          <Route path="/ShopsPage" component={ShopsPage} />

          <Link to={`/`}>Index</Link><br />
          <Link to={`/RegistrationPage`}>RegistrationPage</Link><br />
          <Link to={`/ShopsPage`}>ShopsPage</Link><br />
        </div>

      </Router>
    );
  }
}

export default App;
