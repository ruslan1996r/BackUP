import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger';

import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';
import { IndefiniteObservable } from 'indefinite-observable';

const composeEnhancers =
  window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, logger)),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();

module.hot.accept();
