import {useState} from 'react';

export const Customer = service => {
  const {callCustomerService} = service();
  const [data, setData] = useState([]);

  const getCustomer = async () => {
    try {
      const response = await callCustomerService();
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    data,
    getCustomer,
  };
};
