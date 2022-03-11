import axios from 'axios';
import {useState} from 'react';
import {API_URL} from '@env';
import {MATERIAL_PATH} from '../../navigation/NavigationPath';
import LoginService from '../../services/LoginService';
import {goToScreen} from '../../navigation/NavigationHelper';

export const Login = service => {
  const {callLoginService} = service();
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

  const handleSubmit = async () => {
    console.log(form);
    try {
      const response = await callLoginService(form.username, form.password);
      console.log('response', response);
      goToScreen(MATERIAL_PATH, true);
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
