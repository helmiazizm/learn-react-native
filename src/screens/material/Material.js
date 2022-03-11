import {MATERIAL_PATH} from '../../navigation/NavigationPath';
import {goToScreen} from '../../navigation/NavigationHelper';
import {useState} from 'react';

export const Material = service => {
  const {callMaterialService} = service();
  const [data, setData] = useState([]);

  const getMaterial = async () => {
    try {
      const response = await callMaterialService();
      setData(response.data);
      // console.log('responsedatamaterial', response);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    data,
    getMaterial,
  };
};
