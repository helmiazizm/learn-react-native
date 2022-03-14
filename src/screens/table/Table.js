import {useState} from 'react';

export const Table = service => {
  const {callTableService} = service();
  const [data, setData] = useState([]);

  const getTable = async () => {
    try {
      const response = await callTableService();
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    data,
    getTable,
  };
};
