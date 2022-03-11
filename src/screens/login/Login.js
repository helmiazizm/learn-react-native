import axios from 'axios';
import {useState} from 'react';
import {API_URL} from '@env';
import {MATERIAL_PATH} from '../../navigation/NavigationPath';

export const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const changeUsername = e => {
    setForm({
      ...form,
      username: e.nativeEvent.text,
    });
  };

  const changePassword = e => {
    setForm({
      ...form,
      password: e.nativeEvent.text,
    });
  };

  const handleSubmit = async onNavigate => {
    console.log(form);
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username: form.username,
        password: form.password,
      });
      console.log(response);
      onNavigate.replace(MATERIAL_PATH);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    form,
    changeUsername,
    changePassword,
    handleSubmit,
  };
};
