import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import {ActionType} from '../store/globalActionType';

const Form = () => {
  const [inputActivity, setInputActivity] = useState({
    activity: '',
  });
  const dispatch = useDispatch();
  const setActivityAdd = text => {
    dispatch({type: ActionType.ADD, text: text});
  };

  const handleInputActivity = act => {
    setInputActivity({...inputActivity, activity: act});
  };

  const handleAddActivity = () => {
    if (inputActivity.activity.match(/^(?!\s*$).+/)) {
      setActivityAdd(inputActivity.activity);
      handleCancel();
    }
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
    </>
  );
};

export default Form;
