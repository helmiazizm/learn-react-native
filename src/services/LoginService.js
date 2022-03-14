import clientService from './ApiClient';

const LoginService = () => {
  const {post} = clientService();

  const callLoginService = async (email, password) => {
    try {
      let data = await post('/auth/login', {
        email: email,
        password: password,
      });
      console.log('data', data);
      return data;
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
