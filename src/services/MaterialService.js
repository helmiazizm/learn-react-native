import clientService from './ApiClient';

const MaterialService = () => {
  const {get} = clientService();

  const callMaterialService = async () => {
    try {
      let data = await get('/material');
      // console.log('data', data);
      return data;
    } catch (error) {
      console.log('error materialservice', error);
      throw error;
    }
  };
  return {
    callMaterialService,
  };
};

export default MaterialService;
