import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '../src/store';
import AppRouter from './router/router';

export default class Appp extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
            <AppRouter />
        </PersistGate>
      </Provider>
    );
  }
}