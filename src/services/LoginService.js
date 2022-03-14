import clientService from './ApiClient';

const LoginService = () => {
  const {post} = clientService();

  const callLoginService = async (username, password) => {
    try {
      let data = await post('/login', {
        username: username,
        password: password,
      });
      return data;
    } catch (error) {
      console.log('error loginservice', error);
      throw error;
    }
  };
  return {
    callLoginService,
  };
};

export default LoginService;
