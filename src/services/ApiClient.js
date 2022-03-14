import axios from 'axios';
import {API_URL} from '@env';
import {goToLogin} from '../navigation/NavigationHelper';

const client = axios.create({
  baseURL: API_URL,
});

client.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      goToLogin();
    }
    return Promise.reject(error)
  },
);

const clientService = () => {
  const post = async (url, params) => {
    try {
      let result = await client.post(url, params);
      return result.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          console.log('Unauthorized');
        }
      } else {
        console.log('Error');
      }
    }
  };

  const get = async url => {
    try {
      const result = await client.get(url);
      return result.data;
    } catch (error) {
      console.log('errorapiclient', error);
    }
  };

  return {post, get};
};

export default clientService;
