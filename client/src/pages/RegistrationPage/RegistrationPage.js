import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageShopHeader from '../../components/PageShopHeader/PageShopHeader';
import PageShopBreadCrumbs from '../../components/PageShopBreadCrumbs/PageShopBreadCrumbs';
import RegistrationFrom from '../../components/RegistrationForm/RegistrationFrom';
import Footer from '../../components/Footer/Footer';

import './RegistrationPage.css';

class RegistrationPage extends Component {
  render() {
    return (
      <div>
        <PageShopHeader />
        <PageShopBreadCrumbs pageName={'Регістрація'} />
        <RegistrationFrom />
        <Footer />
      </div>
    );
  }
}

export default RegistrationPage;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(RegistrationPage);
