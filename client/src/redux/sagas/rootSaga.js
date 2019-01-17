import { all } from 'redux-saga/effects';
//Всё сперва попадает в Root Saga

import {indexPageSaga, watchIndexPageSaga} from './indexPageSaga';

export default function* () {
  yield all([
    indexPageSaga(),
    watchIndexPageSaga()
  ]);
}