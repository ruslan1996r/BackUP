const initShopDataReducer = (state, action) => {
  return {
    ...state,
    shopData: action.payload
  }
}

export default initShopDataReducer;