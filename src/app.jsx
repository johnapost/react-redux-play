// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import * as reducers from './redux/index';
import App from './components/App';

const store = createStore(combineReducers(reducers));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
