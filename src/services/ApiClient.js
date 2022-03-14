import axios from 'axios';
import {API_URL} from '@env';
import {Alert} from 'react-native';

const client = axios.create({
  baseURL: API_URL,
});

const clientService = () => {
  const post = async (url, params) => {
    try {
      let result = await client.post(url, params);
      return result.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          console.log('Unauthorized');
          Alert.alert('Unauthorized user');
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

  const del = async (url, id) => {
    try {
      const result = await client.delete(`${url}/${id}`);
      return result.data;
    } catch (error) {
      console.log('errorapiclientdelete');
    }
  };

  const put = async (url, params) => {
    try {
      const result = await client.put(url, params);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {post, get, del, put};
};

export default clientService;
