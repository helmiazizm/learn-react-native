import {useState} from 'react';

export const Customer = service => {
  const {callCustomerService, postCustomerService} = service();
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

  return {
    data,
    getCustomer,
    addCustomer,
  };
};
