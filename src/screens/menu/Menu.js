import {useFormik} from 'formik';
import {useState} from 'react';
import * as Yup from 'yup';

export const Menu = service => {
  const {callMenuService, postMenuService} = service();
  const [data, setData] = useState([]);
  

  const addMenu = async form => {
    try {
      const response = await postMenuService(form);
      console.log('responsemenu', response);
    } catch (error) {
      console.log(error);
    }
  };

  const getMenu = async () => {
    try {
      const response = await callMenuService();
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    data,
    addMenu,
    getMenu,
  };
};
