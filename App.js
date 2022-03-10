/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import HomeScreen from './src/components/HomeScreen';
import Flex from './src/screens/Flex';
import LoginScreen from './src/screens/LoginScreen';
import MaterialScreen from './src/screens/MaterialScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import GLOBAL from './src/global';

const App = () => {
  const [screenState, setScreenState] = useState(GLOBAL.SCREEN.WELCOME);

  switch (screenState) {
    case GLOBAL.SCREEN.LOGIN:
      return <LoginScreen onNavigate={setScreenState} />;
    case GLOBAL.SCREEN.WELCOME:
      return <WelcomeScreen onNavigate={setScreenState} />;
    case GLOBAL.SCREEN.MATERIAL:
      return <MaterialScreen onNavigate={setScreenState} />;
    default:
      break;
  }
};
export default App;
