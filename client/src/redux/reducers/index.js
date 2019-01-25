import { combineReducers } from 'redux';

import { INIT_DATA } from '../actions/actionTypes';
import actionTypesSSS from '../actions/actionTypesSSS';
// import initDataReducer from './initDataReducer';

const initialState = {
  number: '007',
  initData: { testjson: '123' },
  indexData: {
    // "testjson": "reducer init data",
    adultPainting: [],
    shop: [],
    chldrenPainting: [],
    info: [],
    orderList: [],
    gallery: [],
    feedback: [],
  },

  shopData: {
    goods: [],
    regPictures: [],
  },
};

// const numberReducer = (state = initialState, action) => {
//   return state;
// }

const initIndexDataReducer = (state = initialState.indexData, action) => {
  switch (action.type) {
    case INIT_DATA:
      console.log(INIT_DATA);
      console.log(action.indexData.default);
      return action.indexData.default;
    //reducer возвращает данные из action в state
    //обновленяет state (это будет новый стейт)
    default:
      return state;
  }
};

const shopDataReducer = (state = initialState.shopData, action) => {
  //сперва пустой массив без картинок
  switch (action.type) {
    case actionTypesSSS.SHOP_PAGE_DATA_FETCHED:
      console.log(actionTypesSSS.SHOP_PAGE_DATA_FETCHED);
      console.log(action.payload.default);
      return action.payload.default; //подгружаются картинки в пустой массив
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  // number: numberReducer,
  indexData: initIndexDataReducer,
  shopData: shopDataReducer,
});

export default rootReducer;
