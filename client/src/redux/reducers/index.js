import { combineReducers } from 'redux';

import {INIT_DATA} from '../../redux/actions/actionTypes';
// import initDataReducer from './initDataReducer';

const initialState = {
  number: "007",
  initData: {"testjson": "hui"},
  indexData: {
    "testjson": "reducer init data", 
    "adultPainting": [],
    "shop":[],
  }
}

// const numberReducer = (state = initialState, action) => {
//   return state;
// }

const initIndexDataReducer = (state = initialState.indexData, action) => {
  switch (action.type){
    case INIT_DATA:
      console.log(INIT_DATA);
      console.log(action.indexData.default);
      return action.indexData.default 
      //reducer возвращает данные из action в state
      //обновленяет state (это будет новый стейт)
    default: 
      return state
  }
}

const rootReducer = combineReducers({
  // number: numberReducer,
  indexData: initIndexDataReducer
});

export default rootReducer;