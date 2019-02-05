import { delay } from 'redux-saga';
import axios from 'axios';
import {
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

import { BUY_SUBMIT } from '../actions/actionTypesSSS';

function* buySaga(action) {
  axios
    .post('http://192.168.0.121:8000/shop/buy', {
      id: action.payload.id_art,
      name: action.payload.name,
      email: action.payload.email,
      phone: action.payload.phoneNumber,
      address: action.payload.address,
    })
    .then(function(response) {
      console.log("I'M GAY", response);
    })
    .catch(function(error) {
      console.log('YOU ARE GAY', error);
    });
}

function* watchBuySaga() {
  yield takeLatest(BUY_SUBMIT, buySaga);
}

export { buySaga, watchBuySaga };
