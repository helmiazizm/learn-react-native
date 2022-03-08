import React from 'react';
import {Text, TextInput} from 'react-native';

const Content = ({styles}) => {
  return (
    <>
      <TextInput style={styles.input} placeholder="What needs to be done?" />
    </>
  );
};

export default Content;
