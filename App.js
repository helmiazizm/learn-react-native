/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from './src/components/HomeScreen';
import Flex from './src/screens/Flex';
import LoginScreen from './src/screens/LoginScreen';
import MaterialScreen from './src/screens/MaterialScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

const App = () => {
  return (
    // return <HomeScreen styles={Style} />;
    // return <LoginScreen />;
    <WelcomeScreen />
    // <MaterialScreen />
    // return <Flex />;
  );
};
export default App;
