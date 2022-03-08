import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ToDoButton = ({buttonConfig, text}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={{color: buttonConfig.color}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    padding: 5,
    marginRight: 5,
  },
});

export default ToDoButton;
