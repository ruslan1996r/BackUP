import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

import IndexPage from '../IndexPage/IndexPage';

import './ShopsPage.css'

class ShopsPage extends Component {
  render() {
    return (
      <div>
        But something!
        <Route exact path="/" component={IndexPage} />
          <Link to={`/`}>
            На головну
          </Link>
      </div>
    );
  }
}

export default ShopsPage;
