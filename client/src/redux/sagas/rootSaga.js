import { all } from 'redux-saga/effects';

import fakeSaga from './fakeSaga';

export default function* () {
  yield all([
    fakeSaga(),
  ]);
}