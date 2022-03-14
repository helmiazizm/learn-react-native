import clientService from './ApiClient';

const MenuService = () => {
  const {get} = clientService();

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
  return {
    callMenuService,
  };
};

export default MenuService;
