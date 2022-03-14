import clientService from './ApiClient';

const CustomerService = () => {
  const {get} = clientService();

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
  return {
    callCustomerService,
  };
};

export default CustomerService;
