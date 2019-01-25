import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageShopHeader from '../../components/PageShopHeader/PageShopHeader';
import PageShopBreadCrumbs from '../../components/PageShopBreadCrumbs/PageShopBreadCrumbs';
import PageShopContentList from '../../components/PageShopContentList/PageShopContentList';
import Footer from '../../components/Footer/Footer';

import { initShopPage } from '../../redux/actions/shopPageReducers';

import './ShopsPage.css';

class ShopsPage extends Component {
  componentDidMount() {
    //запускает actionCreator
    this.props.initShopPage();
  }

  render() {
    let a = this.props.shopData;
    return (
      <div>
        {/* {a.test} */}
        <PageShopHeader />
        <PageShopBreadCrumbs pageName={'Магазин'} />
        <PageShopContentList />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shopData: state.shopData, //данные для ShopsPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initShopPage: () => {
      //инициализация данных (предзагрузка JSON)
      dispatch(initShopPage());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopsPage);
