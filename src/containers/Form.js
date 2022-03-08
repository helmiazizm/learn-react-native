import React, {useState} from 'react';
// import { DevSettings, Text } from 'react-native';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import Storage from '../store/Storage';

const Form = () => {
  const [inputActivity, setInputActivity] = useState({
    activity: '',
  });
  const {allActivity, allFinished, setAllActivity, setAllFinished} = Storage();

  const handleInputActivity = act => {
    setInputActivity({...inputActivity, activity: act});
  };

  const handleAddActivity = () => {
    setAllActivity(allActivity => [...allActivity, inputActivity.activity]);
  };

  return (
    <>
      <Input handleInputActivity={handleInputActivity} />
      <SubmitButton handleAddActivity={handleAddActivity} />
    </>
  );
};

export default Form;
