import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import ToDoScreen from '../screens/todo/ToDoScreen';
import {LOGIN_PATH, SPLASH_PATH, TODO_PATH} from './NavigationPath';
import PopupMenu from '../components/PopupMenu';
import {navigationRef} from './RootNavigation';
import SplashScreen from '../screens/SplasScreen';
import Heading from '../components/Heading';
import {Login} from '../screens/login/Login';
import LoginService from '../services/LoginService';
import {Todo} from '../screens/todo/Todo';
import ToDoService from '../services/TodoService';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={SPLASH_PATH}>
        <Stack.Screen
          name={SPLASH_PATH}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={LOGIN_PATH} options={{headerShown: false}}>
          {props => (
            <LoginScreen {...props} login={() => Login(LoginService)} />
          )}
        </Stack.Screen>
        <Stack.Group
          screenOptions={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#f2f2f2',
            },
            headerShadowVisible: false,
            headerLeft: () => <Heading title={'todos'} />,
            headerRight: () => <PopupMenu navigation={navigation} />,
          })}>
          <Stack.Screen name={TODO_PATH} options={{title: ''}}>
            {props => <ToDoScreen {...props} todo={() => Todo(ToDoService)} />}
          </Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
