import {useState} from 'react';

export const Menu = service => {
  const {callMenuService} = service();
  const [data, setData] = useState([]);

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
    getMenu,
  };
};
