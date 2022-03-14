import {useState} from 'react';

export const Table = service => {
  const {callTableService, postTableService} = service();
  const [data, setData] = useState([]);

  const getTable = async () => {
    try {
      const response = await callTableService();
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTable = async form => {
    try {
      const response = await postTableService(form);
      console.log('responsemenu', response);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    data,
    addTable,
    getTable,
  };
};
