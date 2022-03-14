import axios from 'axios';
import {useState} from 'react';
import {API_URL} from '@env';
import {HOME_PATH, MENU_PATH} from '../../navigation/NavigationPath';
import LoginService from '../../services/LoginService';
import {goToScreen} from '../../navigation/NavigationHelper';

export const Login = service => {
  const {callLoginService} = service();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const changeEmail = e => {
    setForm({
      ...form,
      email: e.nativeEvent.text,
    });
  };

  const changePassword = e => {
    setForm({
      ...form,
      password: e.nativeEvent.text,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await callLoginService(form.email, form.password);
      goToScreen(HOME_PATH, true);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    form,
    changeEmail,
    changePassword,
    handleSubmit,
  };
};
