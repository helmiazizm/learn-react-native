import {Alert} from 'react-native';
import {goToScreen} from '../navigation/NavigationHelper';
import {HOME_PATH, WELCOME_PATH} from '../navigation/NavigationPath';
import clientService from './ApiClient';

const LoginService = () => {
  const {post} = clientService();

  const callLoginService = async form => {
    try {
      let data = await post('/auth/login', form);
      console.log('datadata', data);
      if (data !== undefined) {
        goToScreen(HOME_PATH, true);
      } else {
        Alert.alert('Unauthorized user');
      }
    } catch (error) {
      console.log('error loginservice', error);
      throw error;
    }
  };

  const callLogoutService = async () => {
    try {
      let data = await post('/auth/logout', {
        message: 'Logging out',
      });
      console.log('data', data);
      return data;
    } catch (error) {
      console.log('error logoutservice', error);
      throw error;
    }
  };
  return {
    callLoginService,
    callLogoutService,
  };
};

export default LoginService;
