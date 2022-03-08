import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ToDoButton = ({
  buttonConfig,
  command,
  index,
  handleDone,
  text,
  handleDelete,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={
        command !== 'Delete'
          ? () => handleDone(index, text)
          : () => handleDelete(text)
      }>
      <Text style={{color: buttonConfig.color}}>{command}</Text>
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
