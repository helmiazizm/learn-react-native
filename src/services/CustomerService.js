import clientService from './ApiClient';

const CustomerService = () => {
  const {get, post} = clientService();

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
  return {
    callCustomerService,
    postCustomerService,
  };
};

export default CustomerService;
