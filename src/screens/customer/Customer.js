import {useState} from 'react';

export const Customer = service => {
  const {callCustomerService, postCustomerService, deleteCustomerById} =
    service();
  const [data, setData] = useState([]);

  const getCustomer = async () => {
    try {
      const response = await callCustomerService();
      setData(response.data);
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
    getCustomer,
    addCustomer,
    delCustomer,
  };
};
