import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = () => {
  return (
    <>
      <TextInput style={styles.input} placeholder="What needs to be done?" />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    marginVertical: 12,
    borderWidth: 1,
    paddingHorizontal: 16,
    borderColor: '#000000',
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
});

export default Input;
