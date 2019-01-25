import actionTypeSSS from './actionTypesSSS';

export const initShopPage = () => ({
  type: actionTypeSSS.INIT_SHOP_PAGE
})

export const shopPageDataFetched = (data) => ({
  type: actionTypeSSS.SHOP_PAGE_DATA_FETCHED,
  payload: data
})


