import LocalStorage from '../utils/LocalStorage';
import clientService from './ApiClient';

const LoginService = () => {
  const callLoginService = async (username, password) => {
    try {
      let data = await clientService().post(`/login`, {
        username,
        password,
      });
      await LocalStorage().setData('token', data.token);
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  return {
    callLoginService,
  };
};

export default LoginService;
