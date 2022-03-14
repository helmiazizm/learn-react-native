import clientService from './ApiClient';

const MenuService = () => {
  const {get, post} = clientService();

  const callMenuService = async () => {
    try {
      let data = await get('/menus');
      console.log('datamaterial', data);
      return data;
    } catch (error) {
      console.log('error MenuService', error);
      throw error;
    }
  };

  const postMenuService = async form => {
    try {
      let data = await post('/menus', form);
      console.log(data);
      return data;
    } catch (error) {
      console.log('error post', error);
      throw error;
    }
  };
  return {
    callMenuService,
    postMenuService,
  };
};

export default MenuService;
