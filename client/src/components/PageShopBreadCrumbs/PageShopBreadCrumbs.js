import React, { Component } from 'react';
import {
  BrowserRouter as Route,
  Link,
} from 'react-router-dom';

import IndexPage from '../../pages/IndexPage/IndexPage';

import './PageShopBreadCrumbs.css';

class PageShopBreadCrumbs extends Component {
  render() {
    return (
      <div className="bread-crumbs">
        <Route exact path="/" component={IndexPage} />
        <div className="empty-container" />
        <div className="crumbs">
          <Link to={`/`}>
            <p className="route-to-main">Головна</p>
          </Link>
          /
          <p className="bread-crumbs-text">
            {this.props.pageName}
          </p>
        </div>
      </div>
    );
  }
}

export default PageShopBreadCrumbs;
