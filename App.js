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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  // const [screenState, setScreenState] = useState(GLOBAL.SCREEN.WELCOME);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={GLOBAL.SCREEN.WELCOME}>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={GLOBAL.SCREEN.WELCOME}
            component={WelcomeScreen}
          />
          <Stack.Screen name={GLOBAL.SCREEN.LOGIN} component={LoginScreen} />
          <Stack.Screen
            name={GLOBAL.SCREEN.MATERIAL}
            component={MaterialScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
