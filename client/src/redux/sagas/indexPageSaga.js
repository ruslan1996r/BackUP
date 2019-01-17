import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest } from 'redux-saga/effects'

import * as fakeData from './fakeData.json';

function* indexPageSaga() { //watchIndexPageSaga перехват. action и передаёт выполнение на indexPageSaga
  yield delay(3000);
  console.log(fakeData);
  yield put({  //генерирует action с данными, полученными с сервера
    type: 'INIT_DATA',
    indexData: fakeData //здесь будет запрос на сервер
  });
}

function* watchIndexPageSaga() {
  yield takeLatest('INIT', indexPageSaga) 
  //перехватывает все actions with type INIT и передаёт indexPageSaga
  //takeLatest - обрабатывает последний action этого типа (INIT)
}

export {indexPageSaga, watchIndexPageSaga};