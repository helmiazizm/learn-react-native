import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/login/LoginScreen';
import MaterialScreen from '../screens/MaterialScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import {LOGIN_PATH, MATERIAL_PATH, WELCOME_PATH} from './NavigationPath';
import {navigationRef} from './RootNavigation';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={WELCOME_PATH}>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name={WELCOME_PATH} component={WelcomeScreen} />
          <Stack.Screen name={LOGIN_PATH} component={LoginScreen} />
          <Stack.Screen name={MATERIAL_PATH} component={MaterialScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
