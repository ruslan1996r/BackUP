import { all } from 'redux-saga/effects';
//Всё сперва попадает в Root Saga

import {indexPageSaga, watchIndexPageSaga} from './indexPageSaga';
import {shopPageSaga, watchShopPageSaga} from './shopPageSaga'

export default function* () {
  yield all([
    indexPageSaga(),
    shopPageSaga(),

    watchIndexPageSaga(),
    watchShopPageSaga(), 
  ]);
}