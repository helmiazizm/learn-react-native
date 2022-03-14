import clientService from './ApiClient';

const LoginService = () => {
  const {post} = clientService();

  const callLoginService = async (email, password) => {
    try {
      let data = await post('/login', {
        email: email,
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
