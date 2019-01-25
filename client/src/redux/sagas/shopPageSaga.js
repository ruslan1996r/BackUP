import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest } from 'redux-saga/effects'

import * as fakeShopData from './fakeShopData.json';

function* shopPageSaga() { //watchShopPageSaga перехват. action и передаёт выполнение на shopPageSaga
  yield delay(500);
  console.log(fakeShopData);
  yield put({  //генерирует action с данными, полученными с сервера
    type: 'SHOP_PAGE_DATA_FETCHED',
    payload: fakeShopData //здесь будет запрос на сервер
  });
}

function* watchShopPageSaga() {
  yield takeLatest('INIT_SHOP_PAGE', shopPageSaga) 
  //перехватывает все actions with type INIT_SHOP_PAGE и передаёт shopPageSaga
  //takeLatest - обрабатывает последний action этого типа (INIT_SHOP_PAGE)
}

export {shopPageSaga, watchShopPageSaga};