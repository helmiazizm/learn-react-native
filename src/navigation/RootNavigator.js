import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/login/LoginScreen';
import MaterialScreen from '../screens/material/MaterialScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import {LOGIN_PATH, MATERIAL_PATH, WELCOME_PATH} from './NavigationPath';
import {navigationRef} from './RootNavigation';
import {Login} from '../screens/login/Login';
import LoginService from '../services/LoginService';
import {Material} from '../screens/material/Material';
import MaterialService from '../services/MaterialService';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={WELCOME_PATH}>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name={WELCOME_PATH} component={WelcomeScreen} />
          <Stack.Screen name={LOGIN_PATH}>
            {props => (
              <LoginScreen {...props} login={() => Login(LoginService)} />
            )}
          </Stack.Screen>
          <Stack.Screen name={MATERIAL_PATH}>
            {props => (
              <MaterialScreen
                {...props}
                material={() => Material(MaterialService)}
              />
            )}
          </Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
