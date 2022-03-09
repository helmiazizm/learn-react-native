import React, {useState} from 'react';
import {Text} from 'react-native';
// import { DevSettings, Text } from 'react-native';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';

const Form = ({allActivity, setAllActivity}) => {
  const [inputActivity, setInputActivity] = useState({
    activity: '',
  });

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
      {/* <Text>{allFinished[allFinished.length - 1]}</Text> */}
    </>
  );
};

export default Form;
