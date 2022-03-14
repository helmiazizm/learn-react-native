import clientService from './ApiClient';

const TableService = () => {
  const {get, post, del} = clientService();

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

  const deleteTableById = async id => {
    try {
      let data = await del('/tables', id);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    callTableService,
    postTableService,
    deleteTableById,
  };
};

export default TableService;
