import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ToDoButton = ({
  buttonConfig,
  text,
  index,
  handleDone,
  act,
  handleDelete,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={
        text !== 'Delete' ? () => handleDone(index) : () => handleDelete(act)
      }>
      <Text style={{color: buttonConfig.color}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    padding: 5,
    marginLeft: 5,
  },
});

export default ToDoButton;
