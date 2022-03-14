import {useState} from 'react';

export const Customer = service => {
  const {
    callCustomerService,
    postCustomerService,
    deleteCustomerById,
    callCustomerById,
    putCustomerService,
  } = service();
  const [data, setData] = useState([]);
  const [dataById, setDataById] = useState({});

  const getCustomer = async () => {
    try {
      const response = await callCustomerService();
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCustomer = async form => {
    try {
      const response = await putCustomerService(form);
      console.log('responsemenu', response);
    } catch (error) {
      console.log(error);
    }
  };

  const addCustomer = async form => {
    try {
      await postCustomerService(form);
    } catch (error) {
      console.log(error);
    }
  };

  const getCustomerById = async id => {
    try {
      const res = await callCustomerById(id);
      setDataById(res);
    } catch (error) {
      console.log(error);
    }
  };

  const delCustomer = async id => {
    try {
      const res = await deleteCustomerById(id);
      console.log('deleteres', res);
    } catch (error) {
      console.log('delerror', error);
    }
  };

  return {
    data,
    dataById,
    setDataById,
    updateCustomer,
    getCustomerById,
    getCustomer,
    addCustomer,
    delCustomer,
  };
};
