import {useFormik} from 'formik';
import {useState} from 'react';
import * as Yup from 'yup';

export const Menu = service => {
  const {
    callMenuService,
    postMenuService,
    putMenuService,
    deleteMenuById,
    callMenuById,
  } = service();
  const [data, setData] = useState([]);
  const [dataById, setDataById] = useState({});

  const addMenu = async form => {
    try {
      const response = await postMenuService(form);
      console.log('responsemenu', response);
    } catch (error) {
      console.log(error);
    }
  };

  const updateMenu = async form => {
    try {
      const response = await putMenuService(form);
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

  const getMenuById = async id => {
    try {
      const res = await callMenuById(id);
      setDataById(res);
    } catch (error) {
      console.log(error);
    }
  };

  const delMenu = async id => {
    try {
      const res = await deleteMenuById(id);
      console.log('deleteres', res);
    } catch (error) {
      console.log('delerror', error);
    }
  };

  return {
    data,
    dataById,
    addMenu,
    getMenu,
    updateMenu,
    delMenu,
    getMenuById,
    setDataById,
  };
};
