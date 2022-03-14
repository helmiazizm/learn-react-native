import clientService from './ApiClient';

const TableService = () => {
  const {get, post} = clientService();

  const callTableService = async () => {
    try {
      let data = await get('/tables');
      console.log('datamaterial', data);
      return data;
    } catch (error) {
      console.log('error TableService', error);
      throw error;
    }
  };

  const postTableService = async form => {
    try {
      let data = await post('/tables', form);
      console.log(data);
      return data;
    } catch (error) {
      console.log('error post', error);
      throw error;
    }
  };
  return {
    callTableService,
    postTableService,
  };
};

export default TableService;
