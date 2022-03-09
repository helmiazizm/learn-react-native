/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './src/store/store';

const store = createStore(rootReducer);

const Application = () => {
  <Provider store={store}>
    <App />
  </Provider>;
};

AppRegistry.registerComponent(appName, () => Application);
