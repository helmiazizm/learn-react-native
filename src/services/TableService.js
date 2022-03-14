import clientService from './ApiClient';

const TableService = () => {
  const {get} = clientService();

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
  return {
    callTableService,
  };
};

export default TableService;
