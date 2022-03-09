import React, {useState} from 'react';
import {Text} from 'react-native';
// import { DevSettings, Text } from 'react-native';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import Storage from '../store/Storage';

const Form = () => {
  const [inputActivity, setInputActivity] = useState({
    activity: '',
  });
  const {allActivity, setAllActivity} = Storage();

  const handleInputActivity = act => {
    setInputActivity({...inputActivity, activity: act});
  };

  const handleAddActivity = () => {
    setAllActivity([...allActivity, inputActivity.activity]);
  };

  const handleCancel = () => {
    setInputActivity({...inputActivity, activity: ''});
  };

  return (
    <>
      <Input
        inputActivity={inputActivity}
        handleInputActivity={handleInputActivity}
      />
      <SubmitButton
        handleAddActivity={handleAddActivity}
        handleCancel={handleCancel}
      />
      <Text>{allActivity[allActivity.length - 1]}</Text>
    </>
  );
};

export default Form;
