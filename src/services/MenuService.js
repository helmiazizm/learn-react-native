import clientService from './ApiClient';

const MenuService = () => {
  const {get, post, del} = clientService();

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

  const deleteMenuById = async id => {
    try {
      let data = await del('/menus', id);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    callMenuService,
    postMenuService,
    deleteMenuById,
  };
};

export default MenuService;
