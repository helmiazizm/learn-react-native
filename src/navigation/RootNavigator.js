import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/login/LoginScreen';
import MenuScreen from '../screens/menu/MenuScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import {LOGIN_PATH, MENU_PATH, WELCOME_PATH} from './NavigationPath';
import {navigationRef} from './RootNavigation';
import {Login} from '../screens/login/Login';
import LoginService from '../services/LoginService';
import {Menu} from '../screens/menu/Menu';
import MenuService from '../services/MenuService';

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
          <Stack.Screen name={MENU_PATH}>
            {props => <MenuScreen {...props} menu={() => Menu(MenuService)} />}
          </Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
