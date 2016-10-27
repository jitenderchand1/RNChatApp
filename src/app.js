import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure.store';
import App from './container/app.container';

const store = configureStore();

export default class ChatApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


