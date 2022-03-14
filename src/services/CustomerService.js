import clientService from './ApiClient';

const CustomerService = () => {
  const {get, post, del, put} = clientService();

  const callCustomerService = async () => {
    try {
      let data = await get('/customers');
      console.log('datamaterial', data);
      return data;
    } catch (error) {
      console.log('error CustomerService', error);
      throw error;
    }
  };

  const callCustomerById = async id => {
    try {
      let data = await get(`/customers/${id}`);
      console.log('datamaterial', data);
      return data;
    } catch (error) {
      console.log('error CustomerService', error);
      throw error;
    }
  };

  const postCustomerService = async form => {
    try {
      let data = await post('/customers', form);
      console.log(data);
      return data;
    } catch (error) {
      console.log('error post', error);
      throw error;
    }
  };

  const putCustomerService = async form => {
    try {
      let data = await put('/customers', form);
      console.log(data);
      return data;
    } catch (error) {
      console.log('error post', error);
      throw error;
    }
  };

  const deleteCustomerById = async id => {
    try {
      let data = await del('/customers', id);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    callCustomerService,
    postCustomerService,
    deleteCustomerById,
    callCustomerById,
    putCustomerService,
  };
};

export default CustomerService;
