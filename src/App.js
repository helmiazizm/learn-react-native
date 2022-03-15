import React from 'react';
import { Provider } from 'react-redux';
import Loading from './components/Loading';
import RootNavigator from './navigation/RootNavigator';
import configureStore from './stores/store';
import {StatusBar} from 'react-native';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#F2F2F2'}/>
      <RootNavigator />
      <Loading/>
    </Provider>
  );
};

export default App;
